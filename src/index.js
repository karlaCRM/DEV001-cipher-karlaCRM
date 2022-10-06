import cipher from './cipher.js';
let containerResult = document.getElementById('iResult');
document.getElementById("encrypt-btn").addEventListener("click", cifrar)


function cifrar(){
   const stringO = document.getElementById("iOriginal").value;
   //console.log (stringO)
   const offset = parseInt(document.getElementById("shift").value);
   //console.log (offset)
   containerResult.innerHTML= cipher.encode(offset,stringO);

   }
    
let containerDecode = document.getElementById("resultDecode")
document.getElementById("decode-btn").addEventListener("click", descifrar)

function descifrar(){
    const codToUncode = document.getElementById("codificado").value;
    //console.log (codToUncode)
    const offsetTwo = parseInt(document.getElementById("shiftBack").value);
    //console.log (offsetTwo)
    containerDecode.innerHTML= cipher.decode(offsetTwo, codToUncode);
}

document.getElementById("copyToClipBoard").addEventListener("click", copyToClipBoard)
function copyToClipBoard() {
    
    containerResult.select();
    document.execCommand("copy");

    alert("Tu texto codificado se encuentra en el portapapeles, ya solo debes pegarlo en el whats <3");

}

console.log(cipher);