import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { SecondComp } from "./SecondComp";

export const FirstComp=()=>{
    return(
        <div>
            <p>This is first comp</p>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField label=" Fisrt Name"/>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="success">Submit</Button>
                </Grid>
            </Grid>
            <SecondComp/>
        </div>
    )
}