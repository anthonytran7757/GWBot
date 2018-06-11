const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

let currDate = new Date();
let currhours = currDate.getHours();
let currMin = currDate.getMinutes();


client.on('message', function(message){
    //var channel = client.channels.find("id", "440751281728913421");
    if(message.content === "!startGWReminder"){
        let hourDiff = (currhours % 11) * 1000 * 60 * 60;
        let minDiff = (60 - currMin) * 60 * 1000;
        setTimeout(function(){
//            let num = 0;
            setInterval(function(){
//                num = num + 1;
                message.channel.send("@everyone Use Your Swords!");
            },(1000*60*60*12));

        }, (hourDiff + minDiff));
    }
});

client.login(settings.token);