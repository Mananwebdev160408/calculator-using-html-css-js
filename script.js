let screen=''
document.getElementsByTagName('input')[0].value=screen
let arr=Array.from(document.querySelectorAll('.btn'))
arr.forEach((value)=>{
    value.addEventListener('click',()=>{
        screen=screen+value.innerHTML
        document.getElementsByTagName('input')[0].value=screen
    })
})
let arr1=Array.from(document.querySelectorAll('.btns'))
arr1.forEach((value)=>{
    value.addEventListener('click',()=>{
        screen=screen+value.innerHTML
        document.getElementsByTagName('input')[0].value=screen
    })
})
let plbt=document.getElementsByClassName('plusbtn')[0]
plbt.addEventListener('click',()=>{
    screen=screen+plbt.innerHTML
        document.getElementsByTagName('input')[0].value=screen
})
let zerbtn=document.getElementsByClassName('line4')[0]
zerbtn.addEventListener('click',()=>{
    screen=screen+zerbtn.innerHTML
        document.getElementsByTagName('input')[0].value=screen
})
let lasset=Array.from(document.querySelectorAll('.lastset'))
lasset.forEach((val)=>{
    val.addEventListener('click',()=>{
        let a=val.innerHTML
        if(a=='Clear'){
            
            document.getElementsByTagName('input')[0].value=''
        }
        else{
            let answer=eval(screen)
            document.getElementsByTagName('input')[0].value=answer
        }
    })
})