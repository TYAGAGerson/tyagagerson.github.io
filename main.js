
    //alert("hii");
        const getOffsetTop = function(element) {
        if (!element) return 0;
        return getOffsetTop(element.offsetParent) + element.offsetTop;
    };
    const fades=document.querySelectorAll(".fades");
    const carrot=document.getElementById("carrot");
    function scrollfade(){

    
        fades.forEach(
        
        element=>{
            if(!(element.classList.contains("fade-in"))){
                console.log(window.scrollY + window.innerHeight-getOffsetTop(element));
            if(window.scrollY + window.innerHeight-getOffsetTop(element) > 0){
            element.classList.add("fade-in");
            element.classList.remove("fades");
            }
        }
            
            
        }
    )
    
    }

    window.addEventListener("scroll",scrollfade);
    window.dispatchEvent(new Event("scroll"));
    var execd=1;
    var time=0;
    
    const str=["does nothing.","codes.","wants to help everyone.","will learn more.", "likes discrete math, physics, computer, etc.","is from Indonesia.","tries to win fairly.","wants to make a B3313 clone.","made yet another clone\nof this gimmick.","repeats again 'bout this typing."]
    var gimmick_index=str.length-1;
    var thaInterval=1;


    const elem_repl_str = document.getElementById("gimmick");
    
    //alert(window.scrollY + window.innerHeight);
    //var scrollY =/* window.pageYOffset ||*/ document.documentElement.scrollTop || document.body.scrollTop || 0;
    function refresh(){
        location.reload();
    }
    function repl_str() {
        var size_str= str.length;
        var str_size= str[gimmick_index].length;

    if(time>str_size){
        
elem_repl_str.innerHTML=str[gimmick_index].slice(0,str_size*2-time);
    } else {
        elem_repl_str.innerHTML=str[gimmick_index].slice(0,time);
    }
    
    if(time==str_size+1){
        carrot.style.animationPlayState='paused';
        carrot.getAnimations()[0].currentTime=0;
        if(str_size==0){
        thaInterval=1000;
        }else thaInterval=Math.max(75,1000/str_size)
    }   
    if(time==str_size){
        carrot.style.animationPlayState='running';
        

        thaInterval=1000+Math.random()*2000;;
        
    }
    if(time==0){
        gimmick_index=(gimmick_index+1)%(size_str);
    }
    else if (time<str_size) {
        thaInterval=50+Math.random()*100;
        
    }
    time=(time+1) % (str_size*2);
    console.log(str_size)
    
    setTimeout(repl_str, thaInterval);
    
}


setTimeout(repl_str, thaInterval);

document.addEventListener('DOMContentLoaded',() =>{})