//QUES1 Create a webpage containing an image and 3 buttons
// A . Onclick of the second button change the existing image to a new image
// B . On click of the third button change it once again
// C . On click of first button, first image should come back
function imagechange()
{
  const item = document.getElementById("image");
  const newurl = "photo/TGR.jpg";
  item.src = newurl;
}
function imagechange1()
{
  const item = document.getElementById("image");
  const newurl = "photo/cartoon.jpg";
  item.src = newurl;
}
  function imagechange2()
{
  const item = document.getElementById("image");
  const newurl = "photo/animal.jpg";
  item.src = newurl;
}
//QUES2 Create a webpage conataining two input fields and a buttons
//A. Write something in first input 
//B. On click of the button,the content of input one should be copied in the second input  
function copytext()
{
 let txt = document.getElementById("copiedtxt");
  let copy = document.getElementById("entertxt");
    
  txt.value = copy.value;
}

//QUES3 Create an array of objects having the following properties
//A. {name(string),age(number),country(string),hobbies array(string[])}
//B. Write a function to display all the objects on the console
 
let ram=[{
          name:"bharat",
          age:25,
          country:"india",
          hobbies:["music","bookreading","cricket","dancing"],
          },
         {
          name:"lakshman",
          age:23,
          country:"india",
          hobbies:["singing","cooking","hockey","dancing"],
         },
        {
          name:"shatrughan",
          age:21,
          country:"bhutan",
          hobbies:["music","bookreading","chess","writing"],
        },
        {
          name:"mukesh",
          age:41,
          country:"bhutan",
          hobbies:["music","bookreading","football","dancing"],
        },
       {
        name:"ramesh",
        age:51,
        country:"bhutan",
        hobbies:["music","travelling","acting","dancing"],
      }
    ]
      function display()
      {
        for(let i=0;i<ram.length;i++)
        {
          console.log(ram[i]);
        }
      }
     display();

// QUES4 Following the third question
// A. Write a function to display all the objects having age less than 30.
function age()
{
  for(let i=0;i<ram.length;i++)
  {
    if (ram[i].age < 30)
  {console.log(ram[i])}
  }
}
age();


// B. Write a function to display all the objects having country india.

function country()
{
  for(let i=0;i<ram.length;i++)
  {
    if(ram[i].country == "india")
    {console.log(ram[i])}
  }
}
country();