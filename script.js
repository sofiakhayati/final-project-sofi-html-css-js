/************************************** scroll side ********************/
/*var myCustomScrollbar = document.querySelector('.my-custom-scrollbar');
var ps = new PerfectScrollbar(myCustomScrollbar);

var scrollbarY = myCustomScrollbar.querySelector('.ps__rail-y');

myCustomScrollbar.onscroll = function () {
  scrollbarY.style.cssText = `top: ${this.scrollTop}px!important; height: 400px; right: ${-this.scrollLeft}px`;
}*/

/************************************** hidden part view all 1 ********************/
function myFunction() {
  var x = document.getElementById("myDIV1");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
function myFunction00() {
  var x = document.getElementById("log-nav");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myFunction1() {
  var x = document.getElementById("myDIV2");
  var y = document.getElementById("myDIV1-1");
  var Z = document.getElementById("myDIV1-2");
  if (x.style.display === "none" && y.style.display === "flex") {
    x.style.display = "flex";
    y.style.display = "none";
    Z.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "flex";
    Z.style.display = "flex";
  }
}
function myFunction2() {
  var x = document.getElementById("myDIV3");
  var y = document.getElementById("myDIV1-0");
  var Z = document.getElementById("myDIV1-2");
  if (x.style.display === "none" && y.style.display === "flex") {
    x.style.display = "flex";
    y.style.display = "none";
    Z.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "flex";
    Z.style.display = "flex";
  }
}
function myFunction3() {
  var x = document.getElementById("myDIV4");
  var y = document.getElementById("myDIV1-0");
  var Z = document.getElementById("myDIV1-1");
  if (x.style.display === "none" && y.style.display === "flex") {
    x.style.display = "flex";
    y.style.display = "none";
    Z.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "flex";
    Z.style.display = "flex";
  }
}
/****************************************email footer ************************** */

var ml = document.getElementById("btnbtnmail")
console.log(ml)
var inp = document.getElementById("mailinput")
console.log(inp)
ml.addEventListener('click', emailfunction)


function emailfunction()
{
  if (inp.value == 0)
  alert("plz enter your mail")
  else
  alert("Thank you for sending mail")
}

/********************** contact form *****************************/


function showcontactform() {
  var contact = document.getElementById("contactform");
  var x = document.getElementById("fooooter")
  var y = document.getElementById("btn--cnt")
  if (contact.style.display === "none" && x.style.display === "block") {
    contact.style.display = "block";
    x.style.display = "none";
    y.style.backgroundColor = "rgb(114, 83, 5)"
  } else {
    contact.style.display = "none";
    x.style.display = "block";
    y.style.backgroundColor = "rgb(46, 46, 46, 0.5)"
  }
}
/****************** PAGINATION */  
 const pg=document.querySelector(".page-page").children;
 const prev=document.querySelector(".prev");
 const next=document.querySelector(".next");
 const page=document.querySelector(".page-num");
 const maxItem= 3;
 let index=1;
  
  const pagination=Math.ceil(pg.length/maxItem);
  console.log(pagination)

  prev.addEventListener("click",function(){
    index--;
    check();
    showItems();
    if(index <= 1)
    {
      index +=1;
    }
  })
  next.addEventListener("click",function(){
  	index++;
  	check();
    showItems();  
    if(index >= pg.length/maxItem)
    {
      index -=1;
    }
  })

  function check(){
  	 if(index == pagination){
  	 	next.classList.add("disabled");
  	 }
  	 else{
  	   next.classList.remove("disabled");	
  	 }

  	 if(index==1){
  	 	prev.classList.add("disabled");
  	 }
  	 else{
  	   prev.classList.remove("disabled");	
  	 }
  }

  function showItems() {
  	 for(let i=0; i<pg.length; i++){
  	 	pg[i].classList.remove("show");
  	 	pg[i].classList.add("hide");


  	    if(i>=(index*maxItem)-maxItem && i<index*maxItem){
  	 	  // if i greater than and equal to (index*maxItem)-maxItem;
  		  // means  (1*8)-8=0 if index=2 then (2*8)-8=8
          pg[i].classList.remove("hide");
          pg[i].classList.add("show");
  	    }
  	   page.innerHTML= index;
  	 }
 	 	
  }
  
  window.onload=function(){
  	showItems();
  	check();
  }



