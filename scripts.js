console.log(`We have ${villagers.length} villagers!`);

const villagersCount = document.querySelector(".villagers-count");
console.log(villagersCount);
villagersCount.innerText = villagers.length;

const villager2 = villagers[1];
console.log(villager2);

console.log(document.getElementById("villager-2"));

for (let index = 0; index < villagers.length; index++) {
  /* 
            <div class="villager-bio" style="background-color: #e8b010; color: #fffce9" id="villager-1">
                <img class="villager-image" src="https://acnhapi.com/v1/images/villagers/12" alt="Villager 1 profile">
                <h2 class="villager-name">Nate</h2>
    
                <div class="more-info hidden">
                    <ul>
                        <li>Personality: <strong><span class="personality">Lazy</span></strong></li>
                        <li>Gender: <strong><span class="gender">Male</span></strong></li>
                        <li>Catch Phrase: <strong><span class="catch-phrase">yawwwn</span></strong></li>
                    </ul>
                </div>
    
                <button style="color: #e8b010; background-color: #fffce9; border-color: #e8b010">Toggle More Information</button>
            </div>
            */

  const element = villagers[index];
  console.log(element.name["name-USen"]);

  const villagerBio = document.createElement("div");
  villagerBio.classList.add("villager-bio");
  villagerBio.setAttribute("id", "villager-" + (index + 1));
  villagerBio.style.backgroundColor = element["bubble-color"];
  villagerBio.style.color = element["text-color"];

  // Get Name
  const villagerName = document.createElement("h2");
  villagerName.innerText = element.name["name-USen"];
  villagerName.classList.add("villager-name");
  villagerBio.append(villagerName);

  // Get Image
  const villagerImage = document.createElement("img");
  villagerImage.setAttribute("src", element.image_uri);
  villagerImage.classList.add("villager-image");
  villagerBio.prepend(villagerImage);

  // More info section
  const moreInfo = document.createElement("div");
  moreInfo.classList.add("more-info");
  villagerBio.append(moreInfo);

  // Create UL
  const ul = document.createElement("ul");
  moreInfo.append(ul);

  // Get Personality
  const personality = document.createElement("li");
  personality.innerText = "Personality: " +  element.personality; // #villager-1 .personality

  // Get Gender
  const gender = document.createElement("li");
  gender.innerText = "Gender: "  + element.gender;

  // Get Catch Phrase
  const catchPhrase = document.createElement("li");
  catchPhrase.innerText = "Catch Phrase: " + element["catch-phrase"];

  // Add each li to the ul
  ul.append(personality);
  ul.append(gender);
  ul.append(catchPhrase);

  console.log(villagerBio);


  const button = document.createElement('button');
  button.style.backgroundColor = element["text-color"];
  button.style.color = element["bubble-color"];

  button.innerText = "Toggle More Information";

  button.addEventListener("click", function (event) {
    console.log(event);
    // button.setAttribute('class', 'hidden')
    const moreInfo = document.querySelector(
      "#villager-" + (index + 1) + " .more-info"
    );
    moreInfo.classList.toggle("hidden");
  });

  villagerBio.append(button);

  document.querySelector('.villagers').append(villagerBio);
}
