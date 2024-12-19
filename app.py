from flask import Flask, render_template, request, jsonify
import google.generativeai as genai
import os

# Configure the Google API key
GOOGLE_API_KEY = "AIzaSyBMEhbEEuQ38FTaPkbvMCeBf3Z_MHyf7fA"
genai.configure(api_key=GOOGLE_API_KEY)

# Create a Generative Model instance
model = genai.GenerativeModel('gemini-1.5-flash-002')
chat = model.start_chat(history=[])

# Initialize the Flask application
app = Flask(__name__)


# Route for the main page
@app.route('/')
def chatbot():
    return render_template('law.html')  # Ensure 'law.html' exists in the 'templates' directory

# Route for handling chat responses
@app.route('/chat', methods=['POST'])
def chat_response():
    user_input = request.json.get('message')
    if not user_input:
        return jsonify({"error": "No message provided"}), 400  # Corrected syntax for error response

    try:
        response_raw = chat.send_message(user_input)
        print(response_raw)
        response = response_raw.text
        return jsonify({"response": response})
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

# Run the Flask application
if __name__ == "__main__":
    app.run(debug=True)  # Corrected 'rub' to 'run'
