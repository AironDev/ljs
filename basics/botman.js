/* CHAT BOT*/


// Global Variables
let usermsg = document.getElementById('msg').value;

// Bot pleasamtaries
function botGreet(){
    const greet = ['Hello, Please can I get to know you?', 'Hello, Who am I unto','My name is Javis, you?', 'Welcome, would you mind telling me your name?'];
    let rand = Math.floor(Math.random(greet)* greet.length);
    
    botWrite(greet[rand]);
    setTimeout(function(){
       let name = prompt('Enter Name');
        userWrite("My name is "+ name);
        botWrite("I\'m pleased to meet you  " + name +";  I can help you with the following?");
        let listitems = "<li>Jokes</li><li>Qoutes</li><li>Motivation</li><li>Headliness</li><li>Job Search</li><li>Bible</li>";
        let list =  "<ul class='skills'>" + listitems + "</ul>";
        document.getElementById('chatarea').innerHTML += list;
    }, 3000);

}
// run bot pleasantaries on load
botGreet();

// This funcions writes messages that is from the bot
function botWrite(msg){
    let node  = document.createElement("p");
    let textnode = document.createTextNode(msg);
    node.appendChild(textnode);
    let chatarea = document.getElementById('chatarea').appendChild(node);
    chatarea.setAttribute("class", "botmsg");
    chatarea;
}

// This funcions writes messages that is from the user
function userWrite(msg){
    let node  = document.createElement("p");
    let textnode = document.createTextNode(msg);
    node.appendChild(textnode);
    let chatarea = document.getElementById('chatarea').appendChild(node);
    chatarea.setAttribute("class", "mymsg");
    chatarea;
}

// Receives input sent from the user, then calls the userWrite and bot reply function to display message
function userReply(){
    let usermsg = document.getElementById('msg').value;
    userWrite(usermsg);
    setTimeout(function(){
        botReply();
    }, 3000)  
}


function botReply(){
    let botmsg = botMsg(usermsg);
    botWrite(botmsg);
}

// Handles the logic of messages from bot based on user input
function botMsg(){
    let output = "";
    let qnas = {
        "how are you doing far whatsup xup" : ['am good', 'am doing well', 'am fine', 'doing great'],
        "what your name who are you" : ['My name is Javis', 'Call me Javis', 'Javis is my name'],
        "where are you from" : ['Am from Nigeria', 'My country is Nigeria', 'Am a Nigerian']
       };

       Object.keys(qnas).every(que=>{
           if(que == usermsg){
                let rand = Math.floor(Math.random(qnas[que]) * qnas[que].length);
                output = (qnas[que][rand]); 
            }else{
                output =  "what did you say"; 
            }      
       }); 
        return output;  
}