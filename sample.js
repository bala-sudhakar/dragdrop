/**
 * 
 */
var variable1=0
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.effectAllowed = "copyMove";
}
function drop(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy";
    var id = ev.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(id).cloneNode(true);
    console.log(id);
    ev.target.innerHTML=nodeCopy.outerText;
    
      
}
