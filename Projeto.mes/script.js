function meses(){
    let mes = parseInt(document.getElementById("mesesinput").value);
 

    switch(mes){
        case 1:
            alert("janeiro");
        break;
         
        case 2:
            alert("fevereiro");
        break;
         
        case 3:
            alert("março");
        break;
         
        case 4:
            aert("abril");
        break;
         
        case 5:
            alert("maio");
        break;
         
        case 6:
            alert("junho");
        break;
         
        case 7:
            alert("julho");
        break;

        case 8:
            alert("agosto");
        break;
         
        case 9:
            alert("setembro");
        break;
         
        case 10:
            alert("outubro");
        break;

        case 11:
            alert("novembro");
        break;

        case 12:
            alert("dezembro");
        break;
         
         
        default:
            alert("Não identificado");              
    }


}
