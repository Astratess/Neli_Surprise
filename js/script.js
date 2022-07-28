const neli = document.getElementById('neli')
const idea1 = document.getElementById('idea1')
const idea2 = document.getElementById('idea2')
const idea3 = document.getElementById('idea3')
const idea4 = document.getElementById('idea4')
const idea5 = document.getElementById('idea5')

neli.addEventListener('mouseenter',()=>{
    idea1.style.animation = "idea1 2s ease-in-out forwards"
    idea2.style.animation = "idea2 2s ease-in-out forwards"
    idea3.style.animation = "idea3 2s ease-in-out forwards"
    idea4.style.animation = "idea4 2s ease-in-out forwards"
    idea5.style.animation = "idea5 2s ease-in-out forwards"
})

neli.addEventListener('click',()=>{
    idea1.style.animation = "idea1-rev 2s ease-in-out forwards"
    idea2.style.animation = "idea2-rev 2s ease-in-out forwards"
    idea3.style.animation = "idea3-rev 2s ease-in-out forwards"
    idea4.style.animation = "idea4-rev 2s ease-in-out forwards"
    idea5.style.animation = "idea5-rev 2s ease-in-out forwards"
    })

idea1.addEventListener('click',()=>{
    idea1.lastChild.classList.toggle('active')
})
idea2.addEventListener('click',()=>{
    idea2.lastChild.classList.toggle('active')
})
idea3.addEventListener('click',()=>{
    idea3.lastChild.classList.toggle('active')
})
idea4.addEventListener('click',()=>{
    idea4.lastChild.classList.toggle('active')
})
idea5.addEventListener('click',()=>{
    idea5.lastChild.style.animation = "open-present 2s ease-in-out forwards"
    neli.style.zIndex = "-2"
})

idea1.addEventListener('mouseout',()=>{
    if(idea1.lastChild.classList.contains('active')){
        idea1.lastChild.classList.remove('active')
    }
})
idea2.addEventListener('mouseout',()=>{
    if(idea2.lastChild.classList.contains('active')){
        idea2.lastChild.classList.remove('active')
    }
})
idea3.addEventListener('mouseout',()=>{
    if(idea3.lastChild.classList.contains('active')){
        idea3.lastChild.classList.remove('active')
    }
})
idea4.addEventListener('mouseout',()=>{
    if(idea4.lastChild.classList.contains('active')){
        idea4.lastChild.classList.remove('active')
    }
})
idea5.addEventListener('mouseleave',()=>{
    idea5.lastChild.style.animation = "close-present 2s ease-in-out forwards"
    setTimeout(() => {
        neli.style.zIndex= "2";
    }, 2000);
    });
