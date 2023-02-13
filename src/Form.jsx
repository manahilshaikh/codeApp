import React from "react";
import { Grid , TextField} from "@mui/material";

export const Form =()=>{
    return(
       <div>
        <h1>form</h1>
       <Grid container>
          <Grid item xs={4}>
            <TextField variant="outlined" label="First name"/>
          </Grid>
       </Grid>
       </div>
    )
}
// import React from "react";
// import{Grid,TextField } from "@mui/material";           

// export const form=()=>{
//    return(
//      <div>
//       <h1>form</h1>
//       <Grid container>
//          <Grid item Xs={4}>
//             <TextField variant="outlined"label="First name"/>
//          </Grid>
//       </Grid>
//      </div>
//    )
// }