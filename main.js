function calcular(distancia){
 resultado=distancia/300000;
 resultado=resultado/60;
 if(resultado>=60){
    resultado=resultado/60;
    document.getElementById("pla").innerHTML="o tempo que a luz demora para chegar ao planeta e "+resultado; 

 }
 else{
    document.getElementById("pla").innerHTML="o tempo que a luz demora para chegar ao planeta e "+resultado;
 }
}
function arz(){
    calcular(4504300000);

}