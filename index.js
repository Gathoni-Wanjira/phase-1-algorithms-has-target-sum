function hasTargetSum(array, target) {
  // const sumArray = array.reduce((total, amount) => total + amount) 
  // if (sumArray === target){
  //   return true;
  // } 
  // else{
  //   return false;
  // } 
  let total 
  for(let i =0; i< array.length; i++){
    console.log(array[i])
     for (let j =0 ; j < array.length; j++){
     console.log(array[j])
      total = (array[i] + array[j])
      console.log(total);
      if (total === target && i !== j){
        return true;
      }
      else if (total !== target){
        return false;
      }
     }
  }

  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  i is a placeholder for each element in array
  loop through the array. let the first array element to have 0 index. 
  then let the condition to state that we are looping trough the whole array thus array.length
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
