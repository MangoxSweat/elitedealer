<script>
	import Fa from 'svelte-fa';
	import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons/index.js';
	import SocialMediaIcons from '$lib/components/SocialMediaIcons.svelte';

	let banner = '/info-banner.webp';

	let infos = {
		phone: '(908)-966-3105',
		General: 'info@elitedealerus.com',
		Sales: 'jorge.meija@elitedealerus.com',
		Support: 'jorge.morales@elitedealerus.com',
		Billing: 'billing@elitedealerus.com'
	};
	let instagram;
</script>

<div>
	<div id="info-banner" style="background-image: url({banner});"></div>
	<div id="info">
		{#if infos}
			{#each Object.entries(infos) as [key, value]}
				{#if key === 'phone'}
					<div class="icon-container">
						<Fa icon={faPhone} size="1.5x" />
					</div>
					<p>{value}</p>
					<br />
					<div class="icon-container">
						<Fa icon={faEnvelope} size="1.5x" />
					</div>
				{:else}
					<h4 class="info-heading">{key}</h4>
					<p>{value}</p>
				{/if}
			{/each}
			<SocialMediaIcons {instagram} />
		{/if}
	</div>
</div>

<style>
	.info-heading {
		text-decoration: underline;
		margin: 0em 0 0em 0;
	}

	#info-banner {
		min-height: 125px;
		background-position-y: 40%;
		background-size: cover;
	}
	#info {
		background-color: white;
	}
	h4,
	h6,
	p {
		text-align: center;
		color: black;
		margin: 0 0 1em 0;
	}
	.icon-container {
		width: 100%;
		margin: 1em 0 1em 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
