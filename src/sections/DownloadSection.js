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
import { Carousel } from "react-responsive-carousel";
import { toPng, toSvg, toCanvas } from "html-to-image";
import downloadImg from "downloadjs";
import { assetStyles, detailsInputs } from "../constants";
import ResCarousel from "../components/Carousel";
import UserInformationForm from "../components/UserInformationForm";

const styles = { item: true, md: 6, lg: 6, xs: 12, sm: 6, xl: 6 };
const DownloadSection = forwardRef(
  ({ downloadAssets, updatedShadow, settingState }, ref) => {
    const [assets, setAssets] = useState([]);
    const [details, setDetails] = useState({
      presenterName: { value: "", error: false },
      company: { value: "", error: false },
    });
    const [selectedStyle, setSelectedStyle] = useState(null);
    const [open, setOpen] = useState(false);
    const handleChange = (e) => {
      setDetails((prev) => ({
        ...prev,
        [e.target.name]: { error: false, value: e.target.value },
      }));
    };
    const onBlur = () => {};
    const download = (e) => {
      e.preventDefault();
      if (isEmpty(localStorage.getItem("user"))) {
        setOpen(true);
      } else {
        assets.forEach((v) => downloadImg(v, "aaa.png"));
      }
    };
    const saveAsset = async (e) => {
      e.preventDefault();
      console.log(document.getElementById(selectedStyle).firstChild);
      try {
        const el = document.getElementById(selectedStyle);
        el.classList.remove("border");
        const dataUrl = await toPng(el);
        var img = new Image();
        img.src = dataUrl;
        img.className = el.className;
        const assetsEl = document.getElementById("assets");
        if (document.getElementById("assets").childNodes.length >= 6) {
        } else {
          document.getElementById("assets").appendChild(img);
        }
        console.log("yeimage", img, el);
      } catch (error) {
        console.log("errrtoconvert", error);
      }
    };
    console.log("updateshaow", updatedShadow);
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
            <div className="carousel-cont">
              <ResCarousel
                details={{
                  presenterName: details.presenterName.value,
                  company: details.company.value,
                }}
                selectedStyle={selectedStyle}
                boxShadow={updatedShadow}
                setSelectedStyle={setSelectedStyle}
                settingState={settingState}
                style
              />
              <Button
                onClick={saveAsset}
                disabled={selectedStyle === null}
                variant="contained"
                type="submit"
                className="upload-btn save-btn"
              >
                Save
              </Button>
            </div>
            <Typography variant="h6">Assets</Typography>
            <div className="carousel-cont">
              <Grid container>
                <Carousel
                  showArrows
                  showThumbs={false}
                  width="100%"
                  className="carousel-main h-250px"
                >
                  <div
                    id="assets"
                    className="carousel-main all-border scroll"
                  ></div>
                </Carousel>
                <Button
                  onClick={download}
                  variant="contained"
                  type="submit"
                  className="upload-btn save-btn"
                >
                  Download
                </Button>
              </Grid>
            </div>
          </Grid>
        </form>
        <UserInformationForm onClose={() => setOpen(false)} open={open} />
      </Grid>
    );
  }
);

export default DownloadSection;
