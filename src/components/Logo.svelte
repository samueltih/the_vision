<script lang="ts">
	let href: string | undefined;
</script>

<a href={href ?? '#'}>
	<img src="/logo.webp" alt="logo" />
</a>

<style>
	img {
		height: 10rem;
	}
</style>
