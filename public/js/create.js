const signupFormHandler = async (event) => {
  event.preventDefault();
  
    const color1 = document.querySelector('#color1').value.trim();
    const color2 = document.querySelector('#color2').value.trim();
    const color3 = document.querySelector('#color3').value.trim();
    const font1 = document.querySelector('#font1').value.trim();
    const font2 = document.querySelector('#font2').value.trim();
    const font3 = document.querySelector('#font3').value.trim();

  if (!color1 || !color2 || !color3 || !font1 || !font2 || !font3 ) {
    alert('please input all values')
    return;
  } 
  else {
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
  .addEventListener('submit',  signupFormHandler);



// Change Color Dynamically //

let result = document.querySelector('.createContainer');

result.addEventListener('change', async function (event) {
  event.preventDefault();
    let target = event.target;
    switch (target.id) {
        case 'color1':
          $(".box1").css("backgroundColor", $(".color1").val());
            break;
        case 'color2':
          $(".butto").css("backgroundColor", $(".color2").val());
            break;
        case 'color3':
          $(".box3").css("backgroundColor", $(".color3").val());
            break;
        case 'font1':
          $(".head").css("font-family", $(".font1").val());
            break;
        case 'font2':
          $(".para").css("font-family", $(".font2").val());
            break;
        case 'font3':
          $(".butto").css("font-family", $(".font3").val());
            break;
    }
});



