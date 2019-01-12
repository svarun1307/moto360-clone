var dx = new Date();
var currentSeconds = dx.getSeconds();
var currentMinutes = dx.getMinutes();
var currentHours = dx.getHours();
var oldMinutes = 0;
var minutesRotaterArray = [0,30,60,90,120,150,180,210,240,270,300,330];
for(var b = 0; b < minutesRotaterArray.length ; b++)
{
    var tmpX = 6 * currentMinutes;
    minutesRotaterArray[b] = minutesRotaterArray[b] - tmpX;
}
//var hoursRotaterArray = [0, 330, 300, 270, 240, 210, 180, 150, 120, 90, 60, 30];
var hoursRotaterArray = [0,30,60,90,120,150,180,210,240,270,300,330];
for(var b = 0; b < hoursRotaterArray.length ; b++)
{
    var tmpX = currentHours;
    console.log(tmpX);
    if(tmpX>12)
        tmpX = tmpX - 12;
    else if(tmpX==12)
        tmpX = 0;
    tmpX = Math.abs(tmpX);
    var hrrtr = tmpX * 30;
    //Minutes Adjustment
    hrrtr = hrrtr + (currentMinutes * 0.5);
    hoursRotaterArray[b] = hoursRotaterArray[b] + hrrtr;
}


var inMinutesSeconder = 0;
function manageWatch()
{
    inMinutesSeconder++;
    var dx = new Date();
    var nowSeconds = dx.getSeconds();
    var nowMinutes = dx.getMinutes();
    var nowHours = dx.getHours();

    currentSeconds = currentSeconds + 1;
    var secondsRotater = 6 * currentSeconds;
    var secondsPointer = document.querySelector('.secondsPointer');
    secondsPointer.style.webkitTransform = "rotate("+secondsRotater+"deg) translateX(-50%)";
    secondsPointer.style.MozTransform = "rotate("+secondsRotater+"deg) translateX(-50%)";
    secondsPointer.style.msTransform = "rotate("+secondsRotater+"deg) translateX(-50%)";
    secondsPointer.style.OTransform = "rotate("+secondsRotater+"deg) translateX(-50%)";
    secondsPointer.style.transform = "rotate("+secondsRotater+"deg) translateX(-50%)";
    
    if(oldMinutes != nowMinutes)
    {
        console.log(inMinutesSeconder);
        oldMinutes = nowMinutes;
        if(1==1 || inMinutesSeconder==60 || inMinutesSeconder==1) //prob
        {
            for(var b = 0; b < minutesRotaterArray.length ; b++)
            {
                var tmpX = 6;
                minutesRotaterArray[b] = minutesRotaterArray[b] - tmpX;
                var minutesPointer = document.querySelectorAll('.minutes');
                    minutesPointer[b].style.webkitTransform = "rotate("+minutesRotaterArray[b]+"deg) translateX(-50%)";
                    minutesPointer[b].style.MozTransform = "rotate("+minutesRotaterArray[b]+"deg) translateX(-50%)";
                    minutesPointer[b].style.msTransform = "rotate("+minutesRotaterArray[b]+"deg) translateX(-50%)";
                    minutesPointer[b].style.OTransform = "rotate("+minutesRotaterArray[b]+"deg) translateX(-50%)";
                    minutesPointer[b].style.transform = "rotate("+minutesRotaterArray[b]+"deg) translateX(-50%)";
                
            }
            for(var b = 0; b < hoursRotaterArray.length ; b++)
            {
                /*var tmpY = currentHours;
                if(tmpY>12)
                    tmpY = tmpY - 12;
                else if(tmpY==12)
                    tmpY = 0;
                var hrrtr = tmpY * 0.25;*/
                //hoursRotaterArray[b] = hoursRotaterArray[b] + hrrtr;
                hoursRotaterArray[b] = hoursRotaterArray[b] + 0.5;
                var hoursPointer = document.querySelectorAll('.hours');
                    hoursPointer[b].style.webkitTransform = "rotate("+hoursRotaterArray[b]+"deg) translateX(-50%)";
                    hoursPointer[b].style.MozTransform = "rotate("+hoursRotaterArray[b]+"deg) translateX(-50%)";
                    hoursPointer[b].style.msTransform = "rotate("+hoursRotaterArray[b]+"deg) translateX(-50%)";
                    hoursPointer[b].style.OTransform = "rotate("+hoursRotaterArray[b]+"deg) translateX(-50%)";
                    hoursPointer[b].style.transform = "rotate("+hoursRotaterArray[b]+"deg) translateX(-50%)";
                
            }
            inMinutesSeconder = 0;
        }

        document.querySelector('#mainBox > p').innerHTML = (nowHours.toString().length == 1 ? '0'+nowHours : nowHours) + '<br/>' +  (nowMinutes.toString().length == 1 ? '0'+ nowMinutes : nowMinutes) ;
    }
}

var tr = setInterval(function(){
    manageWatch();
},1000);
