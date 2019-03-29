function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active"; 
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


function menuTab(evt, occasion) {
  

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(occasion).style.display = "block";
  evt.currentTarget.className += " active";

}

function validate(){
  var zipcode = $("#zipcode").val();
  if (zipcode === ""){
    return true;
  }
  var allNum = isNaN(zipcode);
  if (allNum == true){
    alert("Zipcode is not valid or not in valid format.");
    return false;
  } 
  if (zipcode.length != 5){
    alert("Zipcode is not valid or not in valid format.");
    return false;
  }
}



function showDescription(descript){
  $("#description").html("Description: " + descript);

}

function hideDescription(){
  $("#description").html();
}