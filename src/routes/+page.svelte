<script>
	import ScrollTop from '$lib/components/ScrollTop.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import { onMount } from 'svelte';
	import About from '$lib/components/About.svelte';
	import Services from '$lib/components/Services.svelte';
	import { services } from '$lib/stores/services';
	import PageHeader from '$lib/components/PageHeader.svelte';

	let serviceBanner = '/service-banner.webp';
	let aboutBanner = '/about-banner.webp';

	let items = services.slice(0, 5);
	let showScrollToTop = false;

	onMount(() => {
		window.addEventListener('scroll', () => {
			showScrollToTop = window.scrollY > 500;
		});
	});
</script>

<Hero />
<section>
	<div style="margin:auto; color:white; text-align:center;">
		<h2>
			Providing a full suite of <span>scalable</span> Auto Dealer Logistics <span>Solutions</span>
		</h2>
		<p>The Elite team will feel like an extension of your own team!</p>
	</div>
</section>

<PageHeader title="About" background={aboutBanner} />
<About>
	<h1 style="font-size:28pt;">Your <span>partner</span> in Automotive <span>Excellence.</span></h1>
	<p>
		At Elite Dealer Solutions, we are dedicated to elevating the automotive dealership experience
		through expert lot management, valet, and detailing services. Our team ensures that your
		vehicles and your dealership are always ready to impress.
	</p>
	<button on:click={() => (window.location.href = '/about')}>More details</button>
</About>
<PageHeader title="Services" background={serviceBanner} />
<Services services={items} />

{#if showScrollToTop}
	<ScrollTop />
{/if}

<style>
	button {
		background-color: #e4ae37;
		color: white;
		border: none;
		width: 150px;
		height: 50px;
		border-radius: 15px;
		cursor: pointer;
	}

	section {
		padding: 3em;
		background-color: black;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1,
	h2,
	h6 {
		color: white;
	}

	h4,
	h6 {
		text-align: center;
	}

	@media (max-width: 768px) {
		section {
			padding: 0 3em;
		}
	}
	span {
		color: #e4ae37;
	}
</style>
