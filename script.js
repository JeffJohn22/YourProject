// script.js

// Initialize the Microsoft Teams SDK
microsoftTeams.initialize();

// Define a sample list of users and messages
var userMessages = {
    "John": "Hello John! Here's your special message.",
    "Alice": "Hey Alice! Check out this message personalized for you.",
    "Bob": "Hi Bob! Hope you're having a great day."
};

// Get the user's name from Microsoft Teams
microsoftTeams.getContext(function(context) {
    var userName = context.userDisplayName;
    showMessagePopupForUser(userName);
});

function showMessagePopupForUser(userName) {
    var popup = document.getElementById('popup');
    var messageContent = document.getElementById('messageContent');
    
    // Check if the user exists in the list
    if (userMessages.hasOwnProperty(userName)) {
        var message = userMessages[userName];
        messageContent.innerHTML = message;
        popup.style.display = 'block';
    } else {
        messageContent.innerHTML = "Sorry, no message found for " + userName + ".";
        popup.style.display = 'block';
    }
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
