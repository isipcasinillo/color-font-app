const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const color1 = document.querySelector('#color1').value.trim();
    const color2 = document.querySelector('#color2').value.trim();
    const color3 = document.querySelector('#color3').value.trim();
    const font1 = document.querySelector('#font1').value.trim();
    const font2 = document.querySelector('#font2').value.trim();
    const font3 = document.querySelector('#font3').value.trim();
    if (color1) {
      const response = await fetch('/choose', {
        method: 'POST',
        body: JSON.stringify({ color1, color2, color3, font1, font2, font3 }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
 
  document
    .querySelector('.createColor')
    .addEventListener('submit', signupFormHandler);
  