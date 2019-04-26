
let nr;
for (nr=1; nr<=20; nr++){
if (nr%4 == 0){
document.write ("pin");
document.write ("<br>");
continue; //ignora todo o resto e continua o loop
}
document.write (nr);
document.write ("<br>");
}