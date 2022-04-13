import {
  Dialog,
  DialogActions,
  Grid,
  DialogTitle,
  DialogContent,
  Typography,
  TextField,
  Button,
  Paper,
  Backdrop,
} from "@mui/material";
import React, { forwardRef, useState } from "react";
import { formInputs } from "../../constants";
import Warning from "../Warning";

const UserInformationForm = forwardRef(({ open,onClose, onChange, submit }, ref) => {
  const [form,setForm]=useState({
    firstName:'',
    lastName:'',
    companyName:'',
    phone:'',
    email:'',
  })
  // const handleChange= (e)=>{setForm(prev=>({...prev,''}))}
  return (
    <Dialog
      open={true}
      BackdropComponent={Backdrop}
      PaperComponent={Paper}
      onClose={onClose}
    >
      <DialogTitle >Download your Assets</DialogTitle>
      <DialogContent>
        <Grid
          container
          className="user-form-dialog"
          spacing={2}
        >
          <Grid item md={6} xl={6} xs={12} lg={6} sm={6}>
            <p className="mb-10">
              To get your Downloads please fill in the form below. Please be
              aware, we will reach out to see if you're interested in demo of
              the Bettercast problem.
            </p>
            <p>Don't worry though, you'll get your downloads right away!</p>
          </Grid>
          <Grid item md={6} xl={6}style={{border:'1px solid red'}} padding="10px" xs={12} lg={6} sm={6}>
            <form ref={ref}>
              {formInputs.map((v, i) => (
                <div className="relative">
                  <TextField
                    name={v.name}
                    id={v.id}
                    autoFocus={i === 0}
                    key={v.name}
                    className="input mb-20 form-input"
                    fullWidth
                    label={v.placeholder}
                    variant="filled"
                    size="medium"
                    required={v.required}
                    onChange={onChange}
                  />
                  {i === 0 && <Warning error="" className={''} />}
                </div>
              ))}
            </form>
            <DialogActions>
              <div className="submit-div">
                <Button
                  onClick={submit}
                  variant="contained"
                  className="upload-btn submit-btn"
                >
                  Submit
                </Button>
              </div>
            </DialogActions>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
});

export default UserInformationForm;
