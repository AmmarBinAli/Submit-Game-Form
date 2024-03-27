let gameValue =  document.getElementById("Game-Title");
let yesOne = document.getElementById("yes-1");
let noOne = document.getElementById("no-1");
let yesTwo = document.getElementById("yes-2");
let noTwo = document.getElementById("no-2");
let continues = document.getElementById("cont-1");
let teams = document.getElementById("teams");
let gameex = document.getElementById("gameex");
let yesThree = document.getElementById("yes-3");
let noThree = document.getElementById("no-3");
let check = document.getElementById("check");
let email = document.getElementById("email");
let phnum = document.getElementById("phnum");
let address = document.getElementById("address");
let about = document.getElementById("about");
// var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };


// let details = {
//     title : gameValue.value,
//     about : about.value,
    
// }
// const jsonObject = JSON.stringify(details);
// localStorage.setItem('details' , jsonObject);
// const str = localStorage.getItem('person');
// const parsedObject = JSON.parse(str);

function Next1(){
     if (gameValue.value === "") {
    alert("Please fill missing fields");
}
else{
    window.location.href = "./teams.html";
}
console.log(parsedObject);
}
function Next2(){
    if (teams.value === "" || gameex.value === "" ) {
   alert("Please fill missing fields");
}
else{
   window.location.href = "./details.html";
}
}
function sendEmail(){
     if (email.value === "" || phnum.value === "" || address === ""){
        alert("Please fill missing fields");
     }
     else{
        alert("Your Game Submitted Successfully");
     }
};

yesOne.addEventListener("click" , function(){
    if(yesOne.value === "Yes"){
        console.log(true)
    }
    else{
        console.log(false)
    }
});
noOne.addEventListener("click" , function(){
    if(noOne.value === "Yes"){
        console.log(true)
    }
    else{
        console.log(false)
    }
});
yesTwo.addEventListener("click" , function(){
    if(yesTwo.value === "Yes"){
        console.log(true)
    }
    else{
        console.log(false)
    }
});
noTwo.addEventListener("click" , function(){
    if(noTwo.value === "Yes"){
        console.log(true)
    }
    else{
        console.log(false)
    }
});
// function sendEmail() {
//     Email.send({
//       Host: "smtp.gmail.com",
//       Username: "abdulfatir3489@gmail.com",
//       Password: "1122334455AF@",
//       To: 'ammarali02062003@tgmail.com',
//       From: email.value,
//       Subject: "New Game Enquiry",
//       Body: "Email" + email.value + "Phone Num"
//         + phnum.value + "Address" + address.value
//   }).then(
//         message => alert(message)
//       );
//   }



