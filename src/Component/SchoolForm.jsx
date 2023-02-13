import React,{useState} from "react";
import { Grid,TextField,Button,Card,CardContent,item} from "@mui/material";




 export const SchoolForm=()=>{
    const [name,setName]=useState()
    const [mobile,setMobile]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [pincode,setPincode]=useState()
    const [address,setAddress]=useState()
    const [state,setSatet]=useState()
    const [city,setCity]=useState()
    const [data,setData] =useState([])
    const handleSumbit=()=>{
        const obj={
            firstname:name,
            mobileNo:mobile,
            emailId:email,
            conpassword:password,
            pin:pincode,
            paddress:address,
            pstate:state,
            pcity:city,}
        
        setData([...data,obj] )
         console.log(data)
        }
    return(
        <div>
            <h1>AdmitionForm</h1>
            <Grid container spacing={4}>
                <Grid item xs={3}>
                    <TextField label="name" onChange={(e)=>setName(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <TextField label="mobile"type={"number"} onChange={(e)=>setMobile(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <TextField label="email"type={"email"} onChange={(e)=>setEmail(e.target.value)}/>

                </Grid>
                <Grid item xs={3}>
                    <TextField label="password" type={"password"} onChange={(e)=>setPassword(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <TextField label="address" onChange={(e)=>setAddress(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <TextField label="pincode" onChange={(e)=>setPincode(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <TextField label="state" onChange={(e)=>setSatet(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                    <TextField label="city" onChange={(e)=>setCity(e.target.value)}/>
                </Grid>
                <Grid item xs={12}></Grid>
 
                <Grid item xs={6}></Grid>
                <Grid item xs={3}>
                <Button variant="contained" color='error'onClick={handleSumbit}>c
                    Sumbit
                    </Button>
                </Grid>
            </Grid>
            <Grid container>
                {data.map((item)=>{
                    return (
                        <Grid item xs={6}>
                            <Card>
                                <CardContent>
                                    <h1>name:{item.firstname}</h1>
                                    <h1>mobile:{item.mobileNo}</h1>
                                    <h1>email:{item.emailId}</h1>
                                    <h1>password:{item.conpassword}</h1>
                                    <h1>pincode:{item.pin}</h1>
                                    <h1>address:{item.paddress}</h1>
                                    <h1>state:{item.pstate}</h1>
                                    <h1>city:{item.pcity}</h1>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>  
        </div>
    )
            }
