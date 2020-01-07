//Write a JavaScript program to capitalize the first letter of each word of a given string.
const Capitalize = query =>{
    const params = query.split(" ");
    return params.map(word =>{
        return word[0].toUpperCase() + word.substr(1);
    });
};

console.log(Capitalize("arsalan pikachu yeah"));

//Write a JavaScript program to find the largest of three given integers.
const Max = (num1, num2, num3) =>{
  const arr = [num1, num2, num3];
  return arr.sort((a,b) => a-b)[2];
};

console.log(Max (1,0,1));
console.log(Max (0,-10,-20));
console.log(Max (1000,510,440));

//Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.
const Right = str => {
  if (str.length >= 3){
      const shift = str.substring(str.length - 3, str.length) + str.substring(0, str.length - 3);
      return shift;
  } else{
      return str;
  }
};

console.log(Right("Python"));
console.log(Right("JavaScript"));
console.log(Right("Hi"));

/*Write a JavaScript program to find the types of a given angle.
Types of angles:
• Acute angle: An angle between 0 and 90 degrees.
• Right angle: An 90 degree angle.
• Obtuse angle: An angle between 90 and 180 degrees.
• Straight angle: A 180 degree angle.
*/

const Angle_Type = num => {
    if (num > 0 && num < 90) return "Acute Angle";
    else if (num === 90) return "Right Angle";
    else if (num > 90 && num < 180) return "Obtuse Angle";
    else if (num === 0 || num === 180) return "Straight Line";
    else return "Idk";
};

console.log(Angle_Type(47));
console.log(Angle_Type(90));
console.log(Angle_Type(145));
console.log(Angle_Type(180));

/*Write a JavaScript program to find the maximum possible sum of
some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.
 */
const Array_Max_Sum = (nums, k) => {
    let largest = nums[0] + nums[1];
    let current = 0;
    for (let i = 0; i <= nums.length - k; i++){
        for(let x = 0; x < k; x++){
            current = current + nums[i + x];
        }
        if (current > largest) {
            largest = current;
        }
        current = 0;
    }

    return largest;
};

console.log(Array_Max_Sum([1, 2, 3, 14, 5], 2));
console.log(Array_Max_Sum([2, 3, 5, 1, 6], 3));
console.log(Array_Max_Sum([9, 3, 5, 1, 7], 2));
