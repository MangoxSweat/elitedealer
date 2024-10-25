<script>
	export let title;
	export let background;
</script>

<div style="background-image:url({background});">
	<h1>{title}</h1>
</div>

<style>
	div {
		width: 100vw;
		min-height: 300px;
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h1 {
		color: white;
		text-align: center;
		font-size: 72pt;
	}
</style>
