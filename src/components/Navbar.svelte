<script lang="ts">
	import Logo from './Logo.svelte';
	import Menu from './Menu.svelte';
	import MenuItem from './MenuItem.svelte';

	import { Search, Facebook, Linkedin, Instagram } from 'svelte-bootstrap-icons';
</script>

<nav class="flex justify-center" style="background-color: #2f2e2e">
	<div class="flex p-4 text-white max-w-screen-xl w-full">
		<span class="flex-1">
			<Logo />
		</span>
		<div class="flex flex-col items-end gap-2">
			<div class="flex justify-end gap-4 py-1 text-white">
				<a class="text-white" href="https://www.facebook.com/TheVisionCre">
					<Facebook width={25} height={25} /></a
				>
				<a class="text-white" href="https://www.linkedin.com/company/the-visionteam/">
					<Linkedin width={25} height={25} /></a
				>
				<a class="text-white" href="https://www.instagram.com/the_visionteam/">
					<Instagram width={25} height={25} /></a
				>
			</div>
			<div class="text-white flex gap-8" style="backgroundColor: '#2f2e2e'">
				<div class="flex flex-1 gap-4 justify-end">
					<Menu>
						<slot />
					</Menu>
				</div>
				<div>
					<Menu>
						<MenuItem>Se connecter</MenuItem>
						<MenuItem>S'inscrire</MenuItem>
					</Menu>
				</div>
			</div>
			<div class="flex justify-end">
				<div class="flex p-1 items-center text-black border-b-1 border-black bg-white gap-2 w-80">
					<span class="px-2"><Search class="text-stone-500" height={24} /></span>
					<input
						class="flex-1 border-transparent outline-none"
						placeholder="Type something here..."
					/>
				</div>
			</div>
		</div>
	</div>
</nav>

<style>
</style>
