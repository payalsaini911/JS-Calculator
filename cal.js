
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});
function back(){
    var val=display.value;
    display.value=val.substr(0,val.length-1);
}

function calculate(event) {
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    if (display.value !== '') {
      display.value = eval(display.value);
    }
  }
  else if (clickedButtonValue === 'C') {
    display.value = '';
  } 
  else if(clickedButtonValue === 'dlt') {
    back();
  }
  else{
    display.value += clickedButtonValue;
  }
} 