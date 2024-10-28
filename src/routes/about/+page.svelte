<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import About from '$lib/components/About.svelte';
	import LogoSlider from '$lib/components/LogoSlider.svelte';
	let banner = '/about-banner.jpeg';
</script>

<PageHeader title={'About'} background={banner} />
<About>
	<h1>Got a problem <span>?</span></h1>
	<h1>We have the <span>solution!</span></h1>
	<p>
		At Elite Dealer Solutions, we are dedicated to elevating the automotive dealership experience
		through expert lot management, valet, and detailing services. Our team ensures that your
		vehicles and your dealership are always ready to impress.
	</p>
	<button on:click={() => (window.location.href = 'tel:+1234567890')}>Call now!</button>
</About>
<section id="clients">
	<h2>
		<span>Over 1 Million Vehicles</span> Prepped For Delivery & Counting - Our Franchise Dealer
		Clients Represent Almost Every <span>OEM</span>.
	</h2>
	<p>Our team is intimately familiar with the nuances of your brands.</p>

	<LogoSlider />
</section>

<style>
	h1 {
		margin: 0.2em 0;
		font-size: 28pt;
		width: 100%;
	}
	#clients {
		width: 60%;
		margin: auto;
	}
	#clients p,
	#clients h2 {
		color: white;
		text-align: center;
	}
	button {
		background-color: #e4ae37;
		color: white;
		border: none;
		width: 150px;
		height: 50px;
		border-radius: 15px;
		cursor: pointer;
		font-size: 12pt;
	}
	span {
		color: #e4ae37;
	}
</style>
