// "icon" id buhii HTML elelmentiig avch "icon" huvisagchid hadgalna
var icon = document.getElementById("icon");
// "Icon" elemented onclickiig hadgalj uguh function
icon.onclick = function(){
  // element deer dark theme iig uguh
  document.body.classList.toggle("dark-theme");
  // dark bolson esehiig shalgah
  if(document.body.classList.contains("dark-theme")){
    // dark theme bolson bol бол dursiig "assest/sun.png" bolgono
    icon.src="assest/sun.png";
  }else{
    // esreg vyd "assest/moon.png" 
    icon.src="assest/moon.png";
  }
}
