<script>
	import Fa from 'svelte-fa';
	import { faAnglesUp } from '@fortawesome/free-solid-svg-icons/index.js';
</script>

<div
	class="scroll-to-top"
	on:click={() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}}
>
	<Fa icon={faAnglesUp} size="1x" />
</div>

<style>
	.scroll-to-top {
		color: white;
		position: fixed;
		bottom: 20px;
		right: 20px;
		cursor: pointer;
		background-color: #e4ae37;
		border-radius: 20%;
		padding: 10px;
	}
</style>
