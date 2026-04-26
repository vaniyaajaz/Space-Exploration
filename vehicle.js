const buttonOrion = document.getElementById("Orion")
const buttonSLS = document.getElementById("SLS")
const buttonLG = document.getElementById("LunarGetaway")
const buttonSX = document.getElementById("SpaceX")
const Oriondiv = document.getElementById("OrionInfo")
const SLSdiv = document.getElementById("SLSInfo")
const LGdiv = document.getElementById("LunarGetawayInfo")
const SXdiv = document.getElementById("SpaceXInfo")
const Choosediv = document.getElementById("shower")

sessionStorage.clear()

buttonOrion.addEventListener('change', () => {
    if (Oriondiv.hidden === true) {
        Oriondiv.hidden = false
        SLSdiv.hidden = true
        LGdiv.hidden = true
        SXdiv.hidden = true
        Choosediv.hidden = true
    }
})

buttonSLS.addEventListener('change', () => {
    if (SLSdiv.hidden === true) {
        SLSdiv.hidden = false
        Oriondiv.hidden = true
        LGdiv.hidden = true
        SXdiv.hidden = true
        Choosediv.hidden = true
    }
})

buttonLG.addEventListener('change', () => {
    if (LGdiv.hidden === true) {
        LGdiv.hidden = false
        SLSdiv.hidden = true
        Oriondiv.hidden = true
        SXdiv.hidden = true
        Choosediv.hidden = true
    }
})

buttonSX.addEventListener('change', () => {
    if (SXdiv.hidden === true) {
        SXdiv.hidden = false
        SLSdiv.hidden = true
        LGdiv.hidden = true
        Oriondiv.hidden = true
        Choosediv.hidden = true
    }
})