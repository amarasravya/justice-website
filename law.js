// Function to get chatbot response from the backend API
function getChatbotResponse(userMessage) {
    fetch('http://localhost:3000/getChatbotResponse', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userMessage })
    })
    .then(response => response.json())
    .then(data => {
        appendMessage('Chatbot', data.response);
    })
    .catch(error => {
        appendMessage('Chatbot', "Error connecting to the chatbot service.");
        console.error('Error:', error);
    });
}
