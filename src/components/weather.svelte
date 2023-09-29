<script>
	import getIcon from './icons'

	import AddFavoritesButton from './AddFavoritesButton.svelte'
	import RemoveFavoriteButton from './RemoveFavoriteButton.svelte'

	import Location from '../components/icons/Location.svelte'
	import Humidity from '../components/icons/weather/Humidity.svelte'
	import Wind from '../components/icons/weather/Wind.svelte'
	import Uv from '../components/icons/weather/Uv.svelte'
	import Temperature from '../components/icons/weather/Temperature.svelte'
	import Pressure from '../components/icons/weather/Pressure.svelte'
	import Precipitation from '../components/icons/weather/Precipitation.svelte'

	export let weather = {}
  export let isFavorite
  
  let favorites = JSON.parse(localStorage.getItem('favorites'))

  const addToFavorites = () => {
    if (!isFavorite) {
      favorites.push(weather.location);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      isFavorite = true;
    }
  }

  const removeFromFavorites = () => {
    if (isFavorite) {
      favorites = favorites.filter((favLocation) => favLocation !== weather.location);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      isFavorite = false;
    }
  }
</script>

<article class={weather.isDay !== 1 && 'themeNight'}>
  {#if isFavorite}
		<RemoveFavoriteButton removeFromFavorites={removeFromFavorites} />
	{:else}
		<AddFavoritesButton addToFavorites={addToFavorites} />
	{/if}
  <h3>
    <Location />
    {weather.location}
  </h3>
	<header>
    <img
      src={getIcon(weather.condition.code.toString(), weather.isDay)}
      alt={weather.condition.text}
    />
    <aside>
      <h4>{weather.currentDate}</h4>
      <h2>{weather.temperature}º</h2>
      <p>{weather.condition.text}</p>
    </aside>
	</header>
  <div class="weather-divition"></div>
	<footer>
		<div>
      <Humidity />
			<p>{weather.humidity}%</p>
			<span>Humidity</span>
		</div>
    <div>
      <Wind />
			<p>{weather.wind}km/h</p>
			<span>Wind</span>
		</div>
    <div>
      <Uv />
			<p>{weather.uv}</p>
			<span>UV</span>
		</div>
    <div>
      <Temperature />
			<p>{weather.feelsLike}º</p>
			<span>Feels like</span>
		</div>
    <div>
      <Pressure />
			<p>{weather.pressure}in</p>
			<span>Pressure</span>
		</div>
    <div>
      <Precipitation />
			<p>{weather.precipitation}mm</p>
			<span>Precipitation</span>
		</div>
	</footer>
</article>

<style>
	article {
		padding: 26px;
		width: 100%;
    max-width: 360px;
		display: flex;
		flex-direction: column;
		gap: 26px;
    color: var(--white-color);
		background-color: var(--day-main-color);
    background-image:
    radial-gradient(at 0% 100%, rgba(0, 21, 138, 0.25) 0px, transparent 50%),
    radial-gradient(at 87% 7%, rgba(0, 21, 138, 0.25) 0px, transparent 50%);
		border-radius: 24px;
    position: relative;
	}
  .themeNight {
    background-color: var(--night-main-color);
    background-image:
    radial-gradient(at 0% 100%, rgb(3, 31, 70) 0px, transparent 50%),
    radial-gradient(at 87% 7%, rgb(3, 32, 72) 0px, transparent 50%);
	}

  article h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.2em;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

	article header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
	}
  article header img {
    width: 126px;
  }
  article header aside {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: start;
	}
  article header aside h4 {
    font-size: 0.8em;
    font-weight: 600;
  }
	article header aside h2 {
    margin-top: -4px;
		font-size: 4em;
		font-weight: 700;
	}
	article header aside p {
    max-width: 128px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: -8px;
		font-size: 1em;
		font-weight: 600;
	}

  .weather-divition{
    width: 100%;
    height: 2px;
    background-color: #ffffff1a;
  }

	article footer {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
    gap: 22px;
	}
  article footer div {
		display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
	}
  :global(.condition-icon){
    width: 26px;
    height: 26px;
  }
	article footer div p {
		font-size: 0.8em;
		font-weight: 500;
	}
	article footer div span {
		font-size: 0.6em;
		font-weight: 400;
	}

	@media only screen and (min-width: 1280px) {
		article {
			padding: 36px 42px;
      max-width: 620px;
			gap: 32px;
			border-radius: 36px;
		}
		article h3 {
			font-size: 1.8em;
			gap: 12px;
		}
    article header img {
      width: 236px;
    }
		article header aside h2 {
			font-size: 7em;
		}
		article header aside h4 {
			font-size: 1.6em;
		}
    article header aside p {
      max-width: 262px;
      font-size: 2em;
    }
    :global(.condition-icon){
    width: 42px;
    height: 42px;
    }
    article footer div p {
      font-size: 1.4em;
    }
    article footer div span {
      font-size: 1em;
    }
	}
</style>
