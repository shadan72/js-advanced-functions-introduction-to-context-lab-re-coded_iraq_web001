// Your code here

const createEmployeeRecord=(arr)=>{
  return {firstName:arr[0], familyName:arr[1], title:arr[2], payPerHour:arr[3],timeInEvents:[], timeOutEvents:[] }
}
const createEmployeeRecords=(arr)=>{
  
  
  const newArr=[];
   arr.map(emp =>newArr.push(createEmployeeRecord(emp)) );
   return newArr;
};

<<<<<<< HEAD
const createTimeInEvent=(arr,dateIn)=>{
const TimeDate=dateIn.split(" ")
const empObj={type:"TimeIn" , date:TimeDate[0], hour:parseInt(TimeDate[1])}
 arr.timeInEvents.push(empObj)
  return arr
}

const createTimeOutEvent=(arr,dateOut)=>{
const TimeDate=dateOut.split(" ")
const empObj={type:"TimeOut" , date:TimeDate[0], hour:parseInt(TimeDate[1])}
arr.timeOutEvents.push(empObj)
return arr
  
}


const hoursWorkedOnDate=(arr,date)=>{
  
  const timeIn=arr.timeInEvents.find(ele => ele.date === date)
  const timeOut=arr.timeOutEvents.find(ele => ele.date === date)
   let result=(timeOut.hour - timeIn.hour)/100
   return result
  }


const wagesEarnedOnDate=(arr,date)=>{
  return hoursWorkedOnDate(arr,date)* arr.payPerHour
}

const allWagesFor=(arr)=>{
  
  const allWages=arr.timeOutEvents.map(ele => ele.date)
  return allWages.reduce((acc, date)=>{
     return acc + wagesEarnedOnDate(arr,date)
  },0)
}

const findEmployeeByFirstName=(srcArray,firstName)=>{
  
  return srcArray.find(ele => ele.firstName === firstName)
}

const calculatePayroll=(arr)=>{
  return arr.reduce((acc, curr)=>{
    return acc + allWagesFor(curr)
  },0)
  
}
=======
const createTimeInEvent=(arr,date)=>{
const TimeDate=date.split(" ")
const empObj={dateIn:TimeDate[0],timeIn:TimeDate[1]}
return arr.timeInEvents.push(empObj)
  
}

const createTimeOutEvent=(arr,date)=>{
const TimeDate=date.split(" ")
const empObj={dateIn:TimeDate[0],timeIn:TimeDate[1]}

return arr.timeOutEvents.push(empObj)
  
}

const hoursWorkedOnDate=((arr,date)=>{
  
  const timeIn=arr.timeInEvents.find(ele => ele.date === date)
  const timeOut=arr.timeOutEventsEvents.find(ele => ele.date === date)
   let result=(timeOut.hour - timeIn.hour)/100
   return result
  })
}





>>>>>>> 9e0a35f718084d92d7c884b60e7c5abbc5add196









