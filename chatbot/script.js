function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.trim().toLowerCase();

    if(message === "") return;

    let chatbox = document.getElementById("chatbox");

    chatbox.innerHTML += "<div class='user'>You: " + message + "</div>";

    let reply = "";

    if(message === "hi" || message === "hello" || message === "hey"){
        reply = "Hello! How can I help you?";
    }
    else if(message === "how are you"){
        reply = "I am fine. Thank you!";
    }
    else if(message === "what is your name"){
        reply = "My name is AI Chatbot.";
    }
    else if(message === "help"){
        reply = "I can answer simple questions.";
    }    
    else if(message === "bye"){
        reply = "Goodbye! Have a great day!";
    }
    else{
        reply = "Sorry, I don't understand that.";
    }

    chatbox.innerHTML += "<div class='bot'>Bot: " + reply + "</div>";

    input.value = "";
    chatbox.scrollTop = chatbox.scrollHeight;
}