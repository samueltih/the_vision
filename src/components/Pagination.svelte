<script lang="ts">
	import {
		ChevronDoubleLeft,
		ChevronDoubleRight,
		ChevronLeft,
		ChevronRight
	} from 'svelte-bootstrap-icons';

	let currentPage: number = 1;
	let totalPages: number = 5;

	export let maxVisiblePages: number = 4;

	function getMinimum(): number {
		if (maxVisiblePages >= totalPages) {
			return 1;
		}

		const radius = Math.floor(maxVisiblePages / 2);
		if (currentPage - radius < 1) {
			return 1;
		} else if (currentPage + radius > totalPages) {
			return totalPages - maxVisiblePages + 1;
		}
		return currentPage - radius;
	}

	function isFirstPage(): boolean {
		return currentPage === 1;
	}

	function isLastPage(): boolean {
		return currentPage === totalPages;
	}

	function firstPage(): void {
		currentPage = 1;
	}

	function previousPage(): void {
		currentPage = Math.max(currentPage - 1, 1);
	}

	function nextPage(): void {
		currentPage = Math.min(currentPage + 1, totalPages);
	}

	function lastPage(): void {
		currentPage = totalPages;
	}

	function goTo(pageNumber: number): void {
		if (pageNumber > 0 && pageNumber <= totalPages) currentPage = pageNumber;
	}
</script>

<div class="flex gap-4 items-center">
	{#key currentPage}
		<button on:click={firstPage} disabled={isFirstPage()}
			><ChevronDoubleLeft width={18} height={18} /></button
		>
		<button on:click={previousPage} disabled={isFirstPage()}
			><ChevronLeft width={18} height={18} /></button
		>
		{#each { length: Math.min(maxVisiblePages, totalPages) } as _, i}
			<button
				on:click={() => goTo(getMinimum() + i)}
				class={getMinimum() + i === currentPage ? 'text-red-500' : ''}>{getMinimum() + i}</button
			>
		{/each}
		<button on:click={nextPage} disabled={isLastPage()}
			><ChevronRight width={18} height={18} /></button
		>
		<button on:click={lastPage} disabled={isLastPage()}
			><ChevronDoubleRight width={18} height={18} /></button
		>
	{/key}
</div>
