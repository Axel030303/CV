let subject = "javascript";
console.log("Hello " + subject);

let chooseColor = document.getElementById("chooseColor");
let colorBtn = document.getElementById("colorBtn");

let age =document.getElementById ("age");
let testage = document.getElementById("testage");
let content = document.getElementById("content");

colorBtn.addEventListener("click", (e) => {
    console.log("Klicka på knapp")

    let chosenColor = chooseColor.value;
    console.log(chosenColor);
    document.body.style.backgroundColor =chosenColor;

})

testage.addEventListener("click", (e) => {
    let getage = age.value;

    console.log("age" + getage);

    let yearsleft =18 - getage; 

    if (getage <18) {
        console.log("mindre än 18");
        content.innerText = "Sorry, kom tillbaks om " + yearsleft + "år!";
    } else {
        content.innerText = "vassego ta en öl!";
        console.log("Större än 18");
    }
})