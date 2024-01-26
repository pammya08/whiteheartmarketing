const scriptURL = 'https://script.google.com/macros/s/AKfycbz67T2mP4IDcbhTRUL8ABbj87CvE8caJWWjwpI7XgZv5pTCFPJ0OcnsPKBHBsn6W5VThg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})