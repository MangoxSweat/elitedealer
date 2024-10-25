<script>
	import Info from '$lib/components/Info.svelte';
	import Form from '$lib/components/Form.svelte';
</script>

<section id="contact">
	<div id="left">
		<Info />
	</div>
	<div id="right">
		<Form />
	</div>
</section>

<style>
	#contact {
		display: flex;
		flex-wrap: wrap;
	}

	#left,
	#right {
		flex: 1 1 45%;
	}
	#right {
		margin: 2%;
	}

	#left {
		background-color: white;
		margin: 2%;
	}
	@media (max-width: 768px) {
		#left,
		#right {
			flex: 1 1 100%;
		}
		section {
			padding: 0 3em;
		}
	}
</style>
