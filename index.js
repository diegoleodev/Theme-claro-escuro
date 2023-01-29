
var btnClick = document.querySelector('.select');
btnClick.addEventListener('click', mostraSelect)

var darkClick = document.querySelector('.select2',);
darkClick.addEventListener('click', mostraSelect)

var darkClick = document.querySelector('.select3',);
darkClick.addEventListener('click', mostraSelect)

function mostraSelect(){
  var mM = document.querySelector('.select2');
  mM.classList.toggle('select2-active')
  var mM2 = document.querySelector('.select3');
  mM2.classList.toggle('select3-active')
}

function darkClicado(){
  document.querySelector('.container').style.background = '#202020'
  document.querySelector('#theme').innerHTML = "Dark"
}
function lightClicado(){
  document.querySelector('.container').style.background = '#FFF'
  document.querySelector('#theme').innerHTML = "Ligth"
}

