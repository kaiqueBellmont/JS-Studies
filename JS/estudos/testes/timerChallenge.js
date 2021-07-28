const theOneFunc = delay => {
    console.log(`Hello after ${delay} seconds`);
  };
  for(let i = 1; i < 6; i++){
    setTimeout(theOneFunc, 1 * 1000, 1);
    console.log(i);
  }
  console.log("Done");