<script>
	import videojs from 'video.js';
	import 'video.js/dist/video-js.css';
	import video from '$lib/assets/videos/hero-video.mp4';
	import { gsapStore, scrollTriggerStore } from '$lib/stores/libStore';
	import { onMount } from 'svelte';

	let videoElement;
	let player;
	let gsap, ScrollTrigger;

	gsapStore.subscribe((lib) => {
		gsap = lib;
	});

	scrollTriggerStore.subscribe((lib) => {
		ScrollTrigger = lib;
		if (ScrollTrigger) {
			ScrollTrigger.create({
				trigger: videoElement,
				start: 'top top',
				end: 'bottom bottom', // Adjust this value as needed
				pin: false,
				markers: true, // Optional: for debugging purposes
				onEnter: () => {
					console.log(`video Entered `);
					if (player) {
						player.play();
						console.log('video start');
					}
				},
				onLeave: () => {
					console.log(`video Left `);
					if (player) {
						player.pause();
						console.log('video paused');
					}
				},
				onEnterBack: () => {
					console.log(`video enter back`);
					if (player) {
						player.play();
						console.log('resume video');
					}
				}
			});
		}
	});

	function handleTimeUpdate() {
		const currentTime = videoElement.currentTime;
		if (currentTime >= 10 && currentTime < 11) {
			//console.log('Video reached 10 seconds');
			// Add your custom logic here
		}

		//h1 animations based on the timeline
	}

	onMount(() => {
		if (videoElement) {
			console.log('video on mount');
			player = videojs(videoElement, {
				autoplay: true,
				controls: true,
				loop: false,
				muted: true,
				fluid: true,
				aspectRatio: '16:9',
				sources: [
					{
						src: video,
						type: 'video/mp4'
					}
				]
			});
			player.on('timeupdate', handleTimeUpdate);
		}
	});
</script>

<section>
	<div class="video-container">
		<video class="video-js vjs-default-skin" bind:this={videoElement}>
			<source src={video} type="video/mp4" />
			Your browser does not support the video tag.
		</video>
	</div>
</section>

<!--
<h1>Streamlining Your Dealership Operations</h1>
<h1>Professional Car Prep & Valet</h1>
<h1>Customized Staffing Solutions</h1>
<h1>Efficient Lot & Logistics Management</h1>
<h1>Over a Million Cars Prepped for Sale</h1>
-->

<style>
	/* Container for the video */
	.video-container {
		margin-bottom: 100px;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.video-js {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
</style>
