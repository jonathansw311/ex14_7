//1 what does the following code return?

new Set([1,1,2,2,3,4])//[1,2,3,4]

//What does the following code return?

//[...new Set("referee")].join("");// an arrary [referee]

//What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);// will return both lines as separtate key and value, as the arrays are only references


function hasDuplicate(array){
const setSize = new Set(array);
if (array.length === setSize.size) 
{ return false} 
else {return true};  

}

function vowelCount(str){
vowels=['a','e','i','o','u'];

 const vowelMap = new Map();
const arry =[...str];
   for(a of arry){       
       if(vowels.includes(a))
       {if(vowelMap.has(a)){
        vowelMap.set(a, vowelMap.get(a)+1)
        
       }
        else vowelMap.set(a, 1)
                    }
       }
       return vowelMap;
    }
    

