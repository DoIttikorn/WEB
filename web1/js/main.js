const inputs = document.querySelectorAll('.input');

function focusFunc() 
{  
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}
function focusoutDunc()
{
    let parent = this.parentNode.parentNode;
    parent.classList.remove('focus');
}
inputs.forEach(input =>{
    input.addEventListener('focus',focusFunc);
    input.addEventListener('focusout',focusoutDunc);
})
