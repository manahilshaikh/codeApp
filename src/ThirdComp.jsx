import React from "react";
import { Grid,TextField,Button } from "@mui/material";
export const ThirdComp=()=>{
    return(
        <div>
            <p>This is Third comp</p>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField label=" Fisrt Name"/>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="success">Submit</Button>
                </Grid>
            </Grid>
        </div>
    )
}