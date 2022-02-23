import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Selecciona a quin pla de Pensions vols aportar:', (answer:String) => {
  console.log(answer);
});
