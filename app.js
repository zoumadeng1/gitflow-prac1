const array = [1, 2, 3, 4, 5];

const result = array.map((num) => {
  return num + 1;
});

console.log(result);

for (let i = 0; i < array.length; i++) {
  const element = array[i];

  console.log('array: ', array);
  console.log('i: ', i);
}

if (result > 5) {
  return;
}
