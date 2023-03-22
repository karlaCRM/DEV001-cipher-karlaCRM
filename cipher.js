const cipher = {
    encode (offset, stringO){

        if(offset== null || stringO==[]){
            throw  TypeError("No has ingresado texto");
        }

        let letter= stringO;
        //console.log (letter)
        let resultadoUno= ""; //resultado letra nueva
        let formula = "";
        let formulaDos= "";
        let toAscii=""
        let formulaTres=""

        
        

        for(let i = 0; i<letter.length; i++){
            toAscii= letter.charCodeAt(i);
            //console.log(toAscii);

            if (toAscii>=65 && toAscii<=90){ //condicion para realizar el cambio
                formula = String.fromCharCode((toAscii- 65 + offset)%26 + 65);//MAYUSCULAS
                resultadoUno += formula;
                //console.log (resultadoUno)
            } else if (toAscii>=97 && toAscii<=122){ 
                formulaDos = String.fromCharCode((toAscii- 97 + offset)%26 + 97);//minusculas
                resultadoUno += formulaDos;
                //console.log (resultadoUno)
            } else if (toAscii===241){ //ñ
                formulaTres= String.fromCharCode((toAscii-0 + offset)-offset).replace("ñ", "%")
                resultadoUno = resultadoUno += formulaTres
                //console.log(resultadoUno)

            } else if (toAscii===209){ //Ñ
                formulaTres= String.fromCharCode((toAscii-0 + offset)-offset).replace("Ñ", "#")
                resultadoUno = resultadoUno += formulaTres
                //console.log(resultadoUno)
            } else {
                resultadoUno = resultadoUno +  letter[i]
            }
            
            }
         return resultadoUno;
}   
    ,decode (offsetTwo,codToUncode){
       
        if(offsetTwo== null || codToUncode==[]){
            throw  TypeError("No has pegado texto");
        }

        let textCode = codToUncode; //texto recibido
        //console.log(codToUncode)
        let resultadoDos=""; 
        let formulaRegreso= "";
        let toAsciiDos= "";
        let formulaSymbols="";

        for(let a=0; a<textCode.length; a++){
            toAsciiDos= parseInt(textCode.charCodeAt(a));
            //console.log(toAsciiDos); //convertido a ascii

            if (toAsciiDos>=65 && toAsciiDos<=90){ //condiciones para realizar la formula MAYUSCULAS
                formulaRegreso= String.fromCharCode((toAsciiDos -65 - offsetTwo% 26 + 26) % 26 + 65);
                resultadoDos += formulaRegreso
                //console.log (resultadoDos)
            }else if (toAsciiDos>=97 && toAsciiDos<=122){ //MINUSCULAS
                formulaRegreso = String.fromCharCode((toAsciiDos - 97 - offsetTwo % 26 + 26)%26 + 97);
                resultadoDos += formulaRegreso;
                //console.log (resultadoDos)
            } else if (toAsciiDos===37){ //ñ
                formulaSymbols= String.fromCharCode((toAsciiDos-0 + offsetTwo)-offsetTwo).replace("%", "ñ")
                resultadoDos = resultadoDos += formulaSymbols
                //console.log(resultadoDos)

            } else if (toAsciiDos===35){ //Ñ
                formulaSymbols= String.fromCharCode((toAsciiDos-0 + offsetTwo)-offsetTwo).replace("#", "Ñ")
                resultadoDos = resultadoDos += formulaSymbols
                //console.log(resultadoDos)
            } else {
                resultadoDos = resultadoDos +  textCode[a]}
            }
            return resultadoDos
        }
    }



export default cipher;