document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(`Logged in as ${username}`);
 });
 
 document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    alert(`Signed up as ${newUsername}`);
 });
 // Function to send a message
function sendMessage() {
   var userInput = document.getElementById('user-input');
   var message = userInput.value.trim();

   if (message !== '') {
       appendMessage('user', message); // Append user's message to the chat box
       userInput.value = ''; // Clear input field
       scrollToBottom(); // Scroll to bottom of chat box
       // Here you can add functionality to send the message to a server or another user
   }
}

// Function to append a message to the chat box
function appendMessage(sender, message) {
   var chatBox = document.getElementById('chat-box');
   var messageElement = document.createElement('div');
   messageElement.classList.add('message', sender);
   messageElement.innerText = message;
   chatBox.appendChild(messageElement);
}

// Function to scroll to the bottom of the chat box
function scrollToBottom() {
   var chatBox = document.getElementById('chat-box');
   chatBox.scrollTop = chatBox.scrollHeight;
}
// Simulate delivery status change
setTimeout(() => {
   var deliveryMessage = document.getElementById('delivery-message');
   deliveryMessage.textContent = 'Your order has been delivered!';
}, 5000); // Simulate after 5 seconds (5000 milliseconds)
