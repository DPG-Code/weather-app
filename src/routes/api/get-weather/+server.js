import { options } from '../options'

const daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const months = [
	'January',
	'February',
	'February',
	'March',
	'May',
	'June',
	'July',
	'August',
	'September',
	'Octuber',
	'November',
	'December'
]

export async function GET(event) {
	const { searchParams } = event.url
	const query = searchParams.get('q') ?? 'Madrid'

	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&days=3`,
		options
	)
	const data = await response.json()
	const { location, current, forecast } = data

	const { name, region, country, localtime } = location
	const format = new Date(localtime)
	const currentDate = `${daysWeek[format.getDay() - 1]} ${format.getDate()} ${
		months[format.getDay() - 1]
	}`
	const { temp_c, is_day, wind_kph, condition, humidity, feelslike_c, uv, pressure_in, precip_mm } =
		current

	const { forecastday } = forecast
	const NextDaysForecast = forecastday.map((dayForecast) => {
		const { date } = dayForecast
		const { astro } = dayForecast
		const { sunrise, sunset } = astro

		const { hour } = dayForecast
		const weatherNextHours = hour.map((hour) => {
			const { time, is_day } = hour
			const { condition } = hour
			const { temp_c } = hour

			const bodyHour = {
				time,
				isDay: is_day,
				condition,
				temperature: temp_c
			}

			return bodyHour
		})

		const bodyForecast = {
			date,
			astro: {
				sunrise,
				sunset
			},
			nextHour: weatherNextHours
		}

		return bodyForecast
	})

	const body = {
		weather: {
			location: name,
			region,
			country,
			localtime,
			currentDate,
			temperature: temp_c,
			isDay: is_day,
			wind: wind_kph,
			humidity,
			feelsLike: feelslike_c,
			condition,
			uv,
			pressure: pressure_in,
			precipitation: precip_mm
		},
		forecast: NextDaysForecast
	}

	return new Response(JSON.stringify(body))
}
