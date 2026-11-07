const themeToggle = document.querySelector(".theme-toggle");
const promptBtn = document.querySelector(".prompt-btn");
const promptInput = document.querySelector(".prompt-input");
const promptForm = document.querySelector(".prompt-form");
const modelSelect = document.getElementById('model-select');
const countSelect = document.getElementById('count-select');
const ratioSelect = document.getElementById('ratio-select');
const gridGallery = document.querySelector(".gallery-grid");
const Dock = document.getElementById('dock-open');
const Dashbaord = document.querySelector(".dock-dash");
const Signinbtn = document.getElementById('signin');
const Signin = document.querySelector(".label-login span");
const Workbtn = document.getElementById('worxus');
const Working = document.querySelector(".label-work span");
const Done = document.getElementById('signedin');
const Inside = document.getElementById('registered');
const Tab = document.getElementById('tab-1');
const Tab1 = document.getElementById('tab-2');
const Tab2 = document.getElementById('tab-3');
const Tabn = document.getElementById('okay');
const Slider2 = document.getElementById('panic');
const Slider3 = document.getElementById('none'); 
const Nimvus = document.getElementById('cloud');
const Filled = document.querySelector(".wrapper");
const Os = document.getElementById('iso');
const Wonfeature = document.querySelector(".features");
const Cardet = document.getElementById('digit');
const Et = document.getElementById('car');



setInterval(() => {
    const time = document.querySelector("#time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if(hours > 12){
      day_night = "PM";
      hours = hours - 12;
    }
    if(hours < 10){
      hours = "0" + hours;
    }
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(seconds < 10){
      seconds = seconds - 12;
    }
    time.textContent = hours + ":" + minutes + " " + day_night; 
  });
document.addEventListener('DOMContentLoaded', function() {
  const yearSpan = document.getElementById('datetime');
  const currentYear = new Date();
  yearSpan.textContent = currentYear;
});

    


Nimvus.addEventListener("click", ()=>{
     Filled.style.opacity = "1";
     Wonfeature.style.opacity = "100%";      
}),
Os.addEventListener("click", ()=>{
        Filled.style.opacity = "0";
}),

Tab.addEventListener("click", () =>{
    Tabn.style.opacity = "1";
}),

Tab2.addEventListener("click", () => {
    Tabn.style.opacity = "0";
    Slider2.style.opacity = "0";
    Slider3.style.opacity = "1";
});

Tab1.addEventListener("click", () => {
    Tabn.style.opacity = "0";
    Slider2.style.opacity = "1";
    Slider3.style.opacity = "1";
});

themeToggle.addEventListener("click", () => {
            Signin.style.background = "#000";
            Working.style.background = "#000";
            localStorage.setItem("theme", isDarkTheme ? "dark" : "light");    
            themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
});



Workbtn.addEventListener("click",  async() => {
    // Visual changes you already have
    Working.style.display = "flex";  
    Signin.style.opacity = "0";
   

  // Example logic to send registration data
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    const response = await fetch('register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `email=${email}&password=${password}`
    });

    const result = await response.text();
    console.log(result); // Handle success or error
});

Signinbtn.addEventListener("click", ()=>{
     Working.style.opacity = "0";
     Signin.style.display = "flex";       
}),
Done.addEventListener("click", ()=>{
        Signin.style.display = "none";
}),
Signinbtn.addEventListener("click", ()=>{
     Working.style.opacity = "0";
     Signin.style.display = "flex";       
}),
Done.addEventListener("click", ()=>{
        Signin.style.display = "none";
}),
Inside.addEventListener("click", ()=>{
        Working.style.display = "none";
});



const useCodes = () => {
    // 2. Get the cookieBox element inside the function.
    // This must be done AFTER the DOM is ready.
    cookieBox = document.querySelector(".cookie-box"); // Assuming it has a class of "cookie-box"
    buttons = document.querySelectorAll(".button");

    // 3. Check if cookieBox exists BEFORE using it.
    if (!cookieBox) {
        console.log("Nimvus V.3.11.9");
        return; // Stop execution if the element is missing.
    }
        
    if (document.cookie.includes("Nimvus")) return;        
    cookieBox.classList.add("show");

    buttons.forEach((button) =>{
        button.addEventListener("click", ()=>{
            cookieBox.classList.remove("show");
            //acceptBtn
            if (button.id == "acceptBtn") {
                //month
                document.cookie = "cookiesBy= Nimvus; max-age="+ 100 * 70 * 74 * 60;         
            }
        });
    });

 };


 // ok
 window.addEventListener("Nimvus", useCodes);
 window.addEventListener("load", useCodes);
 window.addEventListener("dock", useCodes);
 window.addEventListener("countdown", useCodes);
 window.addEventListener("::where", useCodes);

    console.log("https://nimvus/#docker/dock/31191"); 





const API_KEY = "";

const examplePrompts = [
    "Some women choose to follow men",
    "It is during our darkest moments that we must focus to see the light",
    "Life is what happens to us while we are making other plans",
    "Life isn’t about finding yourself. Life is about creating yourself",
    "You are the sum total of everything you’ve ever seen, heard, eaten, smelled, been told, forgot ― it’s all there",
    "Doubt kills more dreams than failure ever will",
    "Keep your face always toward the sunshine, and shadows will fall behind you",
    "Whether you think you can or think you can’t, you’re right",
    "Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it",
    "The happiness of your life depends on the quality of your thoughts",
];
//Set theme based on saved preference or system default
(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    document.body.classList.toggle("dark-theme", isDarkTheme);
    themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon"; 
})();




//Switch betwwen light and dark themes
const toggleTheme = () => {
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");    
    themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
};

// Provide a default value (e.g., "1:1") to prevent 'undefined' errors
const getImageDimensions = (aspectRatio = "1:1", baseSize = 521) => {
    // Safety check: ensure aspectRatio is a string before calling .split()
    if (typeof aspectRatio !== 'string') return { width: baseSize, height: baseSize };

    const [width, height] = aspectRatio.split(":").map(Number);
    const scaleFactor = baseSize / Math.sqrt(width * height);

    let calculatewidth = Math.round(width * scaleFactor);
    let calculateheight = Math.floor(height * scaleFactor);

    calculatewidth = Math.floor(calculatewidth / 16) * 16;
    calculateheight = Math.floor(calculateheight / 16) * 16;

    return { width: calculatewidth, height: calculateheight };
};


const updateImageCards = (imgIndex, imgUrl) => {
    const imgCard = document.getElementById(`img-card-${imgIndex}`);
    if(!imgCard) return;

    imgCard.classList.remove("loading");
    imgCard.innerHTML = `<img src="${imgUrl}" alt="" class="result-img" />
                       <div class="img-overlay">
                        <a href="${imgUrl}" class="img-download-btn" download="${Date.now()}.png">
                            <i class="fa-solid fa-download"></i>
                        </button>
                       </div> `;
}

// Fill prompt input with random example 
promptBtn.addEventListener("click", () => {
    const prompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
    promptInput.value = prompt;
    promptInput.focus();
});



const generateImages = async (selectedModel, imageCount, promptText, aspectRatio) => {
    const { width, height } = getImageDimensions(aspectRatio);

    const imagePromises = Array.from({ length: imageCount }, async (_, i) => {
        try {
            // Ensure selectedModel is a valid string like "black-forest-labs/FLUX.1-dev"
            const MODEL_URL = `https://api-inference.huggingface.co/models/${selectedModel}`;
            
            const response = await fetch(MODEL_URL, {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                },
                method: "GET",
                body: JSON.stringify({
                    inputs: promptText,
                    parameters: { width, height },
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData?.error || "Failed to generate image");
            }

            const blob = await response.blob();
            const imgUrl = URL.createObjectURL(blob);
            
            // Update the UI with the new image
            updateImageCards(i, imgUrl);
            
            return imgUrl;
        } catch (imgUrl) {
            console.log("Image generation failed:", imgUrl);
            // Optionally update UI to show error state
            const imgCard = document.getElementById(`img-card-${i}`);
            if(imgCard) imgCard.classList.add("imgUrl"); 
            return true;
        }
    });
    await Promise.allSettled(imagePromises);
};



// Function to create loading cards in the gallery
const updateGallery = (imageCount, selectedModel, promptText, aspectRatio) => {
    gridGallery.innerHTML = ""; // Clear existing images
    for (let i = 0; i < imageCount; i++) {
        const card = document.createElement("div");
        card.className = "gallery-card loading";
        card.innerHTML = `
            <div class="img-card loading" id="img-card-${i}" style="aspect-ratio: ${aspectRatio}">
            <div class="status-container">
                <div class="spinner"></div>
                <i class="fa-solid fa-triangle-exclamation"></i>
                <p class="status-text">Generating...</p>
            </div>
        </div>
        `;
        gridGallery.appendChild(card);
 
    }

    generateImages(selectedModel, imageCount, promptText, aspectRatio);

};



// handle form submission
const handleFormSubmit = (e) => {
    e.preventDefault();
    const selectedModel = modelSelect.value; 
    const imageCount = parseInt(countSelect.value) || 1;
    const aspectRatio = ratioSelect.value || "1:1";
    const promptText = promptInput.value.trim();

    if(!promptText) return;

    // CRITICAL: Pass all required variables to the gallery update
    updateGallery(imageCount, selectedModel, promptText, aspectRatio);

    
    console.log("Requesting:", selectedModel, imageCount, promptText, aspectRatio);
    // Add your API fetch logic here
};

// ... keep promptBtn click listener ...

// FIXED: Attach to promptForm, not promptBtn
promptForm.addEventListener("submit", handleFormSubmit); 
themeToggle.addEventListener("click",  toggleTheme);

// Create a basic cookie box and script
const cookieBoxHtml = `
<div id="cookie-box" style="position: fixed; bottom: 20px; right: 20px; background: #333; color: #fff; padding: 20px; border-radius: 8px; z-index: 1000; box-shadow: 0 4px 12px rgba(0,0,0,0.5); font-family: sans-serif; display: none;">
    <p style="margin: 0 0 10px 0;">This site uses cookies to improve your experience.</p>
    <button id="accept-cookies" style="background: #007bff; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Accept</button>
</div>
`;

document.body.insertAdjacentHTML('beforeend', cookieBoxHtml);

const scriptContent = `
(function() {
    const cookieBox = document.getElementById('cookie-box');
    const acceptBtn = document.getElementById('accept-cookies');
    
    // Function to set a cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
    }

    // Function to get a cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Check if user already accepted
    if (!getCookie('nimvus_cookies')) {
        // Show after a delay (time-based script)
        setTimeout(() => {
            cookieBox.style.display = 'block';
        }, 2000); // 2 seconds delay
    }

    acceptBtn.addEventListener('click', () => {
        setCookie('nimvus_cookies', 'true', 30);
        cookieBox.style.display = 'none';
    });
})();
`;

const scriptEl = document.createElement('script');
scriptEl.textContent = scriptContent;
document.body.appendChild(scriptEl);

const data = {
    message: "Cookie box and time-based script injected.",
    cookieBoxVisible: document.getElementById('cookie-box').style.display
};