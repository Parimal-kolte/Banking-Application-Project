import React from 'react'
import { useEffect,useState } from 'react';
const ShowCustomer = () => {

    const [Customer, setCustomer] = useState([]);
    useEffect(() => {
        async function getData() {

            try {
                const output = await fetch("http://localhost:4000/getcustomer")

                const cons = await output.json()

                setCustomer(cons);

            } catch (err) {
                console.log(err)
            }

        }


        getData()
    }, [])
  return (
    <div className='mt-5 p-5'>
    <div className="container">
    <h2 className='d-flex justify-content-center'>Bank Customer's</h2>
       <table className="table shadow  bg-body rounded mt-3">
           <thead>
               <tr>
                   <th scope="col">Ac.number</th>
                   <th scope="col">Customer Name</th>
                   <th scope="col">Email id</th>
                   <th scope="col"> Date of Birth</th>
                   <th scope="col"> Contact number</th>
                   <th scope="col">Ac. Balance</th>
                   <th scope="col">Address</th>
                   
               </tr>
           </thead>
           <tbody>


               {
                   Customer.map((data) =>
                       <tr> 

                           <td>{data.ac_num}</td>
                           <td>{data.name}</td>
                           <td>{data.email}</td>
                           <td>{data.dob}</td>
                           <td>{data.phone}</td>
                           <td>{data.deposit}</td>
                           <td>{data.address}</td>

              


                       </tr>
                     
                   )
                   
               }

           </tbody>
       </table>
        
   
   </div>
    
  </div>
  )
}

export default ShowCustomer