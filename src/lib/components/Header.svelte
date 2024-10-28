<script>
	import Nav from '$lib/components/Nav.svelte';
	let src = '/logo.png';
</script>

<header>
	<div id="logo">
		<a href="/">
			<picture>
				<source srcset="/logo-small.png" media="(max-width: 600px)" />
				<source srcset="/logo-large.png" media="(min-width: 601px)" />
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
