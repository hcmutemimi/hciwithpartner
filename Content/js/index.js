document.addEventListener("DOMContentLoaded",function(){
    // Xử lí navbar
    var menunho = document.querySelector('.row-nav');
    
    window.addEventListener('scroll',function(){
        if(window.pageYOffset>45){
            menunho.classList.add('navbar-larger')
        }
        else{
            menunho.classList.remove('navbar-larger')
		}
	});
	
	var blocksearch = document.querySelector('.header-search-block');
    window.addEventListener('scroll',function(){
        if(window.pageYOffset >142){
            blocksearch.classList.add('header-search-block-small')
        }else{
            blocksearch.classList.remove('header-search-block-small')

        }
    });
    //Xử lí button scroll
     var mybutton = document.getElementById("scroll-to-top");
        window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
        if (document.body.scrollTop > 142 || document.documentElement.scrollTop > 142) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    document.getElementById('scroll-to-top').addEventListener("click", function(){
       $("html,body").animate({scrollTop:0},500,'swing');
       return false;
    });
    // Xử lí button đăng kí, đăng nhập
    //modal
    var modalid=document.getElementById("modal__layout");
  
     // Nếu nhấn vào button đăng nhập
     var modallogin=document.getElementById("login-button");

     var  showformlogin=document.getElementById("form-login");
 
     var btnshowformregisterfromlogin=document.getElementById("heading-register-from-loginform");
     var showformregisterfromlogin=document.getElementById("form-register")
     
     //Listen for click
     modallogin.addEventListener('click',openModal);
     function openModal(){
         modalid.style.display='flex';
         showformregisterfromlogin.style.display='block';
 
     }
     btnshowformregisterfromlogin.addEventListener('click',openfromrgisterfromlogin);
     function openfromrgisterfromlogin(){
         showformlogin.style.display='none';
 
         showformregister.style.display='block';
        
     }
 
    // Nếu nhấn vào button đanwg ký

    var modalregister=document.getElementById("register-button");

    var  showformregister=document.getElementById("form-register");

    var btnshowformloginfromregister=document.getElementById("heading-login-from-registerform");
    var showformloginfromregister=document.getElementById("form-login")
    
    //Listen for click
    modalregister.addEventListener('click',openModal);
    function openModal(){
        modalid.style.display='flex';
        showformregister.style.display='block';

    }
    btnshowformloginfromregister.addEventListener('click',openfromloginfromregister);
    function openfromloginfromregister(){
        showformregister.style.display='none';

        showformloginfromregister.style.display='block';
       
    }
   


    
   
},false)