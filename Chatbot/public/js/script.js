var sendBtn = document.getElementById('sendBtn');

var textbox = document.getElementById('textbox');

var chatContainer = document.getElementById('chat-container');

var user = {message:""};

var arrayOfPossibleMessage = [
    {message:"hi", response:"hello"},
    {message:"how are you?", response:"I'm good.</br> <br>Go ahead and write the number of any query. 😃✨ <br> 1.&emsp;Student's Section Enquiry.</br>2.&emsp;Department Section Enquiry. </br>3.&emsp;Parent's Section Enquiry.</br>4.&emsp;Visitor's Section Enquiry.</br>"},
    {message:"What's your name", response:"I am a chatbot"}
]

function sendMessage(userMessage){
    var messageElement = document.createElement('div');
    messageElement.style.textAlign = "right";
    messageElement.style.margin = "10px";
    messageElement.innerHTML = "<span>You: </span>"+
                                "<span>"+ userMessage +"</span>";
    chatContainer.appendChild(messageElement);
}

function chatbotResponse(userMessage){
    var chatbotmessage = "";

   if(userMessage.length >= 5 || userMessage == "hi"){
        var results= arrayOfPossibleMessage.filter(val=>val.message.includes(userMessage.toLowerCase()));
        
        if(results.length > 0){
            var response = results[0].response; 
            chatbotmessage = response;
        }else{
            chatbotmessage = "please send another message"
        }
    }
    else{
        chatbotmessage = "please send a different message"
    }
    var messageElement = document.createElement('div');

    messageElement.innerHTML = "<span>Chatbot: </span>"+
                            "<span>"+ chatbotmessage +"</span>";

    setTimeout(()=>{
        messageElement.animate([{easing:"ease-in", opacity:0.4},{opacity:1}], {duration:1000})
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000);
}

sendBtn.addEventListener('click', function(e){
    var userMessage = textbox.value;

    if(userMessage == ""){
        alert('Please type a message');
    }else{
        let userMessageText = userMessage.trim();
        user.message = userMessageText;
        textbox.value = "";
        sendMessage(userMessageText);
        chatbotResponse(userMessageText)
    }
    
});