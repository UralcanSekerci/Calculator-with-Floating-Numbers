var durum = false;
var oprt = ""
var sonuc = "0"
var selectedOperator = null;
// var bekleyenDeger = ""
var ekran = document.querySelector(".calculate-input")
var btn = document.querySelectorAll(".button")
var operator = document.querySelectorAll(".operator")
var clear = document.querySelector(".clear")
var esittir = document.querySelector(".equal")
var decimal = document.querySelector(".decimal")
var deleteC = document.querySelector(".delete")
var span = document.querySelectorAll("span")




ekran.value = "0"
btn.forEach(function (element) {
  element.onclick = function (e) {
    if (ekran.value == "0" || durum) {
      ekran.value = ""
    }
    ekran.value += e.target.value
    durum = false

    span.forEach(spn => {
      spn.textContent = e.target.value;
    })
  }

})
operator.forEach(function (elemenet) {
  elemenet.onclick = function (e) {
    durum = true
    var yeni = this.value


    if (selectedOperator) {
      selectedOperator.classList.remove("selected");
    }
    this.classList.add("selected");
    selectedOperator = this;
    // bekleyenDeger += ekran.value
    if (durum == false) {
      switch (oprt) {
        case "+": ekran.value = (sonuc + parseFloat(ekran.value)); break
        case "-": ekran.value = (sonuc - parseFloat(ekran.value)); break
        case "/": ekran.value = (sonuc / parseFloat(ekran.value)); break
        case "*": ekran.value = (sonuc * parseFloat(ekran.value)); break
        default: break;
      }
    }

    sonuc = Number(ekran.value)

    oprt = yeni
  }
})
clear.onclick = (function () {
  ekran.value = "0"
  oprt = ""
  sonuc = "0"
  // bekleyenDeger = ""
  span.forEach(spn => {
    spn.textContent = btn.value;
  })


})



esittir.onclick = function () {
  // bekleyenDeger.value = ""
  durum = true
  switch (oprt) {
    case "+": ekran.value = (sonuc + parseFloat(ekran.value)); break
    case "-": ekran.value = (sonuc - parseFloat(ekran.value)); break
    case "/": ekran.value = (sonuc / parseFloat(ekran.value)); break
    case "*": ekran.value = (sonuc * parseFloat(ekran.value)); break
    default: break;
  }

  sonuc = Number(ekran.value)
  ekran.value = sonuc
  sonuc = 0
  oprt = ""

}

// Event listener for "Enter" key
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    esittir.onclick();
  }
});

decimal.onclick = function () {
  if (!ekran.value.includes(".") && !durum) {
    ekran.value += "."
  } else if (durum) {
    ekran.value = "0"
  }
}

// Delete Button
deleteC.onclick = function () {
  ekran.value = ekran.value.slice(0, -1);
  span.forEach(spn => {
    spn.textContent = btn.value;
  })
}

// Selected
document.addEventListener('click', function (e) {
  if (e.target !== ekran && !e.target.classList.contains('operator')) {
    if (selectedOperator) {
      selectedOperator.classList.remove("selected");
      selectedOperator = null;
    }
  }
});

