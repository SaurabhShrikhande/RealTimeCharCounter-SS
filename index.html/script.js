
document.getElementById("texta").addEventListener("keyup", func)

function func(){
// console.log(document.getElementById("texta").value.length);
document.getElementById("totalchar").innerText = document.getElementById("texta").value.length;
 // document.getElementById("remain").innerText = 50- document.getElementById("texta").value.length;
 document.getElementById("remain").innerText = texta.getAttribute("maxlength") - document.getElementById("texta").value.length;

     
}