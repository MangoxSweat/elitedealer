<script>
	import Nav from '$lib/components/Nav.svelte';
	let src = '/logo.webp';
</script>

<header>
	<div id="logo">
		<a href="/">
			<picture>
				<img {src} alt="Elite Dealer US Logo" />
			</picture>
		</a>
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
