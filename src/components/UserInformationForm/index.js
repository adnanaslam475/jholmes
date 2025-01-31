import React, { forwardRef, useRef, useState } from "react";
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
// import { isEmpty } from "lodash";
import { formInputs } from "../../constants";
import Warning from "../Warning";

const UserInformationForm = forwardRef(({ open, onClose }, ref) => {
  const formref = useRef();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phone: "",
    companyEmail: "",
  });
  const [errorIndex, setErrorIndex] = useState(null);
  const handleChange = (e) => {
    setErrorIndex(null);
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let i = Object.values(form).findIndex(
      (v, i) => !v.trim().length && formInputs[i].required
    );
    if (i !== -1) {
      setErrorIndex(i);
    } else {
      onClose();
      formref.current.reset();
      localStorage.setItem("user", JSON.stringify(form));
    }
  };
  return (
    <Dialog
      open={open}
      BackdropComponent={Backdrop}
      PaperComponent={Paper}
      onClose={onClose}
    >
      <DialogTitle>Download your Assets</DialogTitle>
      <DialogContent>
        <Grid container className="user-form-dialog" spacing={2}>
          <Grid item md={6} xl={6} xs={12} lg={6} sm={6}>
            <p className="mb-10 mt-0">
              To get your Downloads please fill in the form below. Please be
              aware, we will reach out to see if you're interested in demo of
              the Bettercast problem.
            </p>
            <p>Don't worry though, you'll get your downloads right away!</p>
          </Grid>
          <Grid item md={6} xl={6} padding="10px" xs={12} lg={6} sm={6}>
            <form ref={formref}>
              {formInputs.map((v, i) => (
                <div className="relative" key={v.name}>
                  <TextField
                    name={v.name}
                    id={v.id}
                    autoFocus={i === 0}
                    className="input mb-20 form-input"
                    fullWidth
                    label={v.placeholder}
                    variant="filled"
                    type={v.type}
                    size="medium"
                    required={v.required}
                    onChange={handleChange}
                  />
                  {i === errorIndex && (
                    <Warning error={v.error} className={"apply"} />
                  )}
                </div>
              ))}
            </form>
            <DialogActions>
              <Grid item md={12} lg={12} sm={12} className="submit-div">
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  type="submit"
                  className="upload-btn submit-btn"
                >
                  Submit
                </Button>
              </Grid>
            </DialogActions>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
});

export default UserInformationForm;
