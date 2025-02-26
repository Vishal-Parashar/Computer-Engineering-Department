document.getElementById('send-button').addEventListener('click', function() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value;

    if (message.trim() !== '') {
        addMessage(message, 'user');
        userInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessage(botResponse, 'bot');
        }, 1000);
    }
});

function addMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userMessage) {
    // Define a mapping of user inputs to bot responses
    const responses = {
        "hello": "Hi there! How can I help you today?",
        "how are you?": "I'm just a bot, but I'm doing well! How about you?",
        "what is your name?": "I'm a chatbot created to assist you!",
        "tell me a joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "what can you do?": "I can chat with you and provide information!",
        "bye": "Goodbye! Have a great day!",
        "help": "Sure! What do you need help with?",
        "thank you": "You're welcome! If you have more questions, feel free to ask."
    };

    // Normalize the user message to lowercase for matching
    const normalizedMessage = userMessage.toLowerCase();

    // Check if the user message matches any key in the responses object
    if (responses[normalizedMessage]) {
        return responses[normalizedMessage];
    } else {
        return "I'm sorry, I don't understand that. Can you ask something else?";
    }
}