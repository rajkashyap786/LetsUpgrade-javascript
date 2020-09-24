// QUES 2. Create a blank array and later on create a add bus functionality bus object contains{name,source,destination,number,passenger capacity}
// A. A form to add new bus.
// B. Display data in table format.
// C. Search by source and destination.
// D. Data should be stored permanently in localstorage.
window.onload=function()
{let ram=[
  {
    busname:"tri",
    source:"ftp",
    destination:"ald",
    busnumber:24,
    passengercapacity:54,
  },
  {
    busname:"dri",
    source:"kan",
    destination:"var",
    busnumber:23,
    passengercapacity:34,
  },
  {
    busname:"pri",
    source:"lukn",
    destination:"guj",
    busnumber:20,
    passengercapacity:31,
  },
]
 if(localStorage.getItem("ram")==null)
 {
   let stringram = JSON.stringify(ram);
   localStorage.setItem("ram",stringram);
 }
};
function display(tab = undefined)
{
  let content="";
  if(tab==undefined)
  {
    ram = JSON.parse(localStorage.getItem("ram"));
  }
  else
  {
    ram = tab;
  }
  ram.forEach(function(rama,index){
    let currentrow=`<tr>
    <td>${index+1}</td>
    <td>${rama.busname}</td>
    <td>${rama.source}</td>
    <td>${rama.destination}</td>
    <td>${rama.busnumber}</td>
    <td>${rama.passengercapacity}</td>
     </tr>`;
    content = content + currentrow;
  });
  document.getElementsByClassName("tablecontent")[0].innerHTML=content;
}
display();

function addbus(event)
{
  event.preventDefault();
  let rama1={};
  let busname=document.getElementById("name").value;
  let source=document.getElementById("source").value;
  let destination=document.getElementById("destination").value;
  let busnumber=document.getElementById("number").value;
  let passengercapacity=document.getElementById("passCap").value;
  
  rama1.busname=busname;
  rama1.source=source;
  rama1.destination=destination;
  rama1.busnumber=Number(busnumber);
  rama1.passengercapacity=Number(passengercapacity);
  
  let ram = JSON.parse(localStorage.getItem("ram"))
  ram.push(rama1);
  let stringram = JSON.stringify(ram);
  localStorage.setItem("ram",stringram);
  
  display();

  document.getElementById("name").value="";
  document.getElementById("source").value="";
  document.getElementById("destination").value="";
  document.getElementById("number").value="";
  document.getElementById("passCap").value="";
}
function searchyourbus()
{
  let searchvalue = document.getElementById("searchbus").value;
  let ram = JSON.parse(localStorage.getItem("ram"));
  let newdata = ram.filter(function(rama){
   return (rama.source.toUpperCase().indexOf(searchvalue.toUpperCase())!=-1)||(rama.destination.toUpperCase().indexOf(searchvalue.toUpperCase())!=-1);
  });
  
  display(newdata);
}