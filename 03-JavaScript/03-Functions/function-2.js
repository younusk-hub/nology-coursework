const getDescription = (partner, amountOfChildren, location, jobTitle) => {
    //const message = "I am currently a " + jobTitle + " living in " + location + ", and married to " + partner + " with " + amountOfChildren + " kids."
    const message = `I am currently a ${jobTitle} living in ${location}, and married to ${partner} with ${amountOfChildren} kids.`
    console.log(message)
};
getDescription("no one", 0, "London", "Software Engineer");


const calculateSupply = (currentAge, amountOfSnickersPerDay) => {
    const maxAge = 90;
    const amountOfSnickersPerLifetime = (amountOfSnickersPerDay * 365) * (maxAge - currentAge);
    const message = `You will need ${amountOfSnickersPerLifetime} bars of Snickers to last you until the ripe old age of ${maxAge}.`
    console.log(message);
};
calculateSupply(28, 4);


const celsiusToFahrenheit = (celsius) => {
    const celsiusInF = celsius * 9 / 5+ 32;
    console.log(celsiusInF);
}; 