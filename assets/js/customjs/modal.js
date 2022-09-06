'strict mode'

// Modal

const d = document

const modal = document.getElementsByClassName('de_modal')

console.log(modal)

modal.addEventListener('click', e => {
	console.log(e.target.id)
})
