<script>
	import { getWeatherFrom } from '../services/weather.js'
	import Weather from '../components/weather.svelte'
	import Forecast from '../components/forecast.svelte'
	import Astro from '../components/astro.svelte'

	let weatherPromise = getWeatherFrom()
	let query = ''
	let location = 'Madrid'

	const handleSubmit = () => {
		getWeatherFrom(query).then((res) => {
			weatherPromise = res
			location = res.weather.location
		})
	}

	const handleChange = (e) => {
		query = e.target.value
	}
</script>

<svelte:head>
	<title>Weather app | {location}</title>
</svelte:head>

{#await weatherPromise then weather}
	<main class={weather.weather.isDay !== 1 && 'themeNight'}>
		<form on:submit|preventDefault={handleSubmit}>
			<input type="text" on:change={handleChange} value={query} required placeholder="Search..." />
			<button type="submit"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="#ffffff7c"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
			</button>
		</form>
		<h2>{weather.weather.currentDate}</h2>
		<Weather weather={weather.weather} />
		<Forecast forecast={weather.forecast} />
		<Astro astro={weather.forecast[0].astro} />
	</main>
{/await}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

	:global(body) {
		font-family: 'Inter', sans-serif;
	}

	main {
		padding-top: 32px;
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		gap: 12px;
		background: linear-gradient(180deg, var(--main-color), var(--second-color));
	}
	.themeNight {
		background: linear-gradient(180deg, var(--main-night-color), var(--second-night-color));
	}

	form {
		width: 280px;
		display: flex;
		position: relative;
		align-items: center;
	}
	form input {
		padding: 6px 16px;
		width: 100%;
		color: #ffffff;
		font-weight: 600;
		background-color: transparent;
		border: 2px solid #ffffff3c;
		border-radius: 12px;
		outline: none;
	}
	form input::placeholder {
		color: #ffffff7c;
	}
	form button {
		height: 100%;
		display: flex;
		background-color: transparent;
		border: none;
		position: absolute;
		right: 16px;
		cursor: pointer;
	}
	form button svg {
		margin: auto;
		width: 16px;
		height: 16px;
	}
	form button svg:hover {
		transition: all 0.2s ease-in-out;
		stroke: #ffffff;
	}

	h2 {
		color: var(--second-white);
		font-size: 0.8em;
		font-weight: 500;
	}

	@media only screen and (min-width: 1280px) {
		main {
			padding: 32px 0;
			gap: 32px;
		}
		form {
			width: 480px;
		}
		form input {
			padding: 8px 20px;
			border-radius: 16px;
		}
		form button {
			right: 20px;
		}
		form button svg {
			width: 18px;
			height: 18px;
		}

		h2 {
			font-size: 1.2em;
		}
	}
</style>
