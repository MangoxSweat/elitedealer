<script lang="ts">
	import { T } from '@threlte/core';
	import * as THREE from 'three';
	import { onMount } from 'svelte';

	// Load the video on mount and create the texture
</script>

<!-- Orthographic Camera setup -->
<T.OrthographicCamera
	position={{ x: 0, y: 0, z: 10 }}
	near={0.1}
	far={1000}
	left={-8}
	right={8}
	top={4.5}
	bottom={-4.5}
/>
