let numX = document.querySelector("#numX");
let numY = document.querySelector("#numY");

numX.addEventListener("change", (event)=>{
  if (numX.value == ""){
    numX.value = 1;
  }
  if(numY.value == ""){
    numY.value = 100;
  }
  document.querySelector("#resultado").innerHTML = ((numX.value / numY.value) * 100).toFixed(2) + "%";
})
