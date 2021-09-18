function setEventShowIconDownload() {
    let cardList = document.querySelectorAll('.card-content')
    cardList.forEach(card => {
        card.addEventListener('mouseover', (event) => {
            let icon = getIcon(event.target)
            let li = icon.querySelector('li')
            li.setAttribute('style', 'transform: translateY(0px);opacity: 1;')
        })
        card.addEventListener('mouseout', (event) => {
            let icon = getIcon(event.target)
            let li = icon.querySelector('li')
            li.setAttribute('style', '')
        })
    })
}

function getIcon(target) {
    let icon = target.querySelector('.icon')
    if (icon === null) {
        icon = getIcon(target.parentNode)
    }
    return icon
}
//ẩn title
function hideTitle() {
    document.querySelector('.content_title').setAttribute('style', 'display:none')
}

document.addEventListener("DOMContentLoaded", () => {
    setEventShowIconDownload()
    hideTitle()
})