// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Justice-related responses based on keywords
function getChatbotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    
    if (userMessage.includes('justice')) {
        return "Justice ensures fairness and equality under the law. How can I assist you further?";
    } else if (userMessage.includes('lawyer')) {
        return "You can find lawyer details on our website under the 'Lawyer Directory'.";
    } else if (userMessage.includes('case status')) {
        return "You can check the status of your case on the National Judicial Data Grid (NJDG).";
    } else if (userMessage.includes('court')) {
        return "The Supreme Court of India is the highest judicial forum. Do you need information on courts?";
    } else {
        return "I’m not sure how to answer that, but I can help with justice-related queries.";
    }
}

// Route to handle chatbot requests
app.post('/getChatbotResponse', (req, res) => {
    const userMessage = req.body.message;

    // Get response from the chatbot
    const response = getChatbotResponse(userMessage);

    // Send the response back to the client
    res.json({ response });
});

// Start the server
app.listen(port, () => {
    console.log(`Justice Chatbot server is running on http://localhost:${port}`);
});

