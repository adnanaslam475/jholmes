import React, { forwardRef, useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { detailsInputs } from "../constants";
import ResCarousel from "../components/Carousel";

const styles = { item: true, md: 6, lg: 6, xs: 12, sm: 6, xl: 6 };
const DownloadSection = forwardRef(({ name }, ref) => {
  const [details, setDetails] = useState({
    presenterName: { value: "", error: false },
    company: { value: "", error: false },
  });
  const [add, setadd] = useState([]);
  const handleChange = (e) => {
    setDetails((prev) => ({
      ...prev,
      [e.target.name]: { error: false, value: e.target.value },
    }));
  };
  const onBlur = () => {};
  const submit = (e) => {
    e.preventDefault();
    setadd([...add, details]);
    ref.current.reset();
  };
  return (
    <form ref={ref}>
      <Grid container component={Paper} className="downloads">
        <Typography variant="h5">Details</Typography>
        <Grid container spacing={2} className="">
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
          <button onClick={submit}>add</button>
        </Grid>
        <ResCarousel details={details} />
        <Button
          onClick={() => ""}
          variant="contained"
          type="submit"
          className="upload-btn save-btn"
        >
          Save
        </Button>
      </Grid>
    </form>
  );
});

export default DownloadSection;
