const btn = document.querySelector('.btn')

btn.addEventListener('click',function (e){
    const x = e.clientX
    const y = e.clientY

    const btnX = btn.getBoundingClientRect().left
    const btnY = btn.getBoundingClientRect().top

    const reqX = x - btnX
    const reqY = y - btnY


    const span = document.createElement('span')
    span.classList.add('circle')
    span.style.top = reqY + 'px'
    span.style.left = reqX + 'px'
    this.appendChild(span)

    setTimeout(()=> span.remove(),500)
})