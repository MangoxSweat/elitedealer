<script>
	import videojs from 'video.js';
	import 'video.js/dist/video-js.css';
	import { gsapStore, scrollTriggerStore } from '$lib/stores/libStore';
	import { onMount } from 'svelte';
	import cover from '$lib/assets/images/coverphoto.png';

	let video =
		'https://www.dropbox.com/scl/fi/zpdnxc3ty1ku2i4i0zlfa/interview-clip-1.mp4?rlkey=v9tuht3i3rhf4gpvkh7xlzjih&st=4mcy5xx4&dl=1';
	let gsap, ScrollTrigger;
	let videoElement;
	let aboutPlayer;

	gsapStore.subscribe((lib) => {
		gsap = lib;
	});

	scrollTriggerStore.subscribe((lib) => {
		ScrollTrigger = lib;
		if (ScrollTrigger) {
			ScrollTrigger.create({
				trigger: videoElement,
				start: 'top center',
				onEnter: () => {
					toggleVideo(aboutPlayer);
				},
				onLeave: () => {
					toggleVideo(aboutPlayer);
				},
				onEnterBack: () => {
					toggleVideo(aboutPlayer);
				},
				onLeaveBack: () => {
					toggleVideo(aboutPlayer);
				}
			});
		}
	});

	function handleTimeUpdate() {
		const currentTime = videoElement?.currentTime;
		if (currentTime >= 10 && currentTime < 11) {
			console.log('Video reached 10 seconds');
			// Add your custom logic here
		}
		//h1 animations based on the timeline
	}

	function toggleVideo(player) {
		if (!player.paused()) {
			console.log('playing');
			player.pause();
		} else {
			console.log('paused');
			player.play();
		}
	}

	onMount(() => {
		if (videoElement) {
			aboutPlayer = videojs(videoElement, {
				autoplay: false,
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
			aboutPlayer.on('timeupdate', handleTimeUpdate);
		}
	});
</script>

<section class="flex-container">
	<div id="left">
		<div class="video-container">
			<video class="video-js vjs-default-skin" bind:this={videoElement} poster={cover}>
				Your browser does not support the video tag.
			</video>
		</div>
	</div>
	<div id="right">
		<slot />
	</div>
</section>

<style>
	section {
		padding: 3em 3em;
	}

	.flex-container {
		display: flex;
		align-items: stretch;
		flex-wrap: wrap; /* Allow flex items to wrap */
	}

	#left,
	#right {
		width: 100%; /* Default to full width */
		color: white;
	}

	#right {
		justify-content: center;
		align-items: center;
		text-align: center; /* Center-align text inside #right */
	}

	/* Media query for larger screens */
	@media (min-width: 768px) {
		#left,
		#right {
			width: 45vw; /* Adjust width for larger screens */
		}
	}
</style>
