function convert() {
  let input = document.getElementById("input").value
  let hasil = document.getElementById('hasil')
  let rumus = document.getElementById('rumus')
  let selected = document.getElementById('select')
  let valueSelect = selected.options[selected.selectedIndex].value

  if (input != 0 ) {
    if (valueSelect == 'celcius') {
          let fahrenheit = ((input * 9 / 5) + 32).toFixed(1)
          hasil.innerHTML = fahrenheit
          rumus.innerHTML = fahrenheit +" = (" + input + " * 9 / 5) + 32)"
    }else{
          let celcius = ((input - 32) * 5 / 9).toFixed(1)
          hasil.innerHTML = celcius
          rumus.innerHTML = celcius +" = (" + input + " - 32) * 5 / 9"
    }
  }else {
    alert('masukkan suhu yang ingin di konvert')
  }
}


function reset(){
  window.location.reload();
}

function reverse(){
  let input = document.getElementById("input").value
  let hasil = document.getElementById('hasil')
  let rumus = document.getElementById('rumus')
  let selected = document.getElementById('select')
  let valueSelect = selected.options[selected.selectedIndex].value
  var temp = input
  input.innerHTML = hasil
  hasil.innerHTML = temp

  
}



  