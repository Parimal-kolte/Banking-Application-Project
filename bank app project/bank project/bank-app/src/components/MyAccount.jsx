import React, { useEffect, useState } from 'react'

function MyAccount() {
    const [display, setDisplay] = useState("v-hidden text-center");
    const[data, setData] = useState({});
    const [amount, setAmout] = useState("");
    const [err, setErr] = useState("");
    const [bal1,setBal1]=useState("")

    const obj = localStorage.getItem("customer");
    
    // document.write(obj)
    const acc = JSON.parse(obj);
    console.log(acc.name)

    function checkBalance() {
        alert("check balance called")
        setDisplay("v-visible text-center")
        let sum=acc.deposit;
        setAmout(sum)
            console.log(amount)
    }
    const getData = async () => {
        const result = await fetch("http://localhost:4000/search/" + acc)
        const resp = await result.json();
        setData(resp[0]);

    }

    // const sendData=async()=>{
    //     const result=await fetch("http://localhost:4000/postbalance/"+acc.ac_num)
    //     const resp = await result.json();
    //     setDisplay("v-visible text-center")
    //     let sum=acc.deposit;
    //     setAmout(sum)
    // }

    function withdrawMoney() {
        alert("welcome..")
        getData();
        console.log(acc.deposit)
        var bal=((acc.deposit) - amount);
        console.log(bal)
        if (bal < 1000) {
            alert("low")
            // setErr("Insufficient Account Balance ! ")
            alert("insufficient balance")
        }
        else {

            const setBalance = async () => {
                try {
                    const result = await fetch("http://localhost:4000/postbalance/"+acc.ac_num, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            Balance: bal
                        })

                    });
                    const resp = await result.json();
                    alert("balance updated..")
                }
                catch (error) {
                    console.log(error);
                }
            }
            setBalance();
        }

    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div className='container bg-new p-3'>
            <div className='row px-5 mb-3'>
                <div className='col-md-6 text-info'><h1>Customer Profile</h1></div>
                <div className='col-md-6 text-end' ><h1><i class="fa-solid fa-pen btn btn-primary p-3 fs-5"></i></h1></div>
            </div>

            <div className='row px-5 mb-3'>
                <div className='col '>
                    <h3 className='text-danger-emphasis mb-3'>Name : {acc.name}</h3>
                    <h3 className='text-danger-emphasis mb-3'>Email : {acc.email}</h3>
                    <h3 className='text-danger-emphasis mb-3'>Contact : {acc.phone}</h3>
                    <h3 className='text-danger-emphasis mb-3'>Account No : {acc.ac_num}</h3>
                    <h3 className='text-danger-emphasis mb-3'>Date Of Birth : {acc.dob}</h3>
                    {/* <h3 className='text-danger-emphasis mb-3'>Gender : {data.Gender}</h3>
                    <h3 className='text-danger-emphasis mb-3'>Account Type : {data.Acc_Type}</h3>
                    <h3 className='text-danger-emphasis mb-3'>Aadhar No : {data.Aadhar}</h3> */}
                    <h3 className='text-danger-emphasis mb-3'>Address : {acc.address}</h3>
                </div>
            </div>
            <div className='row px-5'>
                <div className='col-md-6 bg-secondary p-3'>
                    <label for='withdraw' className='mb-1 text-light'>Withdraw Money</label>
                    <input type='number' placeholder='Enter amount to withdraw' className='form-control mb-3' id='withdraw' onChange={(e) => setAmout(e.target.value)} />
                    <button className='btn btn-info form-control' onClick={()=>withdrawMoney()}>Withdraw</button>
                </div>
                <div className='col-md-6 bg-dark p-3'>
                    <div className={display}>
                        <label className='text-light mb-2'>Available Account Balance</label>
                        <h3 className='text-light mb-3'><i class="fa-solid fa-indian-rupee-sign me-2"></i><span>{amount}</span></h3>
                    </div>
                    <button className='btn btn-info form-control' onClick={checkBalance}>Check Balance</button>
                    {/* <span className='text-info'>{amount}</span> */}
                </div>
            </div>
        </div>
    )
}

export default MyAccount