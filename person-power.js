let person1={
    name:'Ram', 
    age:2500, 
    power: 'Treta'
  }
  let person2={
    name: 'Krishna', 
    age: 2325, 
    power: 'Dwapar'
  }
  
  function moreAge(per1,per2){
    if(per1.power.length > per2.power.length)
    {
      return per1;
    }
    else{
      return per2;
    }
  }
  let person=moreAge(person1,person2);
  
  console.log(person.name+" is more power.");
  