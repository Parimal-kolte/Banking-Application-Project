const Express = require("express")
const con = require("./connection");
const app = Express();
const cors = require('cors')
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/postcustomer', (req, res) => {
    const cid = req.body.ac_num;
    const name = req.body.name;
    const email = req.body.email;
    const dob = req.body.dob;
    const phone = req.body.phone;
    const deposit = req.body.deposit;
    const address = req.body.address;
    const password = req.body.password;

    con.query('insert into customer values(?,?,?,?,?,?,?,?)', [cid, name, email, dob, phone, deposit, address, password], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("data posted");
        }
    })
})
  //post updated balance

//   app.put('/postbalance', (req, res) => {
//     let ac_num=req.params.ac_num;
//     const deposit = req.body.deposit;

//     con.query( 'UPDATE customer SET deposit =(?)  WHERE ac_num =(?)   ', [deposit,ac_num] ,(err, result) =>{
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     })
// })
app.patch("/postbalance/:ac_num  ",(req,resp)=>{
    const data=[req.body.deposit,  req.body.ac_num]
    con.query('update customer set deposit=?  where ac_num=?',data,(error,result,fields)=>{
        if(error)
            console.log("error is "+error);
        else
        {
            resp.send("successfully..");
            return result;
        }
    });
  });

//api for for show customers
app.get("/getcustomer", (req, res) => {
    con.query("select * from customer", function (err, result) {
      if (err) {
        res.send("error")
      } else {
        res.send(result)
      }
    })
  })

  //login for customer
  app.get("/login/:ac_num/:password",(req,res)=>{
  let ac=req.params.ac_num;
  let password=req.params.password;
  con.query("select * from customer where ac_num=? and password=?",[ac,password],function(err,result){
    if(err){
      res.send("error")
    }else{
      res.send(result)
      return result;
    }
  })
})  

//login for employee
app.get("/login1/:username/:password",(req,res)=>{
    let ac=req.params.username;
    let password=req.params.password;
    con.query("select * from employee where username=? and password=?",[ac,password],function(err,result){
      if(err){
        res.send("error")
      }else{
        res.send(result)
        return result;
      }
    })
  }) 
//serch
app.get("/getcustomer/search/:ac_num",(req,res)=>{
    let ac_num=req.params.ac_num;
    con.query("select * from customer where ac_num=?",[ac_num],function(err,result){
      if(err){
        res.send("error")
      }else{
        res.send(result)
      }
    })
  })

  app.get("/getcustomer/:ac_num",(req,res)=>{
    let ac_num=req.params.ac_num;
    con.query("select * from customer where ac_num=?",[ac_num],function(err,result){
      if(err){
        res.send("error")
      }else{
        res.send(result)
      }
    })
  })


 
app.listen(4000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("on port 4000")
    }
})