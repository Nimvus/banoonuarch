import os
from google import genai

# It is best practice to set your key as an environment variable:
# export GEMINI_API_KEY="your_api_key_here"
client = genai.Client()

response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents='Hello! Introduce yourself as a helpful chatbot.',
)

print(response.text)
