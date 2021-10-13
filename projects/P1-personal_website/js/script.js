let drag = document.getElementById("draggable");
let drop = document.getElementById("droppable");

function allowDrop(event) {
  event.preventDefault();
}
function dropping(event) {
  event.preventDefault();
  location.href = 'pages.html';
}
