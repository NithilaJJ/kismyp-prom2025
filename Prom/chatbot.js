// Sample data for the chatbot's responses
const responses = {
    "hi": "Hi! Welcome to our Met Gala / Hollywood Prom event. How can I assist you?",
    "hello": "Hi! Welcome to our Met Gala / Hollywood Prom event. How can I assist you?",
    "when is prom": "Prom will be held on April 25, 2025, at 18:00.",
    "when": "Prom will be held on April 25, 2025, at 18:00.",
    "when is it": "Prom will be held on April 25, 2025, at 18:00.",
    "time": "Prom will be held on April 25, 2025, at 18:00 and will end at 22:00",
    "when does it start": "Prom will be held on April 25, 2025, at 18:00.",
    "what time is prom": "Prom will be held on April 25, 2025, at 18:00.",
    "what time is it": "Prom will be held on April 25, 2025, at 18:00.",
    "when does it end": "Prom will end at 22:00",
    "how much does it cost": "The ticket price for prom is 300kr.",
    "how much is the ticket for prom": "The ticket price for prom is 300kr.",
    "dress code": "D Class students are the only ones allowed to wear big, long, and puffy dresses. Other students are free to choose their dress style.",
    "what is the dress code": "D Class students are the only ones allowed to wear big, long, and puffy dresses. Other students are free to choose their dress style.",
    "what can i wear": "D Class students are the only ones allowed to wear big, long, and puffy dresses. Other students are free to choose their dress style.",
    "what do i wear if i go in mypa": "D Class students are the only ones allowed to wear big, long, and puffy dresses. Other students are free to choose their dress style.",
    "what do i wear if i go in mypb": "D Class students are the only ones allowed to wear big, long, and puffy dresses. Other students are free to choose their dress style.",
    "what do i wear if i go in mypc": "D Class students are the only ones allowed to wear big, long, and puffy dresses. Other students are free to choose their dress style.",
    "what do i wear if i go in mypd": "D Class students are the only ones allowed to wear big, long, and puffy dresses. Other students are free to choose their dress style.",
    "where is prom": "The event will be held at Raumyr skole, Kongsberg.",
    "where is it": "The event will be held at Raumyr skole, Kongsberg.",
    "where": "The event will be held at Raumyr skole, Kongsberg.",
    "location": "The event will be held at Raumyr skole, Kongsberg.",
    "who should i contact": "You can contact us by email at nithila.jayabarathi@kischool.org.",
    "when is the deadline to buy tickets": "The deadline to buy tickets will be on March 20th 2025",
    "default": "I'm sorry, I didn't understand that. Please rephrase the question!"
};



//when does it start
//when does it end
//food 
//drinks


//music requests, allergies 
//instagram page
//updates page 






// Get elements
const chatOutput = document.getElementById("chat-output");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Function to process user input
function processInput(input) {
    // Convert input to lowercase for matching
    const lowerCaseInput = input.toLowerCase();

    // Get the response based on the input or return the default response
    const response = responses[lowerCaseInput] || responses["default"];

    // Add the user's message to the chat box
    chatOutput.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

    // Add the bot's response to the chat box
    chatOutput.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;

    // Scroll to the bottom of the chat output
    chatOutput.scrollTop = chatOutput.scrollHeight;

    // Clear the input field
    userInput.value = "";
}

// Event listener for the send button
sendBtn.addEventListener("click", function() {
    const userQuestion = userInput.value.trim();

    if (userQuestion) {
        processInput(userQuestion);
    }
});

// Event listener for pressing the "Enter" key
userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const userQuestion = userInput.value.trim();
        if (userQuestion) {
            processInput(userQuestion);
        }
    }
});
