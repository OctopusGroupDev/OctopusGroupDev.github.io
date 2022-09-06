'strict mode'

API_URL = 'https://octopus-group-api.herokuapp.com/contact_page/api/v1/request'

const submitForm = document.getElementById('contact_form')

const sendForm = body => {
	const xhr = new XMLHttpRequest()
	xhr.open('POST', API_URL)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.send(JSON.stringify(body))
}

submitForm.addEventListener('submit', async e => {
	e.preventDefault()

	let name = document.getElementById('name').value
	let email = document.getElementById('email').value
	let message = document.getElementById('message').value
	let phone = document.getElementById('phone').value

	let body = {
		name,
		email,
		message,
		phone,
	}

	sendForm(body)

	document.getElementById('name').value = ''
	document.getElementById('email').value = ''
	document.getElementById('message').value = ''
	document.getElementById('phone').value = ''
})

$(document).ready(function () {
	$('.chat_on').click(function () {
		$('.Layout').toggle()
		$('.chat_on').hide(300)
	})

	$('.chat_close_icon').click(function () {
		$('.Layout').hide()
		$('.chat_on').show(300)
	})
})

const wakeUpServer = () => {
	fetch('https://octopus-group-api.herokuapp.com/api/v1/wake_up_heroku')
		.then(res => console.log(res))
		.catch(err => console.log(err))
}

$(document).ready(() => {
	wakeUpServer()
})
