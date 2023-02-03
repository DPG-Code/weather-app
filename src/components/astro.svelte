<script>
	export let astro = {}
</script>

<article>
	<section>
		<p>Sunrise : <span>{astro.sunrise}</span></p>
		<p>Sunset : <span>{astro.sunset}</span></p>
	</section>
</article>

<style>
	article {
		width: 280px;
		display: flex;
	}
	article section {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 12px;
	}
	article section p {
		padding: 12px 8px;
		text-align: center;
		color: #ffffff9c;
		font-size: 0.6em;
		font-weight: 300;
		background-color: #ffffff2c;
		border-radius: 16px;
	}
	article section p span {
		color: #ffffff;
		font-size: 1.2em;
		font-weight: 400;
	}
</style>
