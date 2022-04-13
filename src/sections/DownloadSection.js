import React, { forwardRef, useState } from "react";
import { FormControl, Grid, Paper, TextField, Typography } from "@mui/material";
import { detailsInputs, formInputs } from "../constants";

const styles = { item: true, md: 6, lg: 6, xs: 12, sm: 6, xl: 6 };
const DownloadSection = forwardRef(({ name }, ref) => {
  const [details, setDetails] = useState({
    presenter: { value: "", error: false },
    company: { value: "", error: false },
  });
  const handleChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      [e.target.name]: { error: false, value: e.target.value },
    }));
  };
  const onBlur = () => {};
  console.log("details[v.name].error", details["name"]?.error);
  return (
    <form ref={ref}>
      <Grid container component={Paper} className="downloads">
        <Typography variant="h5">Details</Typography>
        <Grid container className="">
          {detailsInputs.map((v, i) => (
            <Grid {...styles} key={i}>
              <TextField
                fullWidth
                error={details[v.name]?.error}
                label={v.label}
                variant="filled"
                name={v.name}
                onChange={handleChange}
                onBlur={onBlur}
              />
            </Grid>
          ))}
        </Grid>
        <Grid container>
          Select
          <div className="first"></div>
        </Grid>
      </Grid>
    </form>
  );
});

export default DownloadSection;
