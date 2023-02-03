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
		padding: 20px;
		width: 280px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		background-color: #ffffff2c;
		border-radius: 16px;
	}
	article header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		gap: 12px;
	}
	article header button {
		color: #ffffff7c;
		font-size: 0.7em;
		font-weight: 600;
		background-color: transparent;
		border: none;
		cursor: pointer;
	}
	.active {
		transition: all 0.5s ease-in-out;
		color: #ffffff;
	}

	article section {
		width: 100%;
		display: flex;
		gap: 24px;
		overflow-x: scroll;
	}
	article section::-webkit-scrollbar {
		height: 6px;
	}
	article section::-webkit-scrollbar-thumb {
		background: #ffffff3c;
		border-radius: 12px;
	}
	article section::-webkit-scrollbar-thumb:hover {
		background: #ffffff7c;
	}
	article section div {
		padding: 12px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 4px;
	}
	article section div h5 {
		color: #ffffff;
		font-size: 0.7em;
		font-weight: 500;
	}
	article section div img {
		margin: 10px 0;
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
		color: #ffffff9c;
		font-size: 0.5em;
		font-weight: 400;
	}
</style>
