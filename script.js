function h12h24(value, hour) {
  if(value === "12") {
    return hour % 12 || 12;
  }
  return hour;
}

function getRadioChecked(value) {
   for(let i=0; i<value.length; i++) {
     if (value[i].checked) {
         return value[i].value;
     }
   }
   return "";
}

function getWeekNumber(date) {
   const dt = new Date(date); // Copiamos la fecha para no modificar la original
   dt.setHours(0, 0, 0, 0); // Establecemos el primer día de la semana como lunes (0)
   dt.setDate(dt.getDate() + 4 - (dt.getDay() || 7));
   return Math.ceil(((dt - new Date(dt.getFullYear(), 0, 1)) / 86400000 + 1) / 7);
}

let getValidateDigit = (value) => {
   return (value < 10) ? "0"+value : value;
}

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getData(dateNow) {
   let dateAll = `${dateNow.getFullYear()} - ${getValidateDigit(dateNow.getMonth() + 1)} - ${getValidateDigit(dateNow.getDate())}`;
   dateAll +=  "&nbsp;&nbsp;" + monthNames[dateNow.getMonth()] + "&nbsp;&nbsp; w:" + getWeekNumber(new Date(dateAll.replace(/\s+/g, "")));

   let radioButton = getRadioChecked(document.getElementsByName("h12-24"));

   document.getElementById("day").textContent = dayNames[dateNow.getDay()];
   document.getElementById("hours").textContent = getValidateDigit(h12h24(radioButton, dateNow.getHours())) + ":" + getValidateDigit(dateNow.getMinutes());
   document.getElementById("seconds").textContent = getValidateDigit(dateNow.getSeconds());
   document.getElementById("date").innerHTML = dateAll;
}

function mueveReloj() {
   getData(new Date());
   setTimeout("mueveReloj()", 1000);
}