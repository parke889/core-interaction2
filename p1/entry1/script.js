const cursor = document.getElementsByClassName('cursor')[0];

document.onmousemove = (ev) => {
    cursor.style.top = ev.clientY+"px";
    cursor.style.left = ev.clientX+"px";  
}

document.querySelectorAll('.image').forEach(item => {
    item.addEventListener('mouseover', event => {
        cursor.classList.add("active")
    })
    item.addEventListener('mouseleave', event => {
        cursor.classList.remove("active")
    })
})


$(window).on('scroll',function(){
    $(".container-2").css('bottom',$(window).scrollTop()*-1);
});







