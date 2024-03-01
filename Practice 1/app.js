/*********************************************************************************/
/******************************Practice 1*****************************************/
/*********************************************************************************/


//Question 1 Create a variable of type string and try to add a number to it.

let str = "Mustafa";
let num = 10;
console.log(str+num);
//OR
//let res = str + 10; //op: john10 | type: string
//console.log(res);

//Question 2 Use type of operator to find the datatype of the sting in last question 

console.log(typeof(str+num)); //op: john10 | type: string

//Question 3 Create a const object in javascript Can you change it to hold a number later?

const obj = {
    name: "Mustafa",
    age: 20,
    city: "khi"
};

console.log(obj); //op: {name: 'Mustafa', age: 20, city: 'khi'} 

// obj = 5; 

//console.log(obj); //op: TypeError: Assignment to constant variable. we cannot assign const obj another value(number or string or obj or array)

//Question 4 Try to add a new key to the const object in Problem 3. Were you able to do it?

obj.name="Ghulam Mustafa"; // OR obj['name']="Ghulam Mustafa";

console.log("'name' updated",obj); //op: {name: 'Ghulam Mustafa', age: 20, city: 'khi'} So we can't reassign the const obj but can change the exixting obj properties
// we can also add more properties to obj
obj.education="graduate"; //OR obj['education']="graduate";

console.log("new property 'eduation' added",obj); //op: {name: 'Ghulam Mustafa', age: 20, city: 'khi', education: 'graduate'}

//Question 5 Write a JS program to create a word meaning dictionary of 5 words.

const Dictionary={
    arrogant:"smug",
    bureaucracy:"non-electable govt officials",
    colleague:"coworker",
    diversity:"variety",
    empathy:"the ability to sense other people's emotions"
}

console.log(Dictionary); //op: {arrogant:'smug', bureaucracy: 'non-electable govt officials', colleague: 'coworker', diversity: 'variety', empathy: 'the ability to sense other people's emotions'}

//Or to get any specific value you can get it through its key
console.log(Dictionary.arrogant); //op: smug
console.log(Dictionary.bureaucracy); //op: non-electable govt officials
console.log(Dictionary.colleague); //op: coworker
console.log(Dictionary.diversity); //op: variety
console.log(Dictionary.empathy); //op: the ability to sense other people's emotions



/*********************************************************************************/
/******************************The End********************************************/
/*********************************************************************************/