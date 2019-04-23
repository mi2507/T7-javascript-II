function howMany(selectObject) {
    let numeroSelecionadas = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numeroSelecionadas++;
      }
    }
    return numeroSelecionadas;
  }
  
  let btn = document.getElementById("btn");
  btn.addEventListener("click", function(){
    alert('Total de opções selecionadas: ' + howMany(document.selectForm.tipoMusica))
  });