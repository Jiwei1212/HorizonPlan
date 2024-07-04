const name = document.getElementById('name')
const number = document.getElementById('number')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (number.value.length > 8) {
        messages.push('Phone number must be 8 digits')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})