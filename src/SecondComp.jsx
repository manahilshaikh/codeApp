import React from "react";
import { ThirdComp } from "./ThirdComp";
import { Grid,TextField,Button } from "@mui/material";
export const SecondComp=()=>{
    return(
        <div>
            <p>This is Second comp</p>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField label=" Fisrt Name"/>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="success">Submit</Button>
                </Grid>
            </Grid>
            <ThirdComp/>
        </div>
    )
}