const array = [1, 2, 3, 4, 5, 21, 22, 23, 24, 222];

const result = array.map((num) => {
  return num + 1;
});

for (let i = 0; i < array.length; i++) {
  const element = array[i];

  console.log('array: ', array);
  console.log('i: ', i);
}

if (result > 21) {
  return;
}
