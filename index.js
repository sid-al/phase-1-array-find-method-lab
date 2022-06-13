

function superbowlWin(record){
    function test(w){
        return (w.result === 'W')
    }
    if (record.find(test)){
     return record.find(test).year
    }
}


// filter
const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];


// write a function to print out first name

function printFirstName (array){
    for (const user in array){
        console.log(user.firstName)
    }
    debugger
};

console.log(printFirstName(users));

// write a f() that prints out only user whose favourite color is blue

function blueFilter (array){
    for(const user in array ){
        if(user.favoriteColor === 'blue'){
            console.log(user.firstName)
        }
    }
}



blueFilter(users);
// LOG: Niky
// LOG: Josh
// LOG: Avidor

