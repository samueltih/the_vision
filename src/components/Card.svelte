<script lang="ts">
	export let content: String;
</script>

<div class="tv-card">
	<img class="max-w-48 w-full" src="/banner_01.jpg" alt="thumbnail" />
	<div class="p-4 text-center bg-white font-semibold">
		{content}
	</div>
</div>

<style>
	.tv-card {
		border: 1px solid rgb(252, 193, 187);
	}
</style>
