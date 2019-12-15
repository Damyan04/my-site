function myFunction() {
    var form=document.getElementById("form");
  form.reset();
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  
}
function navfunc(){
    var content=document.getElementById("menu").style.display;
    console.log(content);
    if(content=="flex"){
        content=document.getElementById("menu").style.display = "none";
        document.getElementById("title").style.display="flex";
    }else{
        content=document.getElementById("menu").style.display = "flex";
        document.getElementById("title").style.display="none";
    }  

}
