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
		padding: 1%;
	}
	#logo img {
		width: 80px;
	}
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 120px;
		background-color: black;
		padding: 0 1%;
	}
</style>
