console.log("Welcome to the Community Portal");

window.addEventListener("load", () => {
    alert("Page Loaded Successfully");
    displayEvents();
});

// Variables
const eventName = "Music Festival";
const eventDate = "2026-07-25";
let seats = 100;

console.log(`${eventName} - ${eventDate} - Seats: ${seats}`);

// Events Array
let events = [
    { name: "Music Festival", category: "Music", seats: 50, date: "2026-07-25" },
    { name: "Food Fair", category: "Food", seats: 30, date: "2026-07-28" },
    { name: "Workshop", category: "Education", seats: 20, date: "2026-07-30" },
    { name: "Old Event", category: "Music", seats: 10, date: "2025-01-01" }
];

// Functions
function addEvent(name, category, seats, date) {
    events.push({ name, category, seats, date });
}

function filterEventsByCategory(category) {
    return events.filter(event => event.category === category);
}

// Closure
function registrationTracker() {
    let count = 0;
    return function () {
        return ++count;
    };
}

const trackRegistration = registrationTracker();

// Class
class Event {
    constructor(name, seats) {
        this.name = name;
        this.seats = seats;
    }
}

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

// Display Events
function displayEvents(eventList = events) {

    const container = document.querySelector("#eventContainer");

    if (!container) return;

    container.innerHTML = "";

    eventList.forEach(event => {

        const today = new Date();

        if (event.seats > 0 && new Date(event.date) > today) {

            const card = document.createElement("div");

            card.innerHTML = `
                <h3>${event.name}</h3>
                <p>${event.category}</p>
                <p>Seats: ${event.seats}</p>
                <button onclick="registerForEvent('${event.name}')">
                    Register
                </button>
            `;

            container.appendChild(card);
        }
    });
}

// Registration
function registerForEvent(name) {

    try {

        const event = events.find(e => e.name === name);

        if (!event || event.seats <= 0) {
            throw new Error("No Seats Available");
        }

        event.seats--;
        trackRegistration();

        alert(`Registered for ${name}`);

        displayEvents();

    } catch (error) {
        alert(error.message);
    }
}

// Category Filter (onchange)
function filterCategory() {

    const category =
        document.getElementById("categoryFilter").value;

    if (category === "All") {
        displayEvents();
    } else {
        displayEvents(filterEventsByCategory(category));
    }
}

// Form Validation
const form = document.getElementById("registrationForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = form.elements["name"];
        const email = form.elements["email"];

        document.getElementById("nameError").innerText = "";
        document.getElementById("emailError").innerText = "";

        let valid = true;

        if (name.value.trim() === "") {
            document.getElementById("nameError").innerText =
                "Name is required";
            valid = false;
        }

        if (email.value.trim() === "") {
            document.getElementById("emailError").innerText =
                "Email is required";
            valid = false;
        }

        if (valid) {
            sendRegistration();
        }
    });
}

// Fetch API
function loadEvents() {

    const loading = document.getElementById("loading");

    if (loading) loading.innerText = "Loading Events...";

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (loading) {
                loading.innerText = "Events Loaded";
            }
        })
        .catch(error => console.error(error));
}

// Async/Await
async function loadEventsAsync() {

    try {

        const response =
            await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.error(error);
    }
}

// POST Request
function sendRegistration() {

    const userData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value
    };

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("outputMessage").innerText =
                "Registration Successful";
            console.log(data);
        });

    }, 2000);
}

// Modern JS
function createEvent(name = "New Event") {
    return { name };
}

const clonedEvents = [...events];

const { name, category } = events[0];

console.log(name, category);

// Keyboard Event
document.addEventListener("keydown", event => {
    console.log(event.key);
});

// jQuery Example
// $('#registerBtn').click(function(){
//     $('.eventCard').fadeOut();
// });

// Benefit of React/Vue:
// Component-based structure makes large applications easier to maintain.