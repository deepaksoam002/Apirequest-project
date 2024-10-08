**GitHub User Profile Fetcher**
This project is a simple web application that fetches GitHub user details based on a username entered by the user.
It leverages the GitHub API to retrieve public information such as the user's name, location, email, followers, following count, and public repositories.
The app is built using HTML, CSS, and vanilla JavaScript.

**Features**
Input a GitHub username and fetch detailed information about the user.
Displays the user's profile picture, name, email, location, follower/following count, and public repositories.
Includes error handling for empty input and invalid usernames.
Responsive design with a user-friendly interface.

**Technologies Used**
HTML5: For creating the structure of the webpage.
CSS3: For styling and layout.
JavaScript (Vanilla JS): For making API requests and updating the DOM with user details.
GitHub API: To fetch user profile data from GitHub.

**Demo**

**How It Works**
1.The user enters a GitHub username in the input field.
2.When the Submit button is clicked, an API request is made to the GitHub API endpoint: https://api.github.com/users/{username}.
3.If the user exists, the profile information is displayed, including:
Profile picture
Name
Email
Location
Number of followers
Number of users the profile is following
Public repositories count
If the user does not exist, an error message is displayed informing the user to enter a valid username.

**Future Improvements**

**Error handling**: Implement more robust error handling for different HTTP status codes.

**Use Fetch API**: Replace XMLHttpRequest with the more modern fetch() API for better readability and ease of use.

**UI Enhancements**: Improve the design for smaller screens and add animations for loading states.
