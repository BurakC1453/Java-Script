var firstName ;
var lastName ;
var timeOfDay ;
var greeting ;

function createGreeting(firstName, lastName, timeOfDay)
{
greeting = getGreeting(timeOfDay) + ", " + formatName(firstName, lastName);
return greeting;
}

function getGreeting(timeOfDay)
{
timeOfDay = timeOfDay.toLowerCase(); 
timeOfDay = timeOfDay[0].toUpperCase() + timeOfDay.slice(1);
timeOfDay = "Good " + timeOfDay;
return timeOfDay;
}

function formatName(firstName, lastName)
{
firstName = firstName.toLowerCase();
firstName = firstName[0].toUpperCase() + firstName.slice(1);
return firstName + " " + lastName;
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));