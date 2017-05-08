function Chore(name, description, date, priority) {
  this.choreName = name;
  this.choreDescription = description;
  this.choreDate = date;
  this.chorePriority = priority;
};

function resetFields() {
    $("input#input#new-name").val("");
    $("input#new-description").val("");
    $("input#new-date").val("");
    $("input#new-priority").val("");
}
$(document).ready(function(){

  $("form#new-chore-list").submit(function(event){
    event.preventDefault();

    var inputtedNewName = $("input#new-name").val();
    var inputtedNewDescription = $("input#new-description").val();
    var inputtedNewDate = $("input#new-date").val();
    var inputtedNewPriority = $("input#new-priority").val();
    var newChore = new Chore(inputtedNewName, inputtedNewDescription, inputtedNewDate, inputtedNewPriority);

   $("ul#chore").append("<li><span class ='chore'>" + newChore.choreName + "</span></li>");
   $(".chore").last().click(function(){
     $("#show-chore").show();
     $("#show-chore h2").text(newChore.choreName);
     $(".chore-name").text(newChore.choreName);
     $(".chore-description").text(newChore.choreDescription);
     $(".chore-date").text(newChore.choreDate);
     $(".chore-priority").text(newChore.chorePriority);
   });

  resetFields();
  });
});
