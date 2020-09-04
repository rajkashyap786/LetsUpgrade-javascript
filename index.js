//QUESTION1 PROGRAM TO FIND PARTICULAR CHARACTER IN A STRING?

let na="ramchandra"
console.log(na[0])

//QUESTION2 PROGRAM TO CONVERT MINUTES TO SECONDS?

let min = 15;
let sec = 60;
console.log(min+ "minutes in seconds are" + min*sec  +"seconds")


//QUESTION3 PROGRAM TO SEARCH FOR A ELEMENT IN A ARRAY OF STRINGS?

let data = ["laptop","mouse","keybord","monitor","led","mobile"];

for(let i=0;i<data.length;i++)
{
 
  if(data[i]=="laptop")
  {
  console.log(data[i]);
  }
  break; 
}

// QUESTION5 PRINT AN ARRAY IN REVERSE ORDER?
let data1 = ["laptop","mouse","keybord","monitor","led","mobile"];

for(let i=data1.length;i>=0;i--)
{
  console.log(data1[i]);
}



// QUESTION4. PROGRAM TO DISPLAY ONLY ELEMENT CONTAINING 'a' IN THEM FROM A ARRAY?
 let arr = ["nitin","aman","amish","kapoor","raman"];
 let p = 0;
 for(let i=0;i<arr.length;i++)
 {
  let word = arr[i];
  for(let j=0;j<word.length;j++)
  {
     if(word[j]=="a")
     {
       console.log(word);
       p++;
     }
  }
 } 