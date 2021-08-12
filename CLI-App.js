const readlineSync = require('readline-sync');

let highestNumberStudent=[];
let studentData=[];
for(let i=0;i<5;i++)
{
  let name=readlineSync.question("Enter the name of student-"+(i+1)+": ");
  let uTestMark=readlineSync.question("Enter unit test marks: ");
  let pFinalMark=readlineSync.question("Enter pre-final marks: ");
  studentData.push(
    {
      fullname:name, 
      unit_test_marks:uTestMark, 
      pre_final_marks:pFinalMark
    }
  );
}
let highestNumber=0
// let name='';
// let avg=0;

for(let i=0;i<5;i++)
{
  if((parseInt(studentData[i].unit_test_marks) + parseInt(studentData[i].pre_final_marks) > highestNumber)){
  
    highestNumber=parseInt(studentData[i].unit_test_marks) + parseInt(studentData[i].pre_final_marks);
    
  }
}
for(let i=0;i<5;i++)
{
  if(parseInt(studentData[i].unit_test_marks) + parseInt(studentData[i].pre_final_marks) ==  highestNumber){

    highestNumberStudent.push({name:studentData[i].fullname,number:highestNumber, avg:highestNumber/2});
    
  }
}
for(let i=0;i<highestNumberStudent.length;i++)
{
  console.log(highestNumberStudent[i].name+" got "+highestNumberStudent[i].number+" marks of this exam.\n");
}

let avgPrint=readlineSync.question("Display average if yes type 'y' otherwise enter any key\n");
if(avgPrint.toLowerCase() == 'y'){
  for(let i=0;i<highestNumberStudent.length;i++){
    console.log("Name: "+highestNumberStudent[i].name+"\n");
    console.log("Average is: "+highestNumberStudent[i].avg+"%");
  }
}
console.log(highestNumberStudent);
