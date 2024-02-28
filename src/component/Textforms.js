import React, { useState } from 'react'

export default function Textforms() {
  const[weight,setWeight] = useState("");
  const[height,setHeight] = useState("");
  let[bmiValue,setbmiValue] = useState("");
  let[bmiStatus,setbmiStatus] = useState("");
  
  const handleWeight = (event)=>{
    setWeight(event.target.value);
}
const handleHeight = (event)=>{
  setHeight(event.target.value);
}
const handleCalcBMI = ()=>{
  let newWeight = weight;
  let newHeight = height;
  let bmiVal = (newWeight) / ((newHeight/100)*(newHeight/100));
  bmiValue = setbmiValue(bmiVal);
  if(bmiVal<18.5){
    let bmiStatus = 'Underweight';
    setbmiStatus(bmiStatus);
    
  }
    else if(bmiVal>18.5 && bmiVal<24.9){
      let bmiStatus = 'Healthy Range';
      setbmiStatus(bmiStatus);
    console.log(bmiStatus);
    }
    else if(bmiVal>=25 && bmiVal<=29.9){
      let bmiStatus = 'Overweight';
      setbmiStatus(bmiStatus);
    console.log(bmiStatus);
    }
    else if(bmiVal>=30 && bmiVal<=39.9){
      let bmiStatus = 'Obesity';
      setbmiStatus(bmiStatus);
    console.log(bmiStatus);
    }
    else{
      let bmiStatus = 'Severe Obesity';
      setbmiStatus(bmiStatus);
    console.log(bmiStatus);
    }
 

  
}


  return (
    <>
   <nav className="navbar bg-secondary my-auto">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">BMI Calculator</a>
    </div>
</nav>
      <div className='container mx-auto my-3'>
      <div className="col-md-2">
  <label htmlFor="exampleFormControlInput1" className="form-label">Enter your height(in cm):</label>
  <input type="text" value={height} className="form-control" id="userAge" onChange={handleHeight}/>
  
</div>
<div className="col-md-2 my-4">
  <label htmlFor="exampleFormControlInput1" className="form-label">Enter your weight(in kg):</label>
  <input type="text" value={weight} className="form-control" id="userAge" onChange={handleWeight}/>
  
</div>
<button type="button" className="btn btn-primary" onClick={handleCalcBMI} >Calculate your BMI</button>

<div className='container my-4'>
    <p>Your BMI is:  <h6>{bmiValue}&nbsp;&nbsp;kg/m<sup>2</sup></h6></p>
    <p className='status'>Your BMI status is: <h6>{bmiStatus}</h6></p>
    <h2><u>About BMI(Body Mass Index):</u></h2>
    <p>
    <i>BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. 
    </i>
    </p>
    </div>
      </div>
      <p>demo text</p>
    </>
  )
}
