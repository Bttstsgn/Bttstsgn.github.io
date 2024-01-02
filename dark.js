var icon = document.getElementById("icon");
icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src="assest/sun.png";
  }else{
    icon.src="assest/moon.png";
  }
}