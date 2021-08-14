let person1={
  name:'Ram', 
  age:25, 
  yuga: 'Treta'
}
let person2={
  name: 'Krishna', 
  age: 31, 
  yuga: 'Dwapar'
}

function moreAge(per1,per2){
  if(per1.age > per2.age)
  {
    return per1;
  }
  else{
    return per2;
  }
}
let person=moreAge(person1,person2);

console.log(person.name+" age is "+person.age);
