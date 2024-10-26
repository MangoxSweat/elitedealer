<script>
	import Fa from 'svelte-fa';
	import {
		faInstagram,
		faFacebook,
		faXTwitter,
		faLinkedin
	} from '@fortawesome/free-brands-svg-icons';
	export let instagramUrl = '';
	export let facebookUrl = '';
	export let xTwitterUrl = '';
	export let linkedinUrl = '';
</script>

<div class="icon-container">
	{#if instagramUrl}
		<a href={instagramUrl} target="_blank" rel="noopener noreferrer"
			><Fa icon={faInstagram} size="2x" /></a
		>
	{/if}
	{#if facebookUrl}
		<a href={facebookUrl} target="_blank" rel="noopener noreferrer"
			><Fa icon={faFacebook} size="2x" /></a
		>
	{/if}
	{#if xTwitterUrl}
		<a href={xTwitterUrl} target="_blank" rel="noopener noreferrer"
			><Fa icon={faXTwitter} size="2x" /></a
		>
	{/if}
	{#if linkedinUrl}
		<a href={linkedinUrl} target="_blank" rel="noopener noreferrer"
			><Fa icon={faLinkedin} size="2x" /></a
		>
	{/if}
</div>

<style>
	.icon-container {
		width: 100%;
		margin: 1em 0 1em 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
