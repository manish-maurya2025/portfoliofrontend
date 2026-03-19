
// Mobile Menu

function toggleMenu(){

document.querySelector(".nav-links").classList.toggle("active");

}

// Dark Mode

function toggleMode(){

document.body.classList.toggle("dark");

}

// Typing Animation

let text = "Software Developer";
let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,100);

}

}

typing();

document.getElementById("contactForm").addEventListener("submit", async function(e){

e.preventDefault()

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let message = document.getElementById("message").value

const btn = document.querySelector("button")

// btn.innerText = "Sending..."

try{

let response = await fetch("http://localhost:5000/send",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({name,email,message})

})

let data = await response.json()

alert("✅ " + data.message)

// btn.innerText = "Send Message"

this.reset()

}

catch(error){

alert("❌ Error sending message")

// btn.innerText = "Send Message"

}

})
// let data = await response.json()
// document.getElementById("status").innerText = "✅ Message sent!"

function openPopup(img) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");

  popup.style.display = "block";
  popupImg.src = img.src;
}

// Close popup
document.querySelector(".close").onclick = function () {
  document.getElementById("popup").style.display = "none";
};

// Close when clicking outside image
document.getElementById("popup").onclick = function (e) {
  if (e.target === this) {
    this.style.display = "none";
  }
};


