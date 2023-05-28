let btn=document.querySelector('#getData')
console.log(btn);
btn.addEventListener('click',()=>{
    let xhr=new XMLHttpRequest()
    xhr.open('get','test.tex',true);

    xhr.onload=function(){
        if(this.status===200){
            let output=document.querySelector('#output')
            output.innerHTML=`<p>${this.responseText}</p>`
        }
    }
    xhr.send()

    console.log(xhr);
});