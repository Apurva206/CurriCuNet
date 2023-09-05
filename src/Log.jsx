import React, { useEffect, useState } from 'react';

function Log() {
  const data = { name: "", email: "", password: "" };
  const [InputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log('Registered');
  }, [flag]);

  function handleData(e) {
    setInputData({ ...InputData, [e.target.name]: e.target.value });
    console.log(InputData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (InputData.name === "" || InputData.email === "" || InputData.password === "") {
      alert("Please fill in all fields");
      return;
    } else {
      setFlag(true);
    }
  }

  return (
    <>
      <pre>{flag ? <h2>Hi {InputData.name}, Logged in Successfully</h2> : ""}</pre>
      <form className='container' onSubmit={handleSubmit}>
        <div className='header text-2xl font-bold text-center pt-[40px]'>
          <h1>Login to your account</h1>
        </div>
        <div className='text-center pt-[20px]'>
          <input type='text'className='border-2 border-SlateGrey' placeholder='Enter your Name'
            name='name' value={InputData.name} onChange={handleData}></input>
        </div>
        <div className='text-center'>
          <input type='text'className='border-2 border-SlateGrey' placeholder='Enter your Email'
            name='email' value={InputData.email} onChange={handleData}></input>
        </div>
        <div className='text-center'>
          <input type='text'className='border-2 border-SlateGrey' placeholder='Enter your Password'
            name='password' value={InputData.password} onChange={handleData}></input>
        </div>
        <div className='text-center'>
          <button type='submit'className='border-[2px] rounded-[6px] bg-SlateGrey text-white hover:text-grey mt-[6px]'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default Log;