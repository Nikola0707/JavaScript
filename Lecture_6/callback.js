const calc = function (x, y, type) {
    if (type === 'add') {
      return x + y;
    } else if (type === "multiply") {
      return x * y;
    }
  };
  
  // console.log(calc(2, 3, 'add'));
  // console.log(calc(2, 3, 'multiply'));
  
  const add = (num1, num2) => {
    return num1 + num2;
  };
  
  const multiply = function (a, b) {
    return a * b;
  }
  
  const caclWithCallback = (x, y, callback) => {
    return callback(x, y);
  }
  
  console.log('Sum', caclWithCallback(3, 4, function (x, y) {
    return x + y;
  }));
  
  console.log('Used add func', caclWithCallback(5, 7, add));
  console.log('Mutli', caclWithCallback(3, 4, multiply));
  
  
  console.log('Hello');
  
  setTimeout(() => console.log('Tick Hello'), 1000);
  
  console.log('Hey there');
  
  setTimeout(() => console.log('Tick with zero seconds'), 0);
  
  
  // [1, 1, 2]
  // [1, 2] .. 2
  
  // [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
  // [0, 1, 2, 3, 4] ... 5
  
  const removeDuplicates = (numberList) => {
    const numLength = numberList.length;
    let lastNumber = NaN;
    let count = 0;
  
    for (let i = 0; i < numLength; i++) {
      if (numberList[i] !== lastNumber) {
        numberList[count] = numberList[i];
        lastNumber = numberList[i];
        count++;
      }
    }
  
    return count;
  }
  
  const nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  console.log(removeDuplicates(nums1));
  
  const nums2 = [1, 1, 2];
  console.log(removeDuplicates(nums2));
  
  
  const removeDuplicatesFromArrayWithSet = [...new Set(nums1)];
  console.log('remove', removeDuplicatesFromArrayWithSet);
  
  
  // "abacabad"
  // "abacabaabacaba"
  
  const firstUniqueCharInString = (string) => {
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      // first approach
      // if (string.indexOf(char) == i && string.indexOf(char, i + 1) == -1) {
      //   return char;
      // }
  
      // second approach
      if (string.indexOf(char) === string.lastIndexOf(char)) {
        return char;
      }
    }
    return "there are no chars in this string that do not repeat";
  }
  
  const string1 = "abatcabadx";
  console.log(firstUniqueCharInString(string1));
  
  const string2 = "abacabaabacaba";
  console.log(firstUniqueCharInString(string2));
  
  const checkDuplicates = (nums) => {
    const numLength = nums.length;
    let lastNumber = NaN;
    let count = 0;
    for (let i = 0; i < numLength; i++) {
      if (nums[i] !== lastNumber) {
        nums[count] = nums[i];
        lastNumber = nums[i];
        count++;
      }
    }
    return count;
  }
  
  const removeDuplicatesCallback = (numberList, callback) => {
    return callback(numberList);
  }
  
  const numberListThree = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7];
  console.log(removeDuplicatesCallback(numberListThree, checkDuplicates));