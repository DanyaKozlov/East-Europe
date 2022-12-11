const cards = document.getElementsByClassName('CityCard-img')

const recalcCardsGeometry = ((elements) => {
    console.log('resized')
    for (const item of elements) {
        const img = item.getElementsByClassName('CityCard-img_front')[0]
        const backCard = item.getElementsByClassName('CityCard-img_back')[0]
        const calcGeometry = img.getBoundingClientRect()
        const calcHeight = calcGeometry.height
        const calcWidth = calcGeometry.width
        item.style.width = `${calcWidth}px`
        item.style.height = `${calcHeight}px`
        backCard.style.width = `${calcWidth}px`
        backCard.style.height = `${calcHeight}px`
    }
}).bind(null, cards)

window.onload = recalcCardsGeometry
window.onresize = recalcCardsGeometry