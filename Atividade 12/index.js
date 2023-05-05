var janela = document.getElementById("janela"); 
var imagens = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwO9Fr6NMTmqTfbP8vwrD2Ccl13ryFTUr0hg&usqp=CAU", "https://w7.pngwing.com/pngs/418/69/png-transparent-window-open-windows-angle-photography-windows.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBP19o2OWh_lVYGrjtUyGVrfBVd7kpIDOKUg&usqp=CAU"]; /* define um array com as três imagens */

var index = 0;

janela.addEventListener("click", function() {
  index++;
  if (index >= imagens.length) {
    index = 0;
  }
  janela.src = imagens[index]; 
});
