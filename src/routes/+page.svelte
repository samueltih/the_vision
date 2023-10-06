<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import Card from '../components/Card.svelte';

	let carousel;

	const handleNextClick = () => {
		carousel.goToNext();
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="h-[100vh] w-[100vw] relative">
		{#if browser}
			<Carousel bind:this={carousel} autoplay autoplayDuration={5000}>
				<div class="h-full w-full">
					<img class="h-full w-full" src="/banner_01.jpg" alt="Carousel 01" />
				</div>
				<div class="h-full w-full">
					<img class="h-full w-full" src="/banner_02.jpg" alt="Carousel 02" />
				</div>
				<div class="h-full w-full">
					<img class="h-full w-full" src="/banner_03.jpg" alt="Carousel 03" />
				</div>
			</Carousel>
		{/if}
		<div
			class="flex flex-col gap-4 justify-center items-center h-full w-full absolute text-white top-0 left-0"
		>
			<p class="text-5xl font-bold uppercase max-w-[50rem] text-center">
				Bâtissez votre carrière et assurez votre avenir avec nous!!!
			</p>
			<span>Vos experts voyagistes</span>
		</div>
	</div>

	<div class="p-4 grid grid-cols-4 gap-8">
		<Card content="Stage Max Planck 2024 en Allemagne" />
		<Card content="Stage Max Planck 2024 en Allemagne" />
		<Card content="Stage Max Planck 2024 en Allemagne" />
	</div>

	<div class="flex items-stretch w-screen">
		<img class="flex-1 w-16" alt="people" src="/banner_02.jpg" />
		<div class="flex-1 flex flex-col items-center justify-center bg-black text-white p-8 gap-4">
			<h2 class="text-2xl font-bold uppercase">Nous contacter</h2>
			<span>support@thevisionteam.org</span>
			<ol>
				<li>Canada: +1(431) 301-2715</li>
				<li>Pologne: +48 732-104-708</li>
				<li>Canada: +237 697009670</li>
				<li>Canada: +44 7458 930583</li>
			</ol>

			<form class="flex flex-col gap-2 w-80">
				<div class="flex gap-2 items-center">
					<input
						class="flex-1 p-2 bg-transparent border-b-white border-b-1 w-full text-white"
						placeholder="Nom"
					/>
				</div>
				<div class="flex gap-2 items-center">
					<input
						class="flex-1 p-2 bg-transparent border-b-white border-b-1 w-full text-white"
						placeholder="Adresse"
					/>
				</div>
				<div class="flex gap-2 items-center">
					<input
						class="flex-1 p-2 bg-transparent border-b-white border-b-1 w-full text-white"
						placeholder="Adresse"
					/>

					<input
						class="flex-1 p-2 bg-transparent border-b-white border-b-1 w-full text-white"
						placeholder="Adresse"
					/>
				</div>
				<div class="flex gap-2 items-center">
					<input
						class="flex-1 p-2 bg-transparent border-b-white border-b-1 w-full text-white"
						placeholder="Objet"
					/>
				</div>
				<div class="flex gap-2 items-center">
					<textarea
						class="flex-1 p-2 bg-transparent border-b-white border-b-1 w-full text-white"
						placeholder="Rédigez votre message ici..."
					/>
				</div>
				<div>
					<button class="py-2 px-8 bg-white text-black">Envoyer</button>
				</div>
			</form>
		</div>
	</div>

	<div class="w-screen bg-black text-white py-16">
		<div class="flex justify-center gap-16">
			<span class="font-semibold">Nos Partenaires:</span>
			<span> AIESEC </span>
			<span> CROOS </span>
			<span> PayPal </span>
			<span> Ipag </span>
			<span> Russian </span>
			<span> AFRICOM-IT </span>
		</div>
	</div>

	<div
		class="w-screen flex flex-col items-center gap-8 py-4"
		style="background-color: rgb(252, 193, 187)"
	>
		<h1 class="text-2xl font-bold">Nos Leaders</h1>
		<div class="w-[70vw] flex gap-8 items-center">
			<Card content="Joel Tekam" />
			<Card content="Kelliane" />
			<Card content="Catherine" />
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
