const buttonCommander = document.getElementById("Commander")
const buttonPilot = document.getElementById("Pilot")
const buttonMS1 = document.getElementById("MissionSpecialist1")
const buttonMS2 = document.getElementById("MissionSpecialist2")
const buttonER = document.getElementById("Endurancereserve")
const Commanderdiv = document.getElementById("CommanderInfo")
const Pilotdiv = document.getElementById("PilotInfo")
const MS1div = document.getElementById("MissionSpecialist1Info")
const MS2div = document.getElementById("MissionSpecialist2Info")
const ERrdiv = document.getElementById("EnduranceReserveInfo")
const Choosediv = document.getElementById("meeter")
const nextPage = document.querySelector(".arrow")

buttonCommander.addEventListener('change', () => {
    if (Commanderdiv.hidden === true) {
        Commanderdiv.hidden = false
        Pilotdiv.hidden = true
        MS1div.hidden = true
        MS2div.hidden = true
        ERrdiv.hidden = true
        Choosediv.hidden = true
    }
})

buttonPilot.addEventListener('change', () => {
    if (Pilotdiv.hidden === true) {
        Pilotdiv.hidden = false
        Commanderdiv.hidden = true
        MS1div.hidden = true
        MS2div.hidden = true
        ERrdiv.hidden = true
        Choosediv.hidden = true
    }
})

buttonMS1.addEventListener('change', () => {
    if (MS1div.hidden === true) {
        MS1div.hidden = false
        Pilotdiv.hidden = true
        Commanderdiv.hidden = true
        MS2div.hidden = true
        ERrdiv.hidden = true
        Choosediv.hidden = true
    }
})

buttonMS2.addEventListener('change', () => {
    if (MS2div.hidden === true) {
        MS2div.hidden = false
        Commanderdiv.hidden = true
        MS1div.hidden = true
        Pilotdiv.hidden = true
        ERrdiv.hidden = true
        Choosediv.hidden = true
    }
})

buttonER.addEventListener('change', () => {
    if (ERrdiv.hidden === true) {
        ERrdiv.hidden = false
        Pilotdiv.hidden = true
        Commanderdiv.hidden = true
        MS2div.hidden = true
        MS1div.hidden = true
        Choosediv.hidden = true
    }
})

nextPage.addEventListener("click", () => {
    window.location.href = "vehicle.html"
})

if (sessionStorage.getItem("Explore") !== null) {
    nextPage.hidden = false
} else {
    nextPage.hidden = true
}