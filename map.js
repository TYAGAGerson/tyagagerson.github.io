function hidebox(elem){
    elem.classList.add("prop-hidden");
}
async function name() {
    const ft= await fetch("map.json");
    const dt=await ft.json();
    console.log(dt);
    
    
    //console.log(arr);
    return dt;

}
const n=document.querySelectorAll(".choice");
var arr=[[]];
var arr2;
var idx;
var letter="";
var pick;
var type_problem=1;
var cond=0;
var att=1;
var wa=0;
var ac=0;
var skipped=0;
function checkans(e){
    console.log("run\n");
    cond=1;
    if(e.target.dataset.index==pick){
        e.target.classList.toggle("truth");
        ac++;
    }else{
        e.target.classList.toggle("wrong");
        n[pick].classList.toggle("truth");
        wa++;
    };
    document.getElementById("ac").textContent=ac;
    document.getElementById("wa").textContent=wa;
    n.forEach(elem=>{elem.classList.add("no-touch")});
    document.querySelector(".reroll-decor").textContent="Lanjut";

}
 //
//
const modern2classic_group=["NULL","IA", "IIA", "IIIB", "IVB", "VB", "VIB", "VIIB", "VIIIB(8)", "VIIIB(9)", "VIIIB(10)", "IB", "IIB", "IIIA", "IVA,", "VA", "VIA", "VIIA", "VIIIA"];
function update_rng(){
idx=Math.floor(Math.random()*118);
    
    letter=arr[idx][0];
    //alert(idx+1);
    const m=document.querySelectorAll(".a2");
    m.forEach(element => {
        element.textContent="atom "+letter+" memiliki ... elektron";
    });
    
    pick=Math.floor(Math.random()*n.length);

    for (let index = 0; index < n.length; index++) {
        const element = n[index];
        element.dataset.index=index;
        
        element.addEventListener("click",checkans);
        if(index==pick)
        element.textContent=idx+1;
        
        
    else {element.textContent=Math.floor(Math.random()*118)+1;
        if(element.textContent==idx+1)element.textContent=(element.textContent)%118+1;
    }
    //if(type_problem==1)element.textContent=modern2classic_group[element.textContent];
    //console.log(n.length);
    console.log("ready\n");
    }

}
function update_rng2(){
idx=Math.floor(Math.random()*118);
    
    letter=arr[idx][0];
    ans=arr[idx][1];
    //alert(idx+1);
    const m=document.querySelectorAll(".a2");
    m.forEach(element => {
        element.textContent="atom "+letter+" memiliki golongan ...";
    });
    
    pick=Math.floor(Math.random()*n.length);

    for (let index = 0; index < n.length; index++) {
        const element = n[index];
        element.dataset.index=index;
        
        element.addEventListener("click",checkans);
        if(index==pick)
        element.textContent=ans;
        
        
    else {element.textContent=Math.floor(Math.random()*18)+1;
        if(element.textContent==ans)element.textContent=(element.textContent)%18+1;
    }
    element.textContent=modern2classic_group[element.textContent];
    //console.log(n.length);
    console.log("ready\n");
    }

}
function update_rng3(){
idx=Math.floor(Math.random()*18);
var idx2;
if(idx==2){idx2=Math.floor(Math.random()*2)+2}else{
idx2=Math.floor(Math.random()*arr2[idx].length);}

var save=7-idx2;

    
    
    ans=arr2[idx][idx2];
    //alert(idx+1);
    const m=document.querySelectorAll(".a2");
    m.forEach(element => {
        element.textContent="atom gol. "+modern2classic_group[idx+1]+" dan periode "+save+" adalah atom ...";
    });
    
    pick=Math.floor(Math.random()*n.length);

    for (let index = 0; index < n.length; index++) {
        const element = n[index];
        element.dataset.index=index;
        
        element.addEventListener("click",checkans);
        if(index==pick)
        element.textContent=ans;
        
        
    else {var sv2=Math.floor(Math.random()*118);
        element.textContent=arr[sv2][0];
        if(element.textContent==ans)element.textContent=arr[(sv2+1)%118][0];
    }
    
    //console.log(n.length);
    console.log("ready\n");
    }

}
function update_rng4(){
idx=Math.floor(Math.random()*20);
var idx2;
var save;
if(idx<18){
if(idx==2){idx2=Math.floor(Math.random()*2)+2}else{
idx2=Math.floor(Math.random()*arr2[idx].length);}
save=7-idx2;}
else{
    save=idx-12;idx2=Math.floor(Math.random()*arr2[idx].length);
}

    
    letter=arr2[idx][idx2];
    //alert(idx+1);
    const m=document.querySelectorAll(".a2");
    m.forEach(element => {
        element.textContent="atom "+letter+" memiliki periode ...";
    });
    
    pick=Math.floor(Math.random()*n.length);

    for (let index = 0; index < n.length; index++) {
        const element = n[index];
        element.dataset.index=index;
        
        element.addEventListener("click",checkans);
        if(index==pick)
        element.textContent=save;
        
        
    else {element.textContent=Math.floor(Math.random()*7)+1;
        if(element.textContent==save)element.textContent=(element.textContent)%7+1;
    }
    //if(type_problem==1)element.textContent=modern2classic_group[element.textContent];
    //console.log(n.length);
    console.log("ready\n");
    }

}
function reset_ch(){
    n.forEach(elem=>{elem.classList.remove("no-touch");elem.classList.remove("truth");elem.classList.remove("wrong")});
    if(cond==0){skipped++;}
    cond=0;
    att++;
    document.getElementById("skip").textContent=skipped;
    document.getElementById("att").textContent=att;
    document.querySelector(".reroll-decor").textContent="Reroll";
}
function renew(){
    switch(Math.floor(Math.random()*3)){
        case 0:
            update_rng2();
            break;
        case 1:
            update_rng3();
            break;
        case 2: update_rng4();
        break;
    }
}
//function renew(){update_rng4();}
console.log("run\n");
name().then(dt=>{
    arr=Array(Object.entries(dt[1]))[0];
    arr2=dt[0];
    //arr=dt;
    console.log(arr2);
    renew();

});