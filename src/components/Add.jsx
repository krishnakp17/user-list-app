import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {
    const [input,setInput]=new useState({"name":"","uname":"","mail":"","phn":"","web":""})
  const inputHandler=(event)=>{
      setInput({...input,[event.target.name]:event.target.value})
  }
  const readValues=()=>{
      console.log(input)
      if (!input.name ||!input.uname||!input.mail||!input.phn||!input.web) {
          alert("Fill all the fields")
          
      } else {
          alert("Success")
      }
      setInput(
          {"name":"","uname":"","mail":"","phn":"","web":""}
      )
  }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name='uname' value={input.uname} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" className="form-control" name='mail' value={input.mail} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control" name='phn' value={input.phn} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Website</label>
                            <input type="text" className="form-control" name='web' value={input.web} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add