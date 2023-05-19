//Задача 1

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false; 
    }
  
    return arr1.every((value, index) => value === arr2[index]);
  }

//Задача 2

function getUsersNamesInAgeRange(users, gender) {
    let filteredUsers = users.filter(user => user.gender === gender);
    
    if (filteredUsers.length === 0) {
      return 0; 
    }
    
    let ages = filteredUsers.map(user => user.age);
    let sum = ages.reduce((total, age) => total + age, 0);
    let average = sum / ages.length;
    
    return average.toFixed(1);
}