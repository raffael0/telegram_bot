const request = require("request");
const puppeteer = require("puppeteer");
const cheerio  = require("cheerio");
const fs = require('fs');
const loginData = JSON.parse(fs.readFileSync("accesData.json","utf8"));
function parseUntis(school,username, password,schoolclass){
    let JSESSIONID;
    request.post('https://neilo.webuntis.com/WebUntis/j_spring_security_check',{form:{
            j_password: password,
            j_username: username,
            school: school,
            token: 0
        }},function (err,httpResponse,body) {
        console.log(err);
        JSESSIONID = httpResponse.headers["set-cookie"][0];

        JSESSIONID =  JSESSIONID.toString().slice(JSESSIONID.indexOf("=")+1,JSESSIONID.indexOf(";"));
        console.log(JSESSIONID);
        getHTML(JSESSIONID,function (content) {
            console.log(content);
        });

    });

}
async function getHTML(JSESSIONID,callback){
    await console.log(typeof JSESSIONID);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setCookie({name:"JSESSIONID",value:JSESSIONID,url:"https://neilo.webuntis.com"});
    await page.goto("https://neilo.webuntis.com/WebUntis/api/public/printpreview/timetable?type=1&id=216&date=20200201&formatId=1");
    await page.screenshot({path:"img.png"});
    await callback(await page.content());
    await browser.close();
}
parseUntis(loginData.school,loginData.username,loginData.password);