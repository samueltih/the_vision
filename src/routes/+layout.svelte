<script>
	import Footer from '../components/Footer.svelte';
	import MenuItem from '../components/MenuItem.svelte';
	import Navbar from '../components/Navbar.svelte';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Navbar>
		<MenuItem href="/">Accueil</MenuItem>
		<MenuItem href="/scholarships">Bourses d'études</MenuItem>
		<MenuItem href="/employment">Stages / Emplois</MenuItem>
		<MenuItem href="/services">Nos Services</MenuItem>
	</Navbar>
	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		/* padding: 1rem; */
		width: 100%;
		max-width: 72rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
