<script>
	import getIcon from './icons'
	export let weather = {}
</script>

<article>
	<header>
		<section>
			<h3>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#000000"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
					/>
				</svg>
				{weather.location}
			</h3>
			<h2>{weather.temperature}º<span>C</span></h2>
			<p>{weather.condition.text}</p>
		</section>
		<aside>
			<img
				src={getIcon(weather.condition.code.toString(), weather.isDay)}
				alt={weather.condition.text}
			/>
		</aside>
	</header>
	<footer>
		<section>
			<p>Humidity : <span>{weather.humidity}</span> %</p>
			<p>Wind : <span>{weather.wind}</span> km/h</p>
			<p>UV : <span>{weather.uv}</span></p>
		</section>
		<aside>
			<p>Feels like : <span>{weather.feelsLike}</span>ºC</p>
			<p>Pressure : <span>{weather.pressure}</span> in</p>
			<p>Precipitation : <span>{weather.precipitation}</span> mm</p>
		</aside>
	</footer>
</article>

<style>
	article {
		padding: 20px;
		width: 280px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		background-color: var(--second-white);
		border-radius: 16px;
	}

	article header {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	article header section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}
	article header section h3 {
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 1em;
		font-weight: 700;
		display: flex;
		align-items: center;
		gap: 4px;
	}
	article header section h3 svg {
		width: 14px;
		height: 14px;
		transform: rotate(-45deg);
	}
	article header section h2 {
		font-size: 3.2em;
		font-weight: 900;
	}
	article header section h2 span {
		font-size: 0.7em;
		font-weight: 900;
	}
	article header section p {
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 0.7em;
		font-weight: 600;
	}
	article header aside {
		display: grid;
		place-items: center;
	}
	article header aside img {
		width: 80px;
	}

	article footer {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
	article footer section {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 4px;
	}
	article footer aside {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 4px;
	}
	article footer aside p {
		text-align: right;
	}
	article footer p {
		margin-bottom: 4px;
		width: 100%;
		color: #000000;
		font-size: 0.6em;
		font-weight: 400;
	}
	article footer p span {
		color: #000000;
		font-size: 1.2em;
		font-weight: 700;
	}
</style>
