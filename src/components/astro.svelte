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

	@media only screen and (min-width: 1280px) {
		article {
			width: 480px;
		}
		article section {
			gap: 16px;
		}
		article section p {
			padding: 16px 10px;
			font-size: 0.8em;
			border-radius: 20px;
		}
		article section p span {
			font-size: 1.4em;
		}
	}
</style>
