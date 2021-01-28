function change_colors() 
{  
    let colors = ["red","blue","green","orange","yellow"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.background = randomColor;

    // setTimeout(change_colors,1000);
}