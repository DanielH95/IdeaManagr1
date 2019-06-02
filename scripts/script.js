console.log("JS Connected");  // Test to ensure script connected


// ---------- MY ACCOUNT PAGE ----------   

// When "profile" button clicked:
$("#profile").click(function(){
  $("#header").text("Profile Settings");    // change title to match setting clicked
  $('.btnSetting').removeClass('selected'); // remove "selected" styling from all buttons
  $(this).addClass('selected');             // apply "selected" styling to THIS button only
});

// Repeat for "notfications":
$("#notifications").click(function(){
  $("#header").text("Notifications Settings");
  $('.btnSetting').removeClass('selected');
  $(this).addClass('selected');
});

// Repeat for "security":
$("#security").click(function(){
  $("#header").text("Security Settings");
  $('.btnSetting').removeClass('selected');
  $(this).addClass('selected');
});

// Repeat for "defaults":
$("#defaults").click(function(){
  $("#header").text("Defaults Settings");
  $('.btnSetting').removeClass('selected');
  $(this).addClass('selected');
});

// ---------- FEATURES PAGE ----------

// $('.main').click(function(){
//   $('.btn').fadeToggle();
//   console.log('testing');
// }); 

// ---------- MAIN DASHBOARD PAGE ----------

// Add idea to list Button

var btnSubmitIdea = document.getElementById('btnSubmit');
var inputIdea = document.getElementById("enterIdea");

btnSubmitIdea.addEventListener("click", function() {
  // Prevent submission if Input field is empty
  if (inputIdea.value !== '') {
    var ul = document.getElementsByClassName("anIdea")[0];
    var li = document.createElement("li");
    li.setAttribute('class', inputIdea.value);
    li.contentEditable = "true";
    li.appendChild(document.createTextNode(inputIdea.value));
    ul.prepend(li);
  // } else {
  //   alert("Empty Field");
  }
  
});

// Use enter key to submit new li item

inputIdea.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      btnSubmitIdea.click();
    }
});

// Prevent new line in input of .anIdea

$(document).ready(function() {
  $('.anIdea').keypress(function(event) {
    if (event.keyCode == 10 || event.keyCode == 13) 
      event.preventDefault();
  });
});

// Make an Idea (list item) active

$('.anIdea').on('click', 'li', function() {
  $('.anIdea li.active').removeClass('active');
  $(this).addClass('active');
}); 

// Change sidebarheader to text enter in Ideas list section


$('.anIdea').on('click', 'li', function() {
  var listItem = $(this).text();
  var sideHeader = $('.sideNameHeader').text();

  $(sideHeader).text(listItem);

  console.log(listItem);
  console.log(sideHeader);

  // OLD, NOT AS TIDY
  // var listItemClicked = $(this).text();
  // console.log(listItemClicked);

  // var sidebarHeader = $('.sideNameHeader').text();
  // console.log(sidebarHeader);

  // $(sidebarHeader).text(listItemClicked);
});