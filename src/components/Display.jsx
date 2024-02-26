import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Display = () => {
   const [data,setData]=new useState([])
   const getData=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(
        (response)=>{
            setData(response.data)
        }
    )
   }
    useEffect(()=>{getData()},[])
    
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <h1>User List</h1>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>

    </tr>
  </thead>
  <tbody>

        {
            data.map(
                (value,index)=>{
                    return <tr> 
                    <td>{value.name}</td>
                    <td>{value.username}</td>
                    <td>{value.email}</td>
                    <td>{value.phone}</td>
                    <td>{value.website}</td>
                   
                  </tr>
                }
            )
        }
      
     
   
  </tbody>
</table>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Display