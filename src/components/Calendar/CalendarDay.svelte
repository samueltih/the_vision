<script lang="ts">
	import { Dot } from 'svelte-bootstrap-icons';

	export let date: number;
	export let status: number | undefined;

	function getStyle() {
		if (status != undefined && status == 0) return 'bg-yellow-100';
		if (status && status < 0) return 'opacity-60';
		return '';
	}
</script>

<span class={`flex flex-col items-center justify-center p-1 ${getStyle()}`}>
	{date}
	<div class="flex gap-2 items-center h-4">
		<Dot />
	</div>
</span>
