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
   
},false)