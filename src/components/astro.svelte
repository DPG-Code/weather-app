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
		width: 100%;
    max-width: 360px;
		display: flex;
	}
	article section {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px;
	}
	article section p {
		padding: 12px;
		text-align: center;
		color: var(--white-tenue-color);
		font-size: 0.7em;
		font-weight: 400;
		background-color: #ffffff0c;
		border-radius: 20px;
	}
	article section p span {
		color: #ffffff;
		font-weight: 500;
	}

	@media only screen and (min-width: 1280px) {
		article {
			max-width: 620px;
		}
		article section {
			gap: 36px;
		}
		article section p {
			padding: 22px;
			font-size: 1.4em;
			border-radius: 32px;
		}
	}
</style>
