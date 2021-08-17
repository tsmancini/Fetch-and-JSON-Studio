window.addEventListener("load", function () {
    let json = [];
    let index = 0;
    fetch(
        "https://handlers.education.launchcode.org/static/astronauts.json"
    ).then(function (response) {
        console.log(response);
        return response.json();
    }).then(function(data) {
        json = data;
        console.log(data)
        
        let container = document.querySelector("#container");
        let astronauts = ""

        for (astronaut of json) {
            astronauts +=  `
            <div class="astronaut">
            <div>
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronaut.hoursInSpace}</li>
                        <li>Active: ${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills}</li>
                    </ul>
            </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>
            `;
        }
        container.innerHTML = astronauts;
    })
})

{/* <div class="astronaut">
   <div class="bio">
      <h3>Mae Jemison</h3>
      <ul>
         <li>Hours in space: 190</li>
         <li>Active: false</li>
         <li>Skills: Physician, Chemical Engineer</li>
      </ul>
   </div>
   <img class="avatar" src="images/mae-jemison.jpg">
</div>
26.6.2.3 */}