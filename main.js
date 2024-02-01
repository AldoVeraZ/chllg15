// // main.js
// document.getElementById("clearBtn").addEventListener("click", clearFields);
// document
//   .getElementById("addBtn")
//   .addEventListener("click", () => performOperation((x, y) => x + y));
// document
//   .getElementById("subtractBtn")
//   .addEventListener("click", () => performOperation((x, y) => x - y));
// document
//   .getElementById("multiplyBtn")
//   .addEventListener("click", () => performOperation((x, y) => x * y));
// document.getElementById("divideBtn").addEventListener("click", divide);

// function clearFields() {
//   document.getElementById("form").reset();
//   document.getElementById("result").innerHTML = "";
// }

// function divide() {
//   performOperation((x, y) => {
//     if (isNaN(x) || isNaN(y)) {
//       showError("Ingrese números válidos");
//       return;
//     } else if (y === 0) {
//       showError("NO SE PUEDE DIVIDIR ENTRE 0 !!");
//       return;
//     } else {
//       return x / y;
//     }
//   });
// }

// function performOperation(operation) {
//   let x = document.getElementById("value1").value;
//   let y = document.getElementById("value2").value;

//   let resultElement = document.getElementById("result");

//   if (x.trim() === "" || y.trim() === "") {
//     showError("Ingrese números válidos");
//     return;
//   }

//   if (isNaN(x) || isNaN(y)) {
//     showError("Ingrese números válidos");
//   } else {
//     let isDecimalX = x.includes(".");
//     let isDecimalY = y.includes(".");
//     x = parseFloat(x);
//     y = parseFloat(y);

//     let result = operation(x, y);

//     if (result !== undefined) {
//       if (isDecimalX || isDecimalY) {
//         resultElement.innerHTML = result.toFixed(2);
//       } else {
//         resultElement.innerHTML = Math.round(result);
//       }
//     }
//   }
// }

// function showError(message) {
//   window.alert(message);
// }

document.getElementById("clearBtn").addEventListener("click", clearFields);
document
  .getElementById("addBtn")
  .addEventListener("click", () => performOperation((x, y) => x + y));
document
  .getElementById("subtractBtn")
  .addEventListener("click", () => performOperation((x, y) => x - y));
document
  .getElementById("multiplyBtn")
  .addEventListener("click", () => performOperation((x, y) => x * y));
document.getElementById("divideBtn").addEventListener("click", divide);

function clearFields() {
  document.getElementById("form").reset();
  document.getElementById("result").innerHTML = "";
}

function divide() {
  performOperation((x, y) => {
    if (isNaN(x) || isNaN(y)) {
      showError("Ingrese números válidos");
      return;
    } else if (y === 0) {
      showError("NO SE PUEDE DIVIDIR ENTRE 0 !!");
      return;
    } else {
      return x / y;
    }
  });
}

function performOperation(operation) {
  let x = document.getElementById("value1").value;
  let y = document.getElementById("value2").value;

  let resultElement = document.getElementById("result");

  if (x.trim() === "" || y.trim() === "") {
    showError("Ingrese números válidos");
    return;
  }

  // Utilizando la función Number en lugar de parseFloat
  x = Number(x);
  y = Number(y);

  if (isNaN(x) || isNaN(y)) {
    showError("Ingrese números válidos");
    return;
  }

  let result = operation(x, y);

  if (isNaN(result) || !isFinite(result)) {
    showError("Resultado no válido");
    return;
  }

  resultElement.value = Number.isInteger(result) ? result : result.toFixed(2);
}

function showError(message) {
  window.alert(message);
}
