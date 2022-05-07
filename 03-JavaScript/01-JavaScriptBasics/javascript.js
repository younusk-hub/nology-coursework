function calculateYearUntilRetirement(event) {
    const currentAge = event.target.value;
    const yearsLeft = 65 - currentAge;
    alert(yearsLeft)
}

function getGreetingInFrench(event) {
    const greeting = event.target.value;

    if (greeting == "hello") {
        alert("bonjour");
    } else if (greeting == "bye") {
        alert("au revoir");
    } else {
        alert("did not recognise");
    };
};

function handleCalculatedGrade(event) {

    let grade = event.target.value;
    grade = grade.toUpperCase();

    let percentage;
    switch (grade) {
        case "A":
            percentage = "90%-100%";
            break;
        case "B":
            percentage = "75%-90%";
            break;
        case "C":
            percentage = "50%-75%";
            break;
        case "D":
            percentage = "25%-50%";
            break;
        case "E":
            percentage = "0%-25%";
            break;
        default:
            return alert("invalid grade")
    };
    alert("The percentage was " + percentage);
};

const number = 2;
if (number >= 0) {
    console.log("positive");
} else {
    console.log("negative")
};

switch (new Date().getDay()) {
    case 0:
        console.log("It's already the weekend");
        break;
    case 1:
        console.log("4 days left...");
        break;
    case 2:
        console.log("3 days left...");
        break;
    case 3:
        console.log("2 days left...");
        break;
    case 4:
        console.log("1 day left...");
        break;
    case 5:
        console.log("0 days left...");
        break;
    case 6:
        console.log("It's already the weekend");
        break;
};

const veg = "brocolli";

switch(veg) {
    case "potato" || "carrot":
    case "carrot":
        console.log("1.29 per kg");
        break;
    case "brocolli":
        console.log("1.5 per kg");
        break;
    case "cabbage":
        console.log("1.6 per kg");
        break;
    case "asparagus":
        console.log("1 per kg");
        break;
};

