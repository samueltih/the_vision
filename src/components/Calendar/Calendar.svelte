<script lang="ts">
	import { ChevronLeft, ChevronRight } from 'svelte-bootstrap-icons';
	import CalendarDay from './CalendarDay.svelte';
	import { getDay, compareAsc } from 'date-fns';

	export let sundayAsFirstDay: boolean = false;
	export let showToday: boolean = true;

	let today: Date = new Date();

	let month: number = today.getMonth();
	let year: number = today.getFullYear();

	let selectedDate: Date | undefined;

	function handleNextMonth() {
		month = (month + 1) % 12;
		if (month == 0) year++;
	}

	function handlePreviousMonth() {
		month = month == 0 ? 11 : month - 1;
		if (month === 11) year--;
	}

	function selectDate(date: Date) {
		selectedDate = date;
	}

	function getTotalDays(targetMonth: number) {
		if ([3, 5, 8, 10].includes(targetMonth)) return 30;
		else if (month === 1) return year % 4 === 0 ? 29 : 28;
		return 31;
	}

	function getDayOffset() {
		let offset = getDay(new Date(year, month, 1));
	}

	function compare(year: number, month: number, day: number): number {
		const cmp = new Date(today.toISOString());
		cmp.setDate(day);
		cmp.setMonth(month);
		cmp.setFullYear(year);
		return compareAsc(cmp, today);
	}
</script>

<div class="flex flex-col items-stretch w-80">
	{#key [month, year]}
		<div class="flex gap-2 items-center py-2">
			<button on:click={handlePreviousMonth}><ChevronLeft /></button>
			<span class="flex-1 text-center"
				>{new Date(year, month, 1).toLocaleString('en-US', {
					month: 'long',
					year: 'numeric'
				})}</span
			>
			<button on:click={handleNextMonth}><ChevronRight /></button>
		</div>
		<div class="grid grid-cols-7">
			<span class="text-center py-2">lun.</span>
			<span class="text-center py-2">mar.</span>
			<span class="text-center py-2">mer.</span>
			<span class="text-center py-2">jeu.</span>
			<span class="text-center py-2">ven.</span>
			<span class="text-center py-2">sam.</span>
			<span class="text-center py-2">dim.</span>
			<!-- {#each { length: getTotalDays(month) } as _, i}
				<CalendarDay date={i + 1} />
			{/each} -->
			{#each { length: getTotalDays(month) } as _, i}
				<CalendarDay date={i + 1} status={compare(year, month, i + 1)} />
			{/each}
			<!-- {#each { length: getTotalDays(month) } as _, i}
				<CalendarDay date={i + 1} />
			{/each} -->
		</div>
	{/key}
</div>
