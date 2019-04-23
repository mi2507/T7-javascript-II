
let resulta = document.querySelector ("#resulta");

let resultb = document.querySelector ("#resultb")



// let a = 0
// function sobe(selectObject) {
    // let numeroSelecionadas = 0;

    for (let a = 0; a < 11 ; a++) {
        // console.log(a);
        resulta.innerHTML = resulta.innerHTML + a + '<br>';
     };
    
    // return numeroSelecionadas; 
 
    
// }
// let b = 11 
for( let b = 10 ; b >= 0 ; b--){
    resultb.innerHTML = resulta.innerHTML + b + '<br>';
    // console.log(b);

};



  


  
  
  let btn = document.getElementById("btn");
  btn.addEventListener("click", function(){
    alert('Total de opções selecionadas: ' + howMany(document.selectForm.tipoMusica))
  });

//   parseInt(prompt('digite um numero menor que 10'));
