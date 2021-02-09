const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profileBio = "";

rl.question(`What's your name?  `, (name) => {
  rl.question(`What are your preferred pronouns?   `, (pronouns) => {
    rl.question(`What's an activity you like doing?   `, (activity) => {
      rl.question(`What's your favourite food?   `, (food) => {
        rl.question(`What's your favourite way to relax?   `, (relax) => {

          console.log(`${name} (${pronouns}) loves ${activity}. ${name} gets energy for ${activity} by eating ${food}. After a long day at the ${activity} store, ${name} likes to relax by ${relax}. So cool!`);
     
         rl.close();
        });
      });
    });
  });
});



console.log(profileBio);

// ask question
// push input to a variable string
// after all questions are answered, return the string, madlibs style