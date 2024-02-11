const celcius = document.getElementById("celcius"),
    fahrenheit = document.getElementById("fahrenheit");

// window.addEventListener("load", () => celcius.fokus());

function convert() {
    let hasil = (celcius*1.8)+32;
    document.getElementById("fahrenheit").innerHTML=hasil;
  }