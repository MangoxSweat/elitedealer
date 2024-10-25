<script>
	let isOpen = false;
</script>

<nav>
	<div class="hamburger" on:click={() => (isOpen = !isOpen)} class:isOpen>
		<div></div>
		<div></div>
		<div></div>
	</div>
	<ul class="menu">
		<li><a href="/">Home</a></li>
		<li><a href="/about/">About</a></li>
		<li><a href="/services/">Services</a></li>
		<li><a href="/contact/">Contact</a></li>
	</ul>
</nav>

<style>
	nav {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		height: 120px; /* Adjust the height as needed */
		width: 100%;
		top: 0;
		right: 0;
	}

	.menu {
		display: none;
	}

	.menu li {
		margin: 0 1em;
		list-style: none;
	}
	.menu li a {
		color: white;
		text-decoration: none;
		font-size: 14pt;
	}

	.hamburger {
		display: none;
		cursor: pointer;
		flex-direction: column;
		justify-content: space-around;
		width: 30px;
		height: 30px;
	}

	.hamburger div {
		width: 100%;
		height: 4px;
		background-color: black;
		transition: all 0.3s;
	}

	.hamburger.open div:nth-child(1) {
		transform: rotate(45deg) translate(5px, 5px);
	}

	.hamburger.open div:nth-child(2) {
		opacity: 0;
	}

	.hamburger.open div:nth-child(3) {
		transform: rotate(-45deg) translate(5px, -5px);
	}

	/*
	@media (max-width: 768px) {
		.menu {
			display:{
				isopen?'block' : 'none';
			}
			flex-direction: column;
			width: 100%;
		}

		.hamburger {
			display: flex;
		}
	}
    */
	@media (min-width: 769px) {
		.menu {
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
	}
</style>
