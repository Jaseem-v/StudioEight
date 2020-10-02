
/////------next & previous----//////


var gallery =document.querySelector(".gallery")
var images = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg"
];

var i=0;

function prev(){
if(i <=0 ) i = images.length;
i--;

return setImg();

}

function next(){

if(i >= images.length-1 ) i = -1;
i++;
return setImg();

}

function setImg(){
  return gallery.setAttribute('src','images/'+images[i])
}

//////----menu---////////

    var menuitems=document.getElementById("nav_links");

    menuitems.style.maxHeight="0px";

    function menutoggle(){
        if(menuitems.style.maxHeight=="0px"){
            menuitems.style.maxHeight="200px"
        }
        else{
            menuitems.style.maxHeight="0px"
        }
      }



