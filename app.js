const sidebar = document.querySelector(".js")
const menubtn = document.querySelector(".menu")
let holat = false
const openClose = () => {
    if (holat === false) {
        sidebar.style.transform = "translateX(950px)"

        holat = true
    } else {
        sidebar.style.transform = "translateX(1500px)"

        holat = false
    }
}
const sideba = document.querySelector(".left1")
const leftbtn = document.querySelector(".left")
const scrol = document.querySelector(".content")
const div10 = document.querySelector(".div10")
const div13 = document.querySelector(".div13")
const div14 = document.querySelector(".div14")
const div15 = document.querySelector(".div15")
const div11 = document.querySelector(".div11")
const div16 = document.querySelector(".div16")
const div18 = document.querySelector(".div18")
const div20 = document.querySelector(".div20")
const div12 = document.querySelector(".div12")
const div17 = document.querySelector(".div17")
const div19 = document.querySelector(".div19")
const div21 = document.querySelector(".div21")
const border = document.querySelector(".bottom")
const remains = document.querySelector(".remains")
const none = document.querySelector(".none")
const vidyolar = document.querySelector(".container2")
const gri = document.querySelector(".gri")
let hol = false
const leftClose = () => {
    if (hol === false) {
        gri.style.transform = "translateX(90px)"
        sideba.style.width = "250px"
        sideba.style.overflowY = "scroll"
        scrol.style.width = "1093px"
        none.style.display = "flex"
        sideba.style.transform = "translateY(-78px)"
        remains.style.height = "185px"
        div10.style.width = "210px"
        div10.style.height = "41px"
        div10.style.display = "flex"
        div13.style.width = "210px"
        div13.style.height = "41px"
        div13.style.display = "flex"
        div14.style.width = "210px"
        div14.style.height = "41px"
        div14.style.display = "flex"
        div15.style.width = "210px"
        div15.style.height = "41px"
        div15.style.display = "flex"
        div11.style.width = "20%"
        div11.style.height = "40px"
        div16.style.width = "20%"
        div16.style.height = "40px"
        div18.style.width = "20%"
        div18.style.height = "40px"
        div20.style.width = "20%"
        div20.style.height = "40px"
        div12.style.width = "40%"
        div12.style.height = "40px"
        div12.style.fontSize = "17px"
        div17.style.width = "40%"
        div17.style.height = "40px"
        div17.style.fontSize = "17px"
        div19.style.width = "70%"
        div19.style.height = "40px"
        div19.style.fontSize = "17px"
        div21.style.width = "45%"
        div21.style.height = "40px"
        div21.style.fontSize = "17px"
        border.style.display = "flex"
        border.style.width = "210px"
        border.style.height = "20px"
        vidyolar.style.transform = "translateX(90px)"

        hol = true
    } else {
        vidyolar.style.transform = "translateX(-10px)"
        gri.style.transform = "translateX(-10px)"
        scrol.style.width = "1235px"
        sideba.style.width = "100px"
        sideba.style.overflowY = "none"

        remains.style.height = "300px"
        none.style.display = "none"
        div10.style.width = "90px"
        div10.style.height = "70px"
        div10.style.display = "block"
        div13.style.width = "90px"
        div13.style.height = "70px"
        div13.style.display = "block"
        div14.style.width = "90px"
        div14.style.height = "70px"
        div14.style.display = "block"
        div15.style.width = "90px"
        div15.style.height = "70px"
        div15.style.display = "block"
        div11.style.width = "100%"
        div11.style.height = "35px"
        div16.style.width = "100%"
        div16.style.height = "35px"
        div18.style.width = "100%"
        div18.style.height = "35px"
        div20.style.width = "100%"
        div20.style.height = "35px"

        div12.style.width = "100%"
        div12.style.height = "35px"
        div12.style.fontSize = "10px"
        div17.style.width = "100%"
        div17.style.height = "35px"
        div17.style.fontSize = "10px"
        div19.style.width = "100%"
        div19.style.height = "35px"
        div19.style.fontSize = "10px"
        div21.style.width = "100%"
        div21.style.height = "35px"
        div21.style.fontSize = "10px"



        border.style.display = "none"


        hol = false
    }
}