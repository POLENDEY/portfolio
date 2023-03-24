function show(){

    document.querySelector('.hamburger').classList.toggle('open')

    document.querySelector('.navigation').classList.toggle('active')
    
  /*  document.querySelector('.content').classList.toggle('open')
    
    document.querySelector('#top').classList.toggle('open')
    
    document.querySelector('footer').classList.toggle('open') */
    
    document.querySelector('.dark').classList.toggle('open')
}
/*
const form = document.getElementById('.contact-form');
      const alert = document.getElementById('alert');

      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);

        fetch('/send-email', {
          method: 'POST',
          body: formData,
        })
          .then((response) => {
            if (response.ok) {
              alert.classList.remove('show');
              form.reset();
              alert('Your message has been sent successfully!');
            } else {
              alert.classList.add('show');
            }
          })
          .catch((error) => {
            alert.classList.add('show');
          });
      }); */