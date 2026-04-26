const buttonMoon = document.getElementById("Moon")
const buttonMercury = document.getElementById("Mercury")
const buttonVenus = document.getElementById("Venus")
const buttonMars = document.getElementById("Mars")
const buttonJupiter = document.getElementById("Jupiter")
const buttonSaturn = document.getElementById("Saturn")
const buttonUranus = document.getElementById("Uranus")
const buttonNeptune = document.getElementById("Neptune")
const Moondiv = document.getElementById("MoonInfo")
const Mercurydiv = document.getElementById("MercuryInfo")
const Venusdiv = document.getElementById("VenusInfo")
const Marsdiv = document.getElementById("MarsInfo")
const Jupiterdiv = document.getElementById("JupiterInfo")
const Saturndiv = document.getElementById("SaturnInfo")
const Uranusdiv = document.getElementById("UranusInfo")
const Neptunediv = document.getElementById("NeptuneInfo")
const Choosediv = document.getElementById("chooser")
const nextPage = document.querySelector(".arrow")

if (sessionStorage.getItem("Explore") !== null) {
    nextPage.hidden = false
} else {
    nextPage.hidden = true
}

buttonMoon.addEventListener('change', () => {
    if (Moondiv.hidden === true) {
        Moondiv.hidden = false
        Mercurydiv.hidden = true
        Venusdiv.hidden = true
        Marsdiv.hidden = true
        Jupiterdiv.hidden = true
        Saturndiv.hidden = true
        Uranusdiv.hidden = true
        Neptunediv.hidden = true
        Choosediv.hidden = true
    }
})

buttonMercury.addEventListener('change', () => {
    if (Mercurydiv.hidden === true) {
        Mercurydiv.hidden = false
        Moondiv.hidden = true
        Venusdiv.hidden = true
        Marsdiv.hidden = true
        Jupiterdiv.hidden = true
        Saturndiv.hidden = true
        Uranusdiv.hidden = true
        Neptunediv.hidden = true
        Choosediv.hidden = true
    }
})

buttonVenus.addEventListener('change', () => {
    if (Venusdiv.hidden === true) {
        Venusdiv.hidden = false
        Mercurydiv.hidden = true
        Moondiv.hidden = true
        Marsdiv.hidden = true
        Jupiterdiv.hidden = true
        Saturndiv.hidden = true
        Uranusdiv.hidden = true
        Neptunediv.hidden = true
        Choosediv.hidden = true
    }
})

buttonMars.addEventListener('change', () => {
    if (Marsdiv.hidden === true) {
        Marsdiv.hidden = false
        Mercurydiv.hidden = true
        Venusdiv.hidden = true
        Moondiv.hidden = true
        Jupiterdiv.hidden = true
        Saturndiv.hidden = true
        Uranusdiv.hidden = true
        Neptunediv.hidden = true
        Choosediv.hidden = true
    }
})

buttonJupiter.addEventListener('change', () => {
    if (Jupiterdiv.hidden === true) {
        Jupiterdiv.hidden = false
        Mercurydiv.hidden = true
        Venusdiv.hidden = true
        Marsdiv.hidden = true
        Moondiv.hidden = true
        Saturndiv.hidden = true
        Uranusdiv.hidden = true
        Neptunediv.hidden = true
        Choosediv.hidden = true
    }
})

buttonSaturn.addEventListener('change', () => {
    if (Saturndiv.hidden === true) {
        Saturndiv.hidden = false
        Mercurydiv.hidden = true
        Venusdiv.hidden = true
        Marsdiv.hidden = true
        Jupiterdiv.hidden = true
        Moondiv.hidden = true
        Uranusdiv.hidden = true
        Neptunediv.hidden = true
        Choosediv.hidden = true
    }
})

buttonUranus.addEventListener('change', () => {
    if (Uranusdiv.hidden === true) {
        Uranusdiv.hidden = false
        Mercurydiv.hidden = true
        Venusdiv.hidden = true
        Marsdiv.hidden = true
        Jupiterdiv.hidden = true
        Saturndiv.hidden = true
        Moondiv.hidden = true
        Neptunediv.hidden = true
        Choosediv.hidden = true
    }
})


buttonNeptune.addEventListener('change', () => {
    if (Neptunediv.hidden === true) {
        Neptunediv.hidden = false
        Mercurydiv.hidden = true
        Venusdiv.hidden = true
        Marsdiv.hidden = true
        Jupiterdiv.hidden = true
        Saturndiv.hidden = true
        Uranusdiv.hidden = true
        Moondiv.hidden = true
        Choosediv.hidden = true
    }
})

nextPage.addEventListener("click", () => {
    window.location.href = "crew.html"
})