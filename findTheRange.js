const findTheTwo = () => {
  let array = [28, 43, -12, 30, 4, 0, -36];

  const smallestNumber = Math.min(...array);
  console.log("Smallest Value:", smallestNumber);
  const largestNumber = Math.max(...array);
  console.log("Largest Value:", largestNumber);
};

findTheTwo();
