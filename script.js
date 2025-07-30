const mybody = document.querySelector("body");
console.log(mybody);
const mybtn = document.querySelectorAll('.butten')
console.log(mybtn);
mybtn.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function (e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id ==='blue'){
            mybody.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='red'){
            mybody.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='green'){
            mybody.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='orange'){
            mybody.style.backgroundColor = e.target.id;
        }
        
        
    })

    
    
})