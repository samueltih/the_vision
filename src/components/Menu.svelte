<script lang="ts">
	export let vertical: boolean = false;
</script>

<ul class="tv-menu horizontal">
	<slot />
</ul>

<style>
	.tv-menu {
		display: flex;
		list-style-type: none;
	}

	.horizontal {
		gap: 2rem;
	}

	.vertical {
		flex-direction: flex-col;
	}
</style>
