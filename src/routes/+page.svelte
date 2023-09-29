<script>
	import { onMount } from 'svelte'
	import { getWeatherFrom } from '../services/weather.js'

  import Weather from '../components/Weather.svelte'
	import Forecast from '../components/Forecast.svelte'
	import Astro from '../components/Astro.svelte'
	import FavoritesLink from '../components/FavoritesLink.svelte'

	let weatherPromise = getWeatherFrom()
	let query = ''
	let location = 'Madrid'
  let isFavorite = false

  const updateIsFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || []
    isFavorite = favorites.includes(location)
  }

	const handleSubmit = () => {
		getWeatherFrom(query).then((res) => {
			if (res && res.weather && res.weather.location) {
        weatherPromise = res
				location = res.weather.location
        updateIsFavorite()
			}
		})
	}

	const handleChange = (e) => {
		query = e.target.value
	}

  onMount(() => {
    updateIsFavorite()
  })
</script>

<svelte:head>
	<title>Weather app | {location}</title>
</svelte:head>

{#await weatherPromise then weather}
	<main>
		<form on:submit|preventDefault={handleSubmit}>
			<input type="text" on:change={handleChange} value={query} required placeholder="Location..." />
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
    <div class="weather">
      <Weather isFavorite={isFavorite} weather={weather.weather} />
      <div class="forecast">
        <Forecast forecast={weather.forecast} />
        <Astro astro={weather.forecast[0].astro} />
      </div>
    </div>
    <FavoritesLink />
	</main>
{/await}

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');

	:global(body) {
    font-family: 'Montserrat', sans-serif;
	}

	main {
		padding: 32px;
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
    background-color: var(--bg-main-color);
    background-image:  linear-gradient(#ffffff04 1px, transparent 1px), linear-gradient(to right, #ffffff04 1px, var(--bg-main-color) 1px);
    background-size: 20px 20px;
		gap: 24px;
    position: relative;
	}

  main::before{
    content: "";
    width: 320px;
    height: 320px;
    background: linear-gradient(125deg,rgb(0, 128, 251, 35%) 5%,rgb(0, 128, 251, 10%) 25%,rgb(0, 128, 251, 2%) 100%);
    filter: blur(75px);
    border-radius: 100%;
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
    z-index: 1;
  }

	form {
		width: 100%;
    max-width: 360px;
		display: flex;
		position: relative;
		align-items: center;
    z-index: 50;
	}
	form input {
    font-family: 'Montserrat', sans-serif;
		padding: 8px 24px;
		width: 100%;
		color: #ffffff;
    font-size: 1em;
		font-weight: 400;
		background-color: #ffffff0c;
		border: none;
		border-radius: 16px;
		outline: none;
	}
	form input::placeholder {
		color: var(--white-tenue-color);
	}
	form button {
		height: 100%;
		display: flex;
		background-color: transparent;
		border: none;
		position: absolute;
		right: 24px;
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

  .weather {
		width: 100%;
		display: flex;
		flex-direction: column;
    align-items: center;
    justify-content: center;
		gap: 24px;
    z-index: 50;
  }

  .forecast {
		width: 100%;
		display: flex;
		flex-direction: column;
    align-items: center;
    justify-content: center;
		gap: 24px;
  }

	@media only screen and (min-width: 1280px) {
		main {
			padding-top: 86px;
			padding-bottom: 86px;
			gap: 36px;
		}
    main::before{
      width: 720px;
      height: 720px;
    }
		form {
			max-width: 620px;
		}
		form input {
			padding: 14px 36px;
      font-size: 1.6em;
      border-radius: 28px;
		}
		form button {
			right: 36px;
		}
		form button svg {
			width: 26px;
			height: 26px;
		}
    .weather {
      margin-top: 32px;
      gap: 52px;
    }
    .forecast {
      width: auto;
      gap: 72px;
    }
	}
  @media only screen and (min-width: 1560px) {
    .weather {
      flex-direction: row;
    }
	}
</style>
