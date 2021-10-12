let estado=localStorage.getItem('dark')
let btn=document.querySelector('button')
if(estado!=null){
    btn.classList.toggle('active')
    document.body.classList.toggle('dark')
}
btn.addEventListener('click',function(){
    btn.classList.toggle('active')
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark'))
    {
        localStorage.setItem('dark',true)
    }else{
        localStorage.removeItem('dark')
        

    }
})


let animales=document.querySelectorAll('#containerAnimals li')
animales.forEach(item=>{
    item.onclick=function(){
        document.querySelector("."+item.textContent).scrollIntoView(true)
    }
})