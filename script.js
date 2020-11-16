function validaDigito(value){
   return (value < 10) ? "0"+value : value;
}

function h12h24(value, hour){
   if(value == "12"){
      if(hour >= 12){
         hour = hour - 12;
      }

      if(hour == 0){
         hour = 12;
      } 
   }

   if(value == "24"){
      hour = hour;
   }
   return hour;
}

function radioChecked(value){
   var h1224 = "";
   for (var i=0; i<value.length; i++) {
     if (value[i].checked == true) {
         h1224 = value[i].value;
         break;
     }
   }
   return h1224;
}

function day(value){
   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   return days[value];
}

function mueveReloj(){ 
   var dateNow = new Date();

   var rc = radioChecked(document.getElementsByName("h12-24"));

   document.getElementById("day").innerHTML = day(dateNow.getDay());
   var hora = dateNow.getHours();
   document.getElementById("hours").innerHTML = validaDigito(h12h24(rc, hora));;
   document.getElementById("minutes").innerHTML = validaDigito(dateNow.getMinutes());
   document.getElementById("seconds").innerHTML = validaDigito(dateNow.getSeconds());

   document.getElementById("years").innerHTML = dateNow.getFullYear();
   document.getElementById("months").innerHTML = validaDigito(dateNow.getMonth()+1);
   document.getElementById("days").innerHTML = validaDigito(dateNow.getDate());

   setTimeout("mueveReloj()", 1000);
}