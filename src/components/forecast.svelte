<script>
	import getIcon from './icons'
	export let forecast = {}
	$: day = forecast[0]

	let currentToday
	let currentTomorrow
	let currentNextDay

	const changeDayForecast = (currentDay, currentElement) => {
		day = forecast[currentDay]

		const items = document.getElementsByClassName('btn-forecast')
		for (let item of items) {
			item.classList.remove('active')
		}
		currentElement.classList.add('active')
	}
</script>

<article>
	<header>
		<button
			class="btn-forecast active"
			bind:this={currentToday}
			on:click={() => changeDayForecast(0, currentToday)}>Today</button
		>
		<button
			class="btn-forecast"
			bind:this={currentTomorrow}
			on:click={() => changeDayForecast(1, currentTomorrow)}>Tomorrow</button
		>
		<button
			class="btn-forecast"
			bind:this={currentNextDay}
			on:click={() => changeDayForecast(2, currentNextDay)}>Next day</button
		>
	</header>
	<section>
		{#each day.nextHour as hour, i}
			<div>
				<h5>{hour.time.slice(11, hour.time.length)}</h5>
				<img src={getIcon(hour.condition.code.toString(), hour.isDay)} alt={hour.condition.text} />
				<h4>{hour.temperature}ºC</h4>
				<p>{hour.condition.text}</p>
			</div>
		{/each}
	</section>
</article>

<style>
	article {
		width: 100%;
    max-width: 360px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	article header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 12px;
	}
	article header button {
    font-family: 'Montserrat', sans-serif;
    padding: 6px 22px;
    font-size: 0.6em;
		font-weight: 500;
    background-color: #ffffff0c;
		color: var(--white-tenue-color);
		border: none;
    border-radius: 12px;
		cursor: pointer;
	}
	.active {
    transition: all 0.5s ease-in-out;
		color: #000000;
    background-color: #ffffff;
	}

	article section {
    padding-bottom: 12px;
		width: 100%;
		display: flex;
		gap: 12px;
		overflow-x: scroll;
    position: relative;
	}
	article section::-webkit-scrollbar {
    height: 6px;
	}
  article section::-webkit-scrollbar-track {
    background: var(--bg-main-color);
  }
	article section::-webkit-scrollbar-thumb {
    background: #ffffff3c;
		border-radius: 12px;
	}
	article section::-webkit-scrollbar-thumb:hover {
		background: #ffffff7c;
	}
	article section div {
    min-width: 76px;
		padding: 12px 0;
    background-color: #ffffff0c;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    border-radius: 16px;
		gap: 4px;
	}
	article section div h5 {
		color: var(--white-tenue-color);
		font-size: 0.6em;
		font-weight: 400;
	}
	article section div img {
		height: 24px;
	}
	article section div h4 {
		color: #ffffff;
		font-size: 0.8em;
		font-weight: 600;
	}
	article section div p {
		max-width: 60px;
		text-align: center;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: var(--white-tenue-color);
		font-size: 0.6em;
		font-weight: 400;
	}

	@media only screen and (min-width: 1280px) {
		article {
			max-width: 620px;
      gap: 32px;
		}
		article header {
      gap: 24px;
    }
    article header button {
      padding: 12px 36px;
      font-size: 1.4em;
      border-radius: 22px;
    }

		article section {
      padding-bottom: 16px;
			gap: 24px;
		}
    article section::-webkit-scrollbar {
      height: 12px;
    }
    article section::-webkit-scrollbar-thumb {
      border-radius: 16px;
    }
    article section div {
      min-width: 156px;
      padding: 16px 0;
      border-radius: 26px;
      gap: 8px;
    }
    article section div h5 {
      font-size: 1.2em;
    }
    article section div img {
      height: 72px;
    }
    article section div h4 {
      font-size: 1.8em;
    }
    article section div p {
      max-width: 72px;
      font-size: 1.2em;
    }
	}
</style>
