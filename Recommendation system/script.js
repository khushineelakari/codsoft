const data = {

movies:{
Action:["🎬 KGF","🎬 Pushpa","🎬 RRR"],
Comedy:["😂 3 Idiots","😂 Golmaal","😂 Bhool Bhulaiyaa"],
Romance:["❤️ Sita Ramam","❤️ Hi Nanna","❤️ Love Today"]
},

books:{
Programming:["📘 Python Crash Course","📗 Clean Code","📕 Eloquent JavaScript"],
Story:["📚 Harry Potter","📚 The Alchemist","📚 Wings of Fire"],
Motivation:["💡 Atomic Habits","💡 Deep Work","💡 Think and Grow Rich"]
},

music:{
Pop:["🎵 Shape of You","🎵 Levitating","🎵 Blinding Lights"],
Rock:["🎸 Believer","🎸 Numb","🎸 Radioactive"],
Classical:["🎼 Moonlight Sonata","🎼 Canon in D","🎼 Four Seasons"]
}

};

const category = document.getElementById("category");
const preference = document.getElementById("preference");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

// Update Preference Dropdown
category.addEventListener("change", function(){

preference.innerHTML =
'<option value="">Select Preference</option>';

if(category.value==="movies"){

["Action","Comedy","Romance"].forEach(function(item){

preference.innerHTML +=
`<option value="${item}">${item}</option>`;

});

}

if(category.value==="books"){

["Programming","Story","Motivation"].forEach(function(item){

preference.innerHTML +=
`<option value="${item}">${item}</option>`;

});

}

if(category.value==="music"){

["Pop","Rock","Classical"].forEach(function(item){

preference.innerHTML +=
`<option value="${item}">${item}</option>`;

});

}

});

// Recommendation
function recommend(){

let cat = category.value;
let pref = preference.value;

if(cat==="" || pref===""){

alert("Please select both Category and Preference.");

return;

}

loading.style.display="block";
result.style.display="none";

setTimeout(function(){

loading.style.display="none";

let items = data[cat][pref];

let html = `<h3>⭐ Recommended for You</h3><ul>`;

items.forEach(function(item){

html += `<li>${item}</li>`;

});

html += "</ul>";

result.innerHTML = html;

result.style.display="block";

},1500);

}

// Reset
function resetForm(){

category.selectedIndex=0;

preference.innerHTML =
'<option value="">Select Preference</option>';

result.style.display="none";

loading.style.display="none";

}

// Dark Mode
const themeBtn=document.getElementById("themeBtn");

let dark=false;

themeBtn.addEventListener("click",function(){

dark=!dark;

if(dark){

document.body.style.background="#111";

document.querySelector(".container").style.background=
"rgba(30,30,30,.9)";

document.querySelector(".container").style.color="white";

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}
else{

document.body.style.background=
"linear-gradient(-45deg,#6a11cb,#2575fc,#00c6ff,#7b2ff7)";

document.querySelector(".container").style.background=
"rgba(255,255,255,.18)";

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

});