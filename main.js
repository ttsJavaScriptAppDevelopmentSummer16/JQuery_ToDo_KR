$( document ).ready(function() {

  function appendItem(i){
    var newLI = document.createElement('li');
    newLI.innerHTML = i;
    var list = $('ul');
    list.appendChild(newLI);
    return newLI
  }

  function removeItem(i){
    i.innerHTML = i.innerHTML.strike();
    setTimeout(function(){ i.remove(); }, 1000);
  }

  $('#myButton').on("click", function(e){
    var newI = $("#myField").value;
    appendItem(newI);
  });

  $('ul').on('click', function(e){
    if(e.target.tagName === "LI"){
      removeItem(e.target);
    }
  });

});
