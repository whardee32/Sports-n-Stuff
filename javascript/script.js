// Get the API Data
fetch(
    "https://alnyb0ty3i.execute-api.us-east-1.amazonaws.com/sportsData"
)
    .then((response) => response.json())
    .then((data) => printTeams(data));



// get the data to import
function printTeams(teamData) {
    let teams = Object.keys(teamData);

    let teamsArray = [];
    let i = 0;
    
    do {
        randomIndex = Math.floor(Math.random() * teams.length);
        let team = teams[randomIndex];
        teamsArray.push(team);
        i += 1;
    } while (i < 3);

    console.log(teamsArray);

    let teamSection = document.getElementById("team-section");

    console.log(teamData[teamsArray[1]])
    
    // Loop through the teams to get info and add elements to HTML
    for (let index in teamsArray) {
        let teamIndex = teamsArray[index];
        let titleData = teamData[teamIndex];
        let title = titleData["name"];
        let record = titleData["current_record"];
        let abr = titleData["abbreviation"];
        let loc = titleData["location"];

        let teamDiv = document.createElement("div");
        teamDiv.classList.add("info-card");

        let teamImg = document.createElement("img");
        teamImg.src = titleData["logo_dark"]
        teamDiv.appendChild(teamImg);

        let teamTitle = document.createElement("h3");
        teamTitle.innerHTML = title;
        teamDiv.appendChild(teamTitle);

        let teamInfo = document.createElement("p");
        teamInfo.innerHTML = "Abbreviation: " + abr + "<br>Location: " + loc + "<br>Current Record: " + record;
        teamDiv.appendChild(teamInfo);

        teamSection.appendChild(teamDiv);
    }


    
}

// Function to handle sign-in submission
function signIn() {
    // Get the username from the form
    var username = document.getElementById("username").value;
    // Assuming authentication is successful, you would typically store the username in a session or cookie
    // For demonstration purposes, I'll just use localStorage to store the username temporarily
    localStorage.setItem("loggedInUsername", username);
    // Replace "Account" navigation link with the signed-in username
    var accountLink = document.querySelector('.nav-item1 a[href="signin.html"]');
    if (accountLink) {
        accountLink.innerHTML = '<span class="navtext">' + username + '</span>';
        accountLink.href = '#'; // Optionally, change the link target
    }
}

// Check if the user is already signed in
window.onload = function () {
    var loggedInUsername = localStorage.getItem("loggedInUsername");
    if (loggedInUsername) {
        // Replace "Account" navigation link with the signed-in username
        var accountLink = document.querySelector('.nav-item1 a[href="signin.html"]');
        if (accountLink) {
            accountLink.innerHTML = '<span class="navtext">' + loggedInUsername + '</span>';
            accountLink.href = '#'; // Optionally, change the link target
        }
    }
};