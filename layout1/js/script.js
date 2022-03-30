// var btn = document.querySelector('#btn-menu p');

// Atribui evento de click para o btn
// btn.addEventListener("click", function () {
    // Mostra no log, após o click
    // console.log("Clicou");
    // document.querySelector(".desativo").style.display = "block";
    // btn.setAttribute('id', 'btn-none');
    // document.removeAttribute('id',"btn-menu p");
    // btn.classList.add("btn-none");
// });

// var btnNone = document.querySelector('#btn-none');

// btnNone.addEventListener("click", function () {
//     console.log("Clicou2");

// });

var btn = document.querySelector("#btn-menu p");

btn.addEventListener("click", function() {
    console.log("clicou");
    var div = document.querySelector(".ativo");
    
  if(div.style.display === "none") {
        div.style.display = "block";
    } else {
      div.style.display = "none";
  }
    
});