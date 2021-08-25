// tombol untuk IG
const buttons = document.querySelectorAll('.tombol-ig');
    buttons.forEach(btn => {
    btn.addEventListener('mouseover',function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
    
            let ripples = document.createElement('btn-anim');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);
    
            setTimeout(() => {
                ripples.remove()
            },1000);
        })
    })

//transition navbar
$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop() > 100);
    $('.navbar-nav').toggleClass('scrolled',$(this).scrollTop() > 100);
});

//transition navbar brand
$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.navbar .navbar-brand img').attr('src','img/Logo Lengkap.PNG');
    }
    else{
        $('.navbar .navbar-brand img').attr('src','img/Logo Lengkap putih.PNG ');
    }
});

//pop up + blur
function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

// function rename text di tombol
var x = 0;
function rename(){
    if(x%2==0){
        document.getElementById('expand').innerHTML = "&emsp;Minimized&ensp;&nbsp;";
        x++;
        return x;
    }else{
        document.getElementById('expand').innerHTML = "Explore More";
        x++;
        return x;
    }
        
}

//alert himti sport
function alertt(){
    alert("Thank You for Submitting");
}

//alert e-sport
function alerts(){
    alert("E-Sport Competition Coming Soon..")
}

//validate number
function onlyNumberKey(evt) { 
   // Only ASCII charactar in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode 

    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 

        return false; 

    return true; 

}