// Fetch the API Data
fetch("https://alnyb0ty3i.execute-api.us-east-1.amazonaws.com/sportsData")
    .then((response) => response.json())
    .then((data) => { 
        populateMainArticle(data);
        populatePlayerStats(data);
    })

// Function to input player information to the main article
function populateMainArticle(data) {
    // Choose a random team
    let teams = Object.keys(data);
    let randomTeam = teams[Math.floor(Math.random() * teams.length)];
    let teamData = data[randomTeam];

    // taking information from the API to put into the main article
    // for this portion I wrote the code but it was giving me an error so I had AI fix it for me and make it look more readable
    let mainArticleInfo = ` 
        <h3>${teamData.name}</h3> 
        <p>Location: ${teamData.location}</p>
        <p>Current Record: ${teamData.current_record}</p>
        <p>Logo: <img src="${teamData.logo_dark}" alt="${teamData.name} Logo"></p>
    `;

    // Update the main article in the DOM
    document.querySelector('.main-article').innerHTML = mainArticleInfo; // I had AI help me write this portion of the code and it suggested for me to use a DOM
}

// Function to input info into player stats
function populateOtherStats(data) {
    let teams = Object.keys(data);

    // Choose random teams for other articles
    let otherTeams = [];
    for (let i = 0; i < 3; i++) { // I didn't know how to do this part so I had AI help me write code on how to generate other teams
        let randomGenerator = Math.floor(Math.random() * teams.length);
        let randomTeam = teams[randomGenerator];
        otherTeams.push(randomTeam);
    }

    
    let playerStats = ''; // I also couldn't get this portion to work so AI used these tick marks and helped me organize the information that goes into the playerStats, I wrote the code but I had AI make it look nicer.
    otherTeams.forEach((teamName) => {
        let teamData = data[teamName];
        playerStats += `
            <div class="article">
                <h3>${teamData.name}</h3>
                <p>Location: ${teamData.location}</p>
                <p>Current Record: ${teamData.current_record}</p>
                <p>Logo: <img src="${teamData.logo_dark}" alt="${teamData.name} Logo"></p>
            </div>
        `;
    });

    // Update the other articles in the DOM
    document.querySelector('.other-articles').innerHTML = playerStats; // I couldn't get it to work so I asked AI and it told me to use the .query selector
}