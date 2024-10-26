<script>
	import Service from './Service.svelte';
	import { services } from '$lib/stores/services';
	import { gsapStore, scrollTriggerStore } from '$lib/stores/libStore';
	import { onMount } from 'svelte';

	let gsap, ScrollTrigger;
	gsapStore.subscribe((lib) => {
		gsap = lib;
	});

	scrollTriggerStore.subscribe((lib) => {
		ScrollTrigger = lib;
		if (ScrollTrigger) {
			services.forEach((service, index) => {
				ScrollTrigger.create({
					trigger: `.service-${index}`,
					start: 'center center',
					end: '+=500', // Adjust this value as needed
					pin: true,
					markers: false, // Optional: for debugging purposes
					onEnter: () => console.log(`Entered trigger for service-${index}`),
					onLeave: () => console.log(`Left trigger for service-${index}`),
					onEnterBack: () => console.log(`service-${index} enter back`)
				});
			});
		}
	});
	onMount(() => {});
</script>

<section>
	<!-- full services page -->
	{#if services}
		{#each services as { title, desc, src }, index}
			<Service {index} {src} {desc} {title} />
		{/each}
	{/if}
</section>

<style>
	section {
		padding: 3em;
	}
	/* Add styles as needed */
</style>
