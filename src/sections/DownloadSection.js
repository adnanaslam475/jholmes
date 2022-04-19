import React, { forwardRef, useState } from "react";
import {
  Button,
  // FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import { detailsInputs } from "../constants";
import ResCarousel from "../components/Carousel";
import UserInformationForm from "../components/UserInformationForm";

const styles = { item: true, md: 6, lg: 6, xs: 12, sm: 6, xl: 6 };
const DownloadSection = forwardRef(
  ({ downloadAssets, updatedShadow, settingState }, ref) => {
    const [details, setDetails] = useState({
      presenterName: { value: "", error: false },
      company: { value: "", error: false },
    });
    const [selectedStyle, setSelectedStyle] = useState({});
    const [add, setadd] = useState([]);
    const [open, setOpen] = useState(false);
    const handleChange = (e) => {
      setDetails((prev) => ({
        ...prev,
        [e.target.name]: { error: false, value: e.target.value },
      }));
    };
    const onBlur = () => { };
    const submit = (e) => {
      e.preventDefault();
      setadd([...add, details]);
      ref.current.reset();
    };
    return (
      <Grid container component={Paper} className="downloads">
        <form ref={ref}>
          <Typography variant="h5">Details</Typography>
          <Grid container spacing={2} className="">
            {detailsInputs.map((v, i) => (
              <Grid {...styles} key={i}>
                <TextField
                  fullWidth
                  error={details[v.name].error}
                  label={v.label}
                  variant="filled"
                  name={v.name}
                  type={v.type}
                  onChange={handleChange}
                  onBlur={onBlur}
                  required
                />
              </Grid>
            ))}
            <ResCarousel
              details={{
                presenterName: details.presenterName.value,
                company: details.company.value
              }}
              selectedStyle={selectedStyle}
              boxShadow={updatedShadow}
              setSelectedStyle={setSelectedStyle}
              settingState={settingState}
            />
            <Button
              onClick={() => submit()}
              variant="contained"
              type="submit"
              className="upload-btn save-btn"
            >
              Save
            </Button>
            <Typography variant="h6">Assets</Typography>
            {/* <ResCarousel details={details} selectedStyle={selectedStyle} /> */}
            <Button
              onClick={(e) => {
                e.preventDefault();
                return isEmpty(localStorage.getItem("user"))
                  ? setOpen(true)
                  : downloadAssets;
              }}
              variant="contained"
              type="submit"
              className="upload-btn save-btn"
            >
              Download
            </Button>
          </Grid>
        </form>
        <UserInformationForm onClose={() => setOpen(false)} open={open} />
      </Grid>
    );
  }
);

export default DownloadSection;
