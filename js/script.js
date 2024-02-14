
function convert() {
    // ketika tombol konversi di klik akan menjalankan fungsi ini
    celciusIsi = document.getElementById("celcius").value
    fahrenheitIsi = document.getElementById("fahrenheit").value
    celcius = document.getElementById("celcius")
    fahrenheit = document.getElementById("fahrenheit")
    cara = document.getElementById("cara")

    fahrenheitIsi = (9/5) * celciusIsi + 32
    fahrenheit.innerHTML = fahrenheitIsi

  }

  function reset(){
    window.location.reload();
  } 