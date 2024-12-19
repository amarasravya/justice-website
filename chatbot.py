import openai
openai.apikey="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"
def chat(prompt):
    response=openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role":"user","content":prompt}]


    )
    return response.choices [0].messages.content.strip()
if __name__=="__main__":
    while True:
        user_input=input("You: ")
        if user_input.lower() in ["quit","exit","bye"]:
            break
        response=chat(user_input)
        print("chatbot: " ,response)

