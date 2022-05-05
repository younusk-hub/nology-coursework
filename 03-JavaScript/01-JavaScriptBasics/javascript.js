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