function rain(){
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    e.classList.add('drop');
    cloud.appendChild(e);

    let left = Math.floor(Math.random() * 300);
    e.innerText = 'A';
    e.style.left = left + 'px';

    setTimeout(function(){
        cloud.removeChild(e)
    },2000)
}

setInterval(function(){
    rain()
}, 20);