This app helps the user to converse with GPT.

This app is built with the help of Nodejs, Express and openai.

Openai's free tier has been used for getting the repsonses.

The flow of the logic is as mentioned below:-

1) Here, webkitSpeechRecognition api is used for converting speech to text. This api is provided by browser itself.
2) Then this generated data is send on the backend to fetch the response given by AI.
3) Backend generates the response with the help of openai api and sends the data back to frontend js file.
4) Then js file function catches the data and then converts the data from text to speech.
5) To convert the data from text to speech speechSynthesis api is used which is provided by the browser itself.

Thanks for reading it through. Any kind of contribution would be highly appreciated.