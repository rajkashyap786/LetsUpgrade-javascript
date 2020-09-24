//   Create a array containing 5 objects with properties {name,age,city,salary}
// A. Display all the objects in a table.
// B. Create a search functionality for name and city.
// C. Delete button to delete records.
// D. Data is not permanent.


let ram=[{
         name:"Ramesh",
         age:21,
         city:"Allahabad",
         salary:25000,
        },
        {
         name:"Mahesh",
         age:23,
         city:"Kanpur",
         salary:28000,
        },
        { 
          name:"Suresh",
         age:24,
         city:"Lucknow",
         salary:30000,
        },
        {
           name:"Rajan",
          age:34,
         city:"Varnasi",
          salary:24000,
        },
       {
          name:"Amit",
          age:31,
         city:"Gorakpur",
          salary:35000,
}
]

function display(maindata)
{
  let content="";
  maindata.forEach(function(rama,index){
    let currentrow=`<tr>
    <td>${index+1}</td>
    <td>${rama.name}</td>
    <td>${rama.age}</td>
    <td>${rama.city}</td>
    <td>${rama.salary}</td>
    <td><button onclick="deleteRecord(${index})">Delete</button></td>
    </tr>`;
    content = content + currentrow;
  });
  document.getElementsByClassName("tablecontent")[0].innerHTML=content;
}
display(ram);

function searchname()
{
  let searchvalue= document.getElementById("search").value;
  let searchdata = ram.filter(function(rama){
   return (rama.name.toUpperCase().indexOf(searchvalue.toUpperCase())!=-1)||(rama.city.toUpperCase().indexOf(searchvalue.toUpperCase())!=-1);
    });
  display(searchdata);
}

function deleteRecord(index)
{
  ram.splice(index,1)
  display(ram);
}