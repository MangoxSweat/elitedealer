<script>
	import Contact from './Contact.svelte';
	import logo from '$lib/assets/images/elite_logo.png';
	import contactBanner from '$lib/assets/images/contact-banner.jpeg';
	import PageHeader from './PageHeader.svelte';
</script>

<footer>
	<PageHeader title="Contact Us" background={contactBanner} />
	<section>
		<h2>Ready to grow your dealership<span>?</span></h2>

		<h3>We can <span>scale up</span> your throughput in days!</h3>
		<p>Call, text, or email for a fast and free consultation</p>
	</section>
	<Contact />
</footer>

<style>
	section {
		background-size: cover;
		background-position-y: 90%;
	}
	footer {
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		text-align: center;
		color: white;
	}
	footer span {
		color: #e4ae37;
	}
</style>
