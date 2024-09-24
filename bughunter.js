var elemC = document.querySelector("#warmup")
var fixed = document.querySelector("#image")
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})



var elemCm = document.querySelector("#dailyex")
var fixedm = document.querySelector("#image1")
elemCm.addEventListener("mouseenter", function () {
    fixedm.style.display = "block"
})
elemCm.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".daily")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var imagem = e.getAttribute("data-image")
        fixedm.style.backgroundImage = `url(${imagem})`
    })
})
