<script>
	export let src;
	export let desc;
	export let title;
	export let index;

	let className = `service-${index}`;
</script>

<div class={`card ${className}`}>
	<img {src} alt={title} />
	<h2>{title}</h2>
	<p>{desc}</p>
</div>

<style>
	.card {
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 1em;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		margin: 16px auto;
		text-align: center;
	}

	.card img {
		max-width: 100%;
		border-radius: 8px 8px 0 0;
	}

	.card h2 {
		font-size: 1.5em;
		margin: 16px 0 8px;
		color: white;
		text-align: left;
	}

	.card p {
		font-size: 1em;
		color: #666;
		text-align: left;
	}

	/* Media query for larger screens */
	@media (min-width: 768px) {
		.card {
			width: 45vw; /* Adjust width for larger screens */
		}
	}
</style>
