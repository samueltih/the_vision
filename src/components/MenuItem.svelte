<script lang="ts">
	export let href: string = '';
</script>

<li>
	<a class="tv-menu-item" href={href ?? '#'}><slot /></a>
</li>

<style>
	a.tv-menu-item {
		text-decoration: none;
		font-weight: 600;
		color: white;
		font-size: 13pt;
	}

	a.tv-menu-item:hover {
		color: yellow;
	}
</style>
