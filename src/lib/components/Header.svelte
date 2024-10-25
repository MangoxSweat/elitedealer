<script>
	import Nav from './Nav.svelte';
	import src from '$lib/assets/images/elite_logo.png';
</script>

<header>
	<div id="logo">
		<a href="/"> <img {src} alt="Elite Dealer US Logo" /></a>
	</div>
	<Nav />
</header>

<style>
	#logo {
		position: absolute;
		padding: 1%;
	}
	#logo img {
		width: 80px;
	}
	header {
		position: relative;
		min-height: 120px;
		background-color: black;
	}
</style>
