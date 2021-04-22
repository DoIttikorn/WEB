let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.onclick = (e) => {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let circle = document.createElement('span');
    circle.style.left = x + 'px'
    circle.style.top = y + 'px'
    btn.appendChild(circle)


    setTimeout(() =>{
        circle.remove()
    },1000)
  };
});
