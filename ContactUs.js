let menu = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');

}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');

}

var swiper = new Swiper(".Home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    loop:true,
  });




  function val(e){
    e.preventDefault();

    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let phonenum = document.getElementById("phonenum")
    let ramen = document.getElementById("ramen")
    let checkbox = document.getElementById("checkbox")

    if(name.value.length <= 5){
        alert("name must be more than 5 characters")
    }else if(!email.value.endsWith("@gmail.com")){
        alert("must gmail account")
    }else if(phonenum.value.length <= 10 || phonenum.value.length >= 13 || !phonenum.value.startsWith("08")){
        alert("Input Phone Number like and 08xxxxxxxx between 10-13 digit")
    // }else if(  ){
    //     alert("Input Phone Number between 10-13 digit")
    // }else if(  ){
    //     alert("")
    }else if(ramen.selectedIndex <1){
        alert("What ramen menu do you suggest? Please choose one of option!")
    }else if(!checkbox.checked){
        alert("you must agree with the newsletter")
    }
    else{
        alert("Succes^^!")
    }



}
