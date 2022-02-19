import demo from './lib/demo';

async function initDemo () {
  const data = await demo();
  console.log(data);
}

initDemo();

const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log([...arr1, ...arr2]);
