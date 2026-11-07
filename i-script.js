//selecting all required elements

const wrapper = document.querySelector(".wrapper");
toast = wrapper.querySelector(".toast");
wifiIcon = wrapper.querySelector(".icon");
title = wrapper.querySelector("span"),
subTitle =  wrapper.querySelector("p");
const Close = document.querySelector(".close-icon");


Close.onclick = ()=> {
        wrapper.classList.add("hide");
    }

window.onload = () => {
    function ajax() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.onload = ()=>{
            if (xhr.status == 200 && xhr.status < 300) {
                console.log("Online");
                
            }else{
    toast.classList.add("offline");
    title.innerText = "You're offline now";
    subTitle.innerText = "Opps! Its limbo disconnected.";
    wifiIcon.innerHTML = `<i class="uil uil-wifi-slash"></i>`;

    
             offline();
            }
        }
        xhr.onerror = ()=>{
          console.log("Offline");
          offline();
        }
        xhr.send(); 
    }
function offline(){
    toast.classList.add("offline");
    toast.classList.add("offline");
    title.innerText = "You're offline now";
    subTitle.innerText = "Opps! Its limbo disconnected.";
    wifiIcon.innerHTML = `<i class="uil uil-wifi-slash"></i>`;
}
    ajax();
}