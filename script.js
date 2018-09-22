//1
const firstWord = 'Hello';
const secondWord ='World';
const text = `${firstWord}, ${secondWord}`;

//2
const multiply = (a, b = 1) => console.log(a * b);

//3
const average = (...args) => {
  let sum = 0;
  args.forEach(arg => sum += arg/args.length);
  return console.log(sum);
}

//4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

//5
const strange = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstname, , lastname] = strange
console.log(`${firstname} ${lastname}`);