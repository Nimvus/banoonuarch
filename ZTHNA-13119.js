const container = document.querySelector(".container");
const chatsContainer = document.querySelector(".chats-container");
const promptForm = document.querySelector(".prompt-form");
const promptInput = promptForm.querySelector(".prompt-input");
const themeToggle = document.querySelector("#theme-toggle-btn");
zthna = promptForm.querySelector("#add-file-btn");
barBtn = document.querySelector("#send-prompt-btn");
typeBtn = document.querySelector("#delete-chats-btn");




function textToSpeech(innerText){
    let utternance = new SpeechSynthesisUtterance(innerText);
    speechSynthesis.speak(utternance);
}

 barBtn.addEventListener("click", ()=>{
    promptForm.style.display = "none";
}),
 typeBtn.addEventListener("click", ()=>{
    promptForm.style.display = "flex";
}),

zthna.addEventListener("click", e =>{
    e.preventDefault();
    if(promptInput.value !== ""){
        textToSpeech(promptInput.value);
    }     
});
 // show/hide control for on prompt input focus
 document.addEventListener("click", ({ target }) => {
    const wrapper = document.querySelector(".prompt-wrapper");
    const shouldHide = target.classList.contains("prompt-input") || (wrapper.classList.contains
        ("hide-control") && (target.id === "add-file-btn" || target.id === "send-file-btn"));
        wrapper.classList.toggle("hide-controls", shouldHide);
 });

//API installation
const API_KEY = "AQ.Ab8RN6KQx1YGKL6rJVUG6cym8UkcoN51QvewjrPPBuUWLu7Wdg";
// Changed GEMINI_API_KEY to API_KEY and fixed the model name typo
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${API_KEY}`;

let userMessage = "";
const chatHistory = [];

//Function to create message elements

const createMsgElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
}
const scrollToBottom = () => container.scrollTo({top: container.scrollHeight, behavior: "smooth" });


const typingEffect = (text, textElement, botMsgDiv) => {
    textElement.textContent = "";
    const words = text.split(" ");
    let wordIndex = 0;
 
    const typingInterval = setInterval(() => {
        if(wordIndex < words.length) {
            // Appends word by word with a space
            textElement.textContent += (wordIndex === 0 ? "" : " ") + words[wordIndex++];
            // Removes loading state visual (e.g., stopping the spinning avatar)
            botMsgDiv.classList.remove("loading");
            scrollToBottom();
        } else {
            clearInterval(typingInterval);
        }
    }, 40);
}


// Make the API call and generate  the bot's response
const generateResponse = async(botMsgDiv) => {
    const textElement = botMsgDiv.querySelector(".message-text");
    // Add user message to the chat history
    chatHistory.push({
        role: "user",
        parts: [{text: userMessage}]
    });

    try{
    // Send the chat history to the API to get a response   
     const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({contents: chatHistory}) 
     });

     const data = await response.json();
     if(!response.ok) throw new Error(data.error.message);
    //Process the response text and diplay it 
        const responseText = data.candidates[0].content.parts[0].text.replace(/\*\*([^*]+)\*\*/g, "$1").trim();
       typingEffect(responseText, textElement, botMsgDiv );
    } catch (error) {
        textElement.textContent = "https://ai.google.dev/gemini-api/docs/rate-limits?hl=en";
    }
    
}


// Handle the form submission

const handleFormSubmit = (e) => {
    e.preventDefault();
    userMessage = promptInput.value.trim();
    if(!userMessage) return;

promptForm.value = "";
document.body.classList.add("bot-responding", "chats-active");
 // Gnerate user message HTML and add in the chats container   
const userMsgHTML = `<p class="message-text"></p>`;
const userMsgDiv = createMsgElement(userMsgHTML, "user-message");

userMsgDiv.querySelector(".message-text").textContent = userMessage;
chatsContainer.appendChild(userMsgDiv); 
scrollToBottom();



setTimeout(() => {

    //Generation user message HTM and add in the chats container in 600ms
  
   const botMsgHTML = `<img src="Gemini.svg" class="ava" alt="nimvus-splash"><p class="message-text">Wait a minute gang...</p>`;
   const botMsgDiv = createMsgElement(botMsgHTML, "bot-message", "loading");
   chatsContainer.appendChild(botMsgDiv); 
   scrollToBottom();
   generateResponse(botMsgDiv); 
   }, 600);
}
document.querySelector("#delete-chats-btn").addEventListener("click", () => {
    promptInput.value= "";
    promptInput.focus();
    chatHistory.length = 0;
    chatsContainer.innerHTML = "";
    document.body.classList.remove("bot-responding", "chats-active");
});
 document.querySelectorAll(".suggestions-item").forEach(item => {
    item.addEventListener("click", () =>{
        promptInput.value = item.querySelector(".text").textContent;
        promptForm.dispatchEvent(new Event("submit"));
    });
 })

themeToggle.addEventListener("click", () =>{
    const isNimTheme = document.body.classList.toggle("light-theme");
    localStorage.setItem("themeColor", isNimTheme ? "light_mode" : "dark_mode");
    themeToggle.textContent = isNimTheme ? "dark_mode" : "light_mode";
});
const isNimTheme = localStorage.getItem("themeColor") === "light_mode";
document.body.classList.toggle("light-theme", isNimTheme);
themeToggle.textContent = isNimTheme ? "dark_mode" : "light_mode";

promptForm.addEventListener("submit", handleFormSubmit);