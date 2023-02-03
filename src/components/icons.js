const sunny = ['1000']
const partlyCloudy = ['1003']
const moderateRain = ['1186', '1192', '1243']
const lightThunderRain = ['1087', '1273']
const lightRain = ['1063', '1150', '1180', '1240']
const fog = ['1135', '1030', '1147']

const blizzard = ['1117']
const cloudy = ['1006', '1009']
const drizzle = ['1153', '1183']
const heavyRain = ['1189', '1195', '1246']
const heavySnow = ['1216', '1219', '1222', '1225', '1237', '1072']
const heavySnowThunder = ['1282']
const rainSnow = [
	'1069',
	'1204',
	'1207',
	'1168',
	'1171',
	'1198',
	'1201',
	'1249',
	'1252',
	'1255',
	'1258',
	'1261',
	'1264'
]
const Snow = ['1066', '1210', '1213', '1114']
const thunderRain = ['1276']
const thunderSnow = ['1279']

export default function getIcon(code, isDay) {
	if (sunny.includes(code)) {
		if (isDay === 1) return 'https://ucarecdn.com/eb89f1e7-eed2-450a-b966-5b6f70376136/sunny.png'
		return 'https://ucarecdn.com/35c90157-6c93-4d6c-ba09-f9250a35f7bc/clear.png'
	}
	if (moderateRain.includes(code)) {
		if (isDay === 1)
			return 'https://ucarecdn.com/c289cb6b-a36f-445b-91db-3a3b77174032/moderaterain.png'
		return 'https://ucarecdn.com/a7e7235b-e97c-44a6-8be0-fff75e34f7bf/moderaterainnight.png'
	}
	if (partlyCloudy.includes(code)) {
		if (isDay === 1)
			return 'https://ucarecdn.com/d9fa8a29-d962-48da-aff9-9046f8896ac5/partlycloudy.png'
		return 'https://ucarecdn.com/3b9ca283-97f6-4e85-bd3e-444c2645716c/partlycloudynight.png'
	}
	if (lightThunderRain.includes(code)) {
		if (isDay === 1)
			return 'https://ucarecdn.com/23590410-ea24-4f19-84e8-44fcd6273ee7/lightthunderrain.png'
		return 'https://ucarecdn.com/e57087dd-89ab-463b-9154-505f8134347f/lightthunderrainnight.png'
	}
	if (lightRain.includes(code)) {
		if (isDay === 1)
			return 'https://ucarecdn.com/71669209-5432-4d6e-a73f-b3eee064ad14/lightrain.png'
		return 'https://ucarecdn.com/1ea933b4-6140-4432-bea2-a59a9f316a03/lightrainnight.png'
	}
	if (fog.includes(code)) {
		if (isDay === 1) return 'https://ucarecdn.com/cc833546-e6a9-426b-b563-074dcb00d467/fog.png'
		return 'https://ucarecdn.com/636db03b-0516-4016-90c9-25b8d66380da/fognight.png'
	}

	if (blizzard.includes(code))
		return 'https://ucarecdn.com/8ab0aad1-d42d-44c3-ad51-7c0c7fb82f1b/blizzard.png'
	if (cloudy.includes(code))
		return 'https://ucarecdn.com/6ab9b8b7-dc70-4d83-aa0a-f1bb691c642f/cloudy.png'
	if (drizzle.includes(code))
		return 'https://ucarecdn.com/5fa979a0-d982-44ab-ae59-a59ab93132ac/drizzle.png'
	if (heavyRain.includes(code))
		return 'https://ucarecdn.com/05db0806-8743-440b-bcf2-61224a4b2df6/heavyrain.png'
	if (heavySnow.includes(code))
		return 'https://ucarecdn.com/5d73e990-ccf3-482d-9c9e-dc465b987602/heavysnow.png'
	if (heavySnowThunder.includes(code))
		return 'https://ucarecdn.com/c7a2ccab-dcb2-4cef-841c-a5dde43eb93a/heavysnowthunder.png'
	if (rainSnow.includes(code))
		return 'https://ucarecdn.com/c58176b2-31de-4e6e-a450-e9d7065f6e18/rainsnow.png'
	if (Snow.includes(code))
		return 'https://ucarecdn.com/9dd23944-f79f-4d90-90ac-6b5132e6d1ad/snow.png'
	if (thunderRain.includes(code))
		return 'https://ucarecdn.com/9c10303d-94b8-497b-be3d-993c0c76d674/thunderrain.png'
	if (thunderSnow.includes(code))
		return 'https://ucarecdn.com/a599b5a8-cbb1-461a-ab89-87c50173825a/thundersnow.png'
}
