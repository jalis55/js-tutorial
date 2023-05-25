let username=document.querySelector('#username')
let email=document.querySelector('#email')
let password1=document.querySelector('#password')
let password2=document.querySelector('#confirm-password')

let form=document.querySelector('#signup')

let validation=(node)=>{
    if (node.value() ==''){
        return false
    }
}

form.addEventListener('click',(e)=>{
    e.preventDefault()
    let status=true;

    if (!validation(username)){
        console.log(username.nextElementSibling);
    }
})