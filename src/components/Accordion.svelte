<script lang="ts">
	import Collapsible from './Collapsible.svelte';
	import { Plus, Subtract } from 'svelte-bootstrap-icons';

	export let title: string = '';
	export let description: string = '';
	export let collapsed: boolean = true;
</script>

<div>
	<div class="flex gap-4 py-2">
		<span><slot name="title">{title}</slot></span>
		<span class="flex-1"
			><slot name="description">
				{description}
			</slot></span
		><span
			>{#if collapsed}
				<Plus />
			{:else}
				<Subtract />
			{/if}</span
		>
	</div>
	<Collapsible>
		<slot />
	</Collapsible>
</div>
