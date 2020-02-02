const ical = require('ical');
/*
ical.fromURL('https://mail.spengergasse.at/owa/calendar/448f563937104f4a92e35180b0e96f28@spengergasse.at/664d1d67bffd4acfb14b77c35fa9d01c1511043766631358269/calendar.ics',{},function (err,data) {
    for(let k in data){
        if(data.hasOwnProperty(k)){
            var ev = data[k];
            if(data[k].type == "VEVENT"){
                console.log(`${ev.summary}`);
            }
        }
    }
});

 */
var data = ical.parseFile("./calendar.ics");
for(let k in data){
    if(data.hasOwnProperty(k)){
        var ev = data[k];
        if(data[k].type == "VEVENT"){
            console.log(`${ev.summary}`);
        }
    }
}