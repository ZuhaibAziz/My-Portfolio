
const APIKEY = "e2c5d8cf721c8b88265abf9976217f38";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let SEARCH = document.getElementById("searchbox");
const buttonsearch = document.getElementById("searchbtn");

async function updateweather(cityname) {
    const RESULT = await fetch(APIURL + cityname + `&appid=${APIKEY}`);
    var DATA = await RESULT.json();

    console.log(DATA);

    let CITY = document.getElementById("cityname").textContent = DATA.name;
    let COUNTRY = document.getElementById("countryname").textContent = DATA.sys.country;
    let TEMP = document.getElementById("temp").textContent = Math.round(DATA.main.temp) + "°C";
    let WIND = document.getElementById("wind").textContent = DATA.wind.speed + "km/h";
    let HUMIDITY = document.getElementById("humidity").textContent = DATA.main.humidity + "%";
    // let WEATHER = document.getElementById("weather").textContent = DATA.weather.Array.main;
}

// buttonsearch.addEventListener("click", () => {
//     updateweather(SEARCH.value);
// });

function searchweather() {
    updateweather(SEARCH.value)

    document.getElementById("searchbox").value = "";
}




const QRAPI = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

function createQr() {
    let textval = document.getElementById("text_Url").value;
    let feildBox = document.getElementById("feildbox");
    let QRimg = document.getElementById("qrimg");
    let uRltext = document.getElementById("urltext");
    // let Frm = document.getElementById("frm");
    let eRRor = document.getElementById("error");


    if (textval.length == 0) {

        feildBox.classList.add("errorshake")
        eRRor.innerText = " Fill the feild ";
        eRRor.classList.add("pt-2");
    } else {

        let result = QRAPI + textval;
        let QR = QRimg.src = result;

        console.log(result)

        document.getElementById("text_Url").value = "";
        uRltext.textContent = textval;

        let downLoadbtn = document.getElementById("downloadbtn")
        downLoadbtn.classList.add("dbtn1");
        downLoadbtn.classList.remove("dbtn");
        downLoadbtn.href = QR;


        feildBox.classList.remove("errorshake")
        eRRor.textContent = "";
        eRRor.classList.remove("pt-2");

    }
}


