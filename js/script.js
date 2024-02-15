// function convert() {
//    ketika tombol konversi di klik akan menjalankan fungsi ini
//     let celciusIsi = document.getElementById("celcius").value
//     let fahrenheitIsi = document.getElementById("fahrenheit").value
//     let celcius = document.getElementById("celcius")
//     let fahrenheit = document.getElementById("fahrenheit")

//     fahrenheit.innerHTML = (9/5) * celciusIsi + 32
//     fahrenheit.innerText = fahrenheitIsi
//     celciusIsi = (fahrenheitIsi - 32) * 5/9
//     celcius.innerText = celciusIsi
//     console.log(fahrenheitIsi, celciusIsi)
//   }


function convert() {
  let input = document.getElementById("input").value
  let hasil = document.getElementById('hasil')
  let rumus = document.getElementById('rumus')
  let selected = document.getElementById('select')
  let valueSelect = selected.options[selected.selectedIndex].value

  if (valueSelect == 'celcius') {
        let fahrenheit = ((input * 9 / 5) + 32).toFixed(1)
        hasil.innerHTML = fahrenheit
        rumus.innerHTML = fahrenheit +" = (" + input + " * 9 / 5) + 32)"
  }else{
        let celcius = ((input - 32) * 5 / 9).toFixed(1)
        hasil.innerHTML = celcius
        rumus.innerHTML = celcius +" = (" + input + " - 32) * 5 / 9"
  }
}
  function reset(){
    window.location.reload();
  } 



  