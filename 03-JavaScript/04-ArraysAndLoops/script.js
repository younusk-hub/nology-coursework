const coaches = ["Andy", "Sam", "Bex"];
console.log(coaches[1]);

const pets = ["Fido", "Rusty", "Jack"];
console.log(pets[2]);

// loops code along
for (let i = 0; i < 5; i++) {
    console.log("The index on this loop was " + i);
};

for (let i = 0; i < coaches.length; i++) {
    console.log(coaches[i]);
};

for (let i = 0; i < pets.length; i++) {
    console.log(pets[i]);
};