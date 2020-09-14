

        
function solonumeros(e){

    key=e.KeyCode || e.which;

        teclado=String.fromCharCode(key);
        numeros="0123456789";
        especiales="  ";
        teclado_especial=false;
    
        for(var i in especiales){

       if(key==especiales[i]){
            teclado_especial=true;
        }
        }
        if(numeros.indexOf(teclado) == -1 && !teclado_especial){
            return false;
        }

}
function enviardatos(){

    var texto,texto1,texto2,texto3,texto4;
    if(  texto,texto1,texto2,texto3,texto4 == 0){

        alert("Ingrese valor en todos los campos");
    }else{
        texto=document.getElementById("inputtext1").value;
    document.getElementById("inputrecibir1").value=texto;

     texto1=document.getElementById("inputtext2").value;
    document.getElementById("inputrecibir2").value=texto1;

     texto2=document.getElementById("inputtext3").value;
    document.getElementById("inputrecibir3").value=texto2;

     texto3=document.getElementById("inputtext4").value;
    document.getElementById("inputrecibir4").value=texto3;

     texto4=document.getElementById("inputtext5").value;
    document.getElementById("inputrecibir5").value=texto4;
    alert("ASIGNE EL NÚMERO DE COMPLEJIDAD A CADA COMPONENTE SEGUN SU GRADO DE DIFICULTAD");
    }
    

}

function  calculo( ){

    var texto1=document.getElementById("inputrecibir1").value;
    var texto2=document.getElementById("inputrecibir2").value;
    var texto3=document.getElementById("inputrecibir3").value;
    var texto4=document.getElementById("inputrecibir5").value;
    var texto5=document.getElementById("inputrecibir5").value;

    if( texto1,texto2,texto3,texto4,texto5== 0 ){
        alert("ERROR INGRESE TODOS DATOS EN LA IDENTIFICACION DE COMPONENTES");

    }else{

        
        var numero1= document.getElementById("simple1").value;
        var numero2= document.getElementById("media1").value;
        var numero3= document.getElementById("alta1").value;
        var total1= (numero1*3)+(numero2*4)+(numero3*6);
        document.getElementById("total1").value=total1;
    
        var numero1= document.getElementById("simple2").value;
        var numero2= document.getElementById("media2").value;
        var numero3= document.getElementById("alta2").value;
        var total2= (numero1*4)+(numero2*5)+(numero3*7);
        document.getElementById("total2").value=total2;
    
        var numero1= document.getElementById("simple3").value;
        var numero2= document.getElementById("media3").value;
        var numero3= document.getElementById("alta3").value;
        var total3= (numero1*3)+(numero2*4)+(numero3*6);
        document.getElementById("total3").value=total3;
    
        var numero1= document.getElementById("simple4").value;
        var numero2= document.getElementById("media4").value;
        var numero3= document.getElementById("alta4").value;
        var total4= (numero1*7)+(numero2*10)+(numero3*15);
        document.getElementById("total4").value=total4;
    
        var numero1= document.getElementById("simple5").value;
        var numero2= document.getElementById("media5").value;
        var numero3= document.getElementById("alta5").value;
        var total5= (numero1*5)+(numero2*7)+(numero3*10);
        document.getElementById("total5").value=total5;
    
    
        var conteototal=( total1+total2+total3+total4+total5);
        document.getElementById("conteototal").value=conteototal;
        //document.getElementById("pasar").value=conteototal;
    }
     
   

    
}
function ajuste( ){

    var numero1= document.getElementById("num1").value;
    var numero2= document.getElementById("num2").value;
    var numero3= document.getElementById("num3").value;
    var numero4= document.getElementById("num4").value;
    var numero5= document.getElementById("num5").value;
    var numero6= document.getElementById("num6").value;
    var numero7= document.getElementById("num7").value;
    var numero8= document.getElementById("num8").value;
    var numero9= document.getElementById("num9").value;
    var numero10= document.getElementById("num10").value;
    var numero11= document.getElementById("num11").value;
    var numero12= document.getElementById("num12").value;
    var numero13= document.getElementById("num13").value;
    var numero14= document.getElementById("num14").value;

    var total=(numero1*1+numero2*1+numero3*1+numero4*1+numero5*1+numero6*1+numero7*1+numero8*1+numero9*1
                +numero10*1+numero11*1+numero12*1+numero13*1+numero14*1);
    document.getElementById("total").value=total;  
    document.getElementById("pasar").value=total;

    var pasar1=document.getElementById("conteototal").value;
    document.getElementById("pasar1").value=pasar1;
    var pasar  =document.getElementById("pasar").value;
    if( pasar1== 0 || pasar ==0  ){
         alert('Error ingrese todos los datos para obtener un resultado');
         return false
    }else{
    punto= pasar1*(0.65+0.01*pasar);
    punto = punto.toFixed(2);
        document.getElementById("punto").value=punto;
    }

}


function hhombre(){

    var puntafa= document.getElementById("punto").value;
    var desarrolladores= document.getElementById("desarrolladores").value;
    
    if( desarrolladores== false || puntafa == false){
        alert('Ingrese el Número de Desarrolladores o complemente el PFA ');
        
         return false

    }else{
        var horas_hombre= (puntafa*8);
        horas_hombre = horas_hombre.toFixed(2);
        document.getElementById("hombre").value=horas_hombre;
        var promediodesarrolladores= (horas_hombre/desarrolladores);
        promediodesarrolladores = promediodesarrolladores.toFixed(2);
        document.getElementById("promedio_desarrolladores").value=promediodesarrolladores;
        var meses=(promediodesarrolladores/60);
        meses = meses.toFixed(2);
        document.getElementById("promedio_meses").value=meses;

    }
   
}





