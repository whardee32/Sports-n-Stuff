// Get the API Data
fetch(
    "https://alnyb0ty3i.execute-api.us-east-1.amazonaws.com/sportsData"
)
    .then((response) => response.json())
    .then((data) => printTeams(data));



// get the data to import and put it in cards
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
    
    
    for (let index in teamsArray) {
        let teamIndex = teamsArray[index];
        let titleData = teamData[teamIndex];
        let title = titleData["name"];
        let record = titleData["current_record"];
        let abr = titleData["abbreviation"];
        let loc = titleData["location"];

        let teamDiv = document.createElement("a");
        teamDiv.classList.add("info-card");
        teamDiv.href = "./basketball.html"

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

const navText1 = document.querySelector('.navtext1');


const cookieValue = document.cookie.split('; ').find(cookie => cookie.startsWith('username='));
const username = cookieValue ? cookieValue.split('=')[1] : '';

if (username) {
  navText1.textContent = username;
  navText1.classList.add('underline'); 
}