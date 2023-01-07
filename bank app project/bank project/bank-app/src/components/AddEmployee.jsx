import React from 'react'
import './addEmployee.css'
import {useFormik} from 'formik'
// import {styled} from 'styled-components'
import axios from 'axios'
import { signUPSchema } from '../schemas'

const initialValues={
    name:'',
    email:'',
    date:'',
    password:'',
    cpassword:'',
    address:'',
    contact:'',
    deposit:''

}
const AddEmployee = () => {
   const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
        initialValues:initialValues,
        validationSchema:signUPSchema,
        
        onSubmit:(values,action)=>{
            console.log(errors);
            action.resetForm();
        }
       
    })

    //post function

    const handleSubmitt = async (event) => {
        event.preventDefault()
       

        const Name = document.getElementById("name").value;
        const Email = document.getElementById("email").value;
        const DOB=document.getElementById("dob").value;
        const Phone=document.getElementById("contact").value;
        const Deposit=document.getElementById("deposit").value;
        const Address=document.getElementById("address").value;
        const Password=document.getElementById("password").value;

        console.log(Name, Email,DOB,Phone,Deposit,Address,Password,);

        const object = { name: Name ,email:Email,dob:DOB,phone:Phone,deposit:Deposit,address:Address,password:Password}
        console.log(object);
        try {
            const obj = await axios.post("http://localhost:4000/postcustomer", object)
            console.log(typeof obj.dob)
        }
        catch (err) {
            console.log(err)
        }

    }
    
    return (
        <div className="form1 mt-4 ">
            <div class="container shadow p-3 form  bg-body rounded">
                <div class="title">Open new Account</div>
                <form action="#" onSubmit={handleSubmit}>
                   
                    <div class="user__details">
                        <div class="input__box">
                            <span class="details">Customer Name</span>
                            <input type="name"
                                placeholder="E.g: John Smith"
                                autoComplete='off'
                                name='name'
                                id='name'
                                value={ values.name}
                                onChange={handleChange}
                                onBlur={handleBlur} />
                                  { errors.name && touched.name?<p>{errors.name} </p>:null}
                        </div>
                      

                        <div class="input__box">
                            <span class="details">Email</span>
                            <input type="email"
                                name='email'
                                autoComplete='off'
                                id='email'
                                placeholder="johnsmith@hotmail.com" 
                                value={ values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                               
                                 />
                                  { errors.email && touched.email?<p>{errors.email} </p>:null}
                        </div>

                        <div class="input__box">
                            <span class="details">Date of birth</span>
                            <input type="date"
                                name='date'
                                id='dob'
                                autoComplete='off'
                                placeholder="05-09-1998"
                                value={ values.date}
                                onChange={handleChange}
                                onBlur={handleBlur}  />
                                 { errors.date && touched.date?<p>{errors.date} </p>:null}
                        </div>

                        <div class="input__box">
                            <span class="details">Phone Number</span>
                            <input type="text"
                                pattern="[789][0-9]{9}"
                                name='contact'
                                id='contact'
                                autoComplete='off'
                                placeholder="9192 9394 95"
                                value={ values.contact}
                                onChange={handleChange}
                                onBlur={handleBlur}  />
                                 { errors.contact && touched.contact?<p>{errors.contact} </p>:null}
                        </div>

                       
                        <div class="input__box">
                            <span class="details">Initial deposit</span>
                            <input type="number"
                                
                                name='deposit'
                                id='deposit'
                                autoComplete='off'
                                placeholder="mininim 10000"
                                value={ values.deposit}
                                onChange={handleChange}
                                onBlur={handleBlur}  />
                                  { errors.deposit && touched.deposit?<p>{errors.deposit} </p>:null}
                        </div>
                        <div class="input__box">
                            <span class="details">Current Adress</span>
                            <input type="text"
                            name='address'
                            id='address'
                            autoComplete='off' 
                            placeholder="Pune"
                            value={ values.address}
                                onChange={handleChange}
                                onBlur={handleBlur}  />
                                  { errors.address && touched.address?<p>{errors.address} </p>:null}
                        </div>

                        <div class="input__box">
                            <span class="details">Password</span>
                            <input type="password"
                            name='password'
                            id='password'
                            autoComplete='off' 
                            placeholder="********"
                            value={ values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}  />
                                 { errors.password && touched.password?<p>{errors.password} </p>:null}
                        </div>

                        <div class="input__box">
                            <span class="details">Confirm Password</span>
                            <input type="password"
                            name='cpassword'
                            id='cpassword'
                            autoComplete='off' 
                            placeholder="********"
                            value={ values.cpassword}
                                onChange={handleChange}
                                onBlur={handleBlur}  />
                                 { errors.cpassword && touched.cpassword?<p>{errors.cpassword} </p>:null}
                        </div>

                    </div>

                    <div class="button">
                        <input type="submit" value="open account" onClick={handleSubmitt}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddEmployee