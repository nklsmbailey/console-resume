const firstName = "nicholas";
const middleName = "mitchell";
const lastName = "bailey";
const fullName = firstName + " " + middleName + " " + lastName;
const fullNameCaps = fullName.toUpperCase();


displayDescription(fullNameCaps, "Junior Full Stack Developer / Graphic Designer", "I like cats");

function displayDescription(myName, myCareer, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription + ".");
    console.log(" ");
}

console.log("My Interests: ");

displayInterests("Books"); 
displayInterests("Hiking"); 
displayInterests("Greek Orthodox Church"); 
displayInterests("Hiking"); 
displayInterests("My beautiful wife, five cats and two chickens"); 


function displayInterests(myInterest) {
    console.log("*  " + myInterest); 
}

console.log("My Previous Experiences: ");

displayPosition("Jacksonville Senior Activity Center", "Senior Center Assistant Director", "Assisting and engaging Senior adults in daily activities");
displayPosition("NY Times Regional Media Center", "Graphic Designer", "Designed original advertising for print, color and black and white");
displayPosition("MailSouth", "Prepress Technician", "Processed digital files from clients and salespeople to complete preflight work.");


function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("*  " + companyName + ", " + jobTitle + " - " + jobDescription + ". ");
};

console.log("My Skills: ");

displaySkill("Photoshop", true); 
displaySkill("Chanter", false); 
displaySkill("Weight lifting", false); 
displaySkill("InDesign", true); 
displaySkill("Running", true); 
displaySkill("Layout", true); 
displaySkill("Cat Herder", true); 
displaySkill("Teenager Motivator", false);
displaySkill("Traveler", false); 
displaySkill("Book Collector", true); 

function displaySkill(mySkill, bamBam) {
    if(bamBam == true) { // If (bamBam) true ...BAM: and 'mySkill'.
        console.log("*  BAM: " + mySkill);
    } else if(bamBam == false) {
        console.log("*  " + mySkill); // Else If (bamBam) false ...just 'mySkill'.
    };
}