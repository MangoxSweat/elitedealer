<script>
	import videojs from 'video.js';
	import 'video.js/dist/video-js.css';
	import { gsapStore, scrollTriggerStore } from '$lib/stores/libStore';
	import { onMount } from 'svelte';
	import { Cloudinary } from '@cloudinary/url-gen';

	const cld = new Cloudinary({ cloud: { cloudName: 'dv2smeko4' } });
	const video = cld.video('hero_r7o5bj').toURL(); // Initialize Cloudinary instance

	// Generate video URL
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
				markers: false, // Optional: for debugging purposes
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

		if (currentTime >= 5 && currentTime < 7) {
			console.log('Video reached 10 seconds');
			gsap.to('#overlay-text h1:nth-child(1)', {
				opacity: 1,
				duration: 1,
				onComplete: () => {
					gsap.to('#overlay-text h1:nth-child(1)', { opacity: 0, duration: 1, delay: 3 });
				}
			});
		}

		if (currentTime >= 15 && currentTime < 16) {
			console.log('Video reached 20 seconds');
			gsap.to('#overlay-text h1:nth-child(2)', {
				opacity: 1,
				duration: 1,
				onComplete: () => {
					gsap.to('#overlay-text h1:nth-child(2)', { opacity: 0, duration: 1, delay: 3 });
				}
			});
		}

		if (currentTime >= 41 && currentTime < 42) {
			console.log('Video reached 30 seconds');
			gsap.to('#overlay-text h1:nth-child(3)', {
				opacity: 1,
				duration: 1,
				onComplete: () => {
					gsap.to('#overlay-text h1:nth-child(3)', { opacity: 0, duration: 1, delay: 3 });
				}
			});
		}

		if (currentTime >= 30 && currentTime < 31) {
			console.log('Video reached 40 seconds');
			gsap.to('#overlay-text h1:nth-child(4)', {
				opacity: 1,
				duration: 1,
				onComplete: () => {
					gsap.to('#overlay-text h1:nth-child(4)', { opacity: 0, duration: 1, delay: 3 });
				}
			});
		}

		if (currentTime >= 48 && currentTime < 49) {
			console.log('Video reached 50 seconds');
			gsap.to('#overlay-text h1:nth-child(5)', {
				opacity: 1,
				duration: 1,
				onComplete: () => {
					gsap.to('#overlay-text h1:nth-child(5)', { opacity: 0, duration: 1, delay: 3 });
				}
			});
		}

		if (currentTime >= 56 && currentTime < 57) {
			console.log('Video reached 60 seconds');
			gsap.to('#overlay-text h1:nth-child(6)', {
				opacity: 1,
				duration: 1,
				onComplete: () => {
					gsap.to('#overlay-text h1:nth-child(6)', { opacity: 0, duration: 1, delay: 3 });
				}
			});
		}
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

<div id="overlay-text">
	<h1>Solving Dealership Logistics <br /> Problems For <span>22 Years</span></h1>
	<h1><span>Professional</span><br /> Car Prep & Valet</h1>
	<h1>Streamalining Your Dealership Operations</h1>
	<h1>Efficient Lot & Logistics Management</h1>
	<h1>Customized Staffing Solutions</h1>
	<h1>Over a Million Cars Prepped for Sale</h1>
</div>

<style>
	#overlay-text {
		z-index: 100;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: white;
		text-align: center;
		pointer-events: none; /* Ensures the overlay doesn't interfere with video controls */
	}

	#overlay-text h1 {
		opacity: 0;
		font-size: 36pt;
		position: absolute;
	}

	#overlay-text h1:nth-child(1) {
		top: 30%;
		left: 3%;
		text-align: right;
	}

	#overlay-text h1:nth-child(2) {
		bottom: 10%;
		right: 25%;
	}

	#overlay-text h1:nth-child(3) {
		top: 40%;
	}

	#overlay-text h1:nth-child(4) {
		top: 55%;
	}

	#overlay-text h1:nth-child(5) {
		top: 70%;
	}

	#overlay-text h1:nth-child(6) {
		top: 75%;
	}

	/* Container for the video */
	.video-container {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative; /* Ensure the video container is the reference for the absolute positioning */
	}
	/* Container for the video */
	.video-container {
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
	span {
		color: #e4ae37;
	}
</style>
