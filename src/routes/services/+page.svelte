<script>
	import Services from '$lib/components/Services.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	let banner = '/service-banner.webp';
</script>

<PageHeader title="Services" background={banner} />

<Services />

<style>
</style>
