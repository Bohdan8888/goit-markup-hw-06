document.getElementById("is-open-modal").addEventListener("click",function () {
    document.getElementById("modal-is-open").classList.add("is-open")
})

document.getElementById("close-modal-window").addEventListener("click",function () {
    document.getElementById("modal-is-open").classList.remove("is-open")
})

// Burger Menu - Open / Close

document.getElementById("is-open-burger").addEventListener("click",function () {
    document.getElementById("burger-is-open").classList.add("is-open")
})

document.getElementById("close-burger-menu").addEventListener("click",function () {
    document.getElementById("burger-is-open").classList.remove("is-open")
})