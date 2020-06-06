document.addEventListener("DOMContentLoaded",function(){
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
        //Nếu button được click thì nhảy về đầu trang
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
},false)