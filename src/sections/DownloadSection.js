import React, { forwardRef, useRef, useState } from "react";
import JSZip, { generateAsync } from "jszip";
import {
  Button,
  // FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { saveAs } from 'file-saver'
import { isEmpty } from "lodash";
import { Carousel } from "react-responsive-carousel";
import { toPng, toSvg, toCanvas } from "html-to-image";
import downloadImg from "downloadjs";
import { detailsInputs } from "../constants";
import ResCarousel from "../components/Carousel";
import UserInformationForm from "../components/UserInformationForm";

const styles = { item: true, md: 6, lg: 6, xs: 12, sm: 6, xl: 6 };
const DownloadSection = forwardRef(
  ({ downloadAssets, updatedShadow, settingState }, ref) => {
    const [assets, setAssets] = useState([]);
    const a = useRef(null)
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
    const onBlur = () => { };

    const saveAsset = async (e) => {
      e.preventDefault();
      try {
        const el = document.getElementById(selectedStyle);
        el.classList.remove("border");
        const dataUrl = await toPng(el);
        var img = new Image();
        img.src = dataUrl;
        img.className = 'assets-images'
        const assetsEl = document.getElementById("assets");
        // downloadImg(img, 'asssss.png', 'image/png')
        if (document.getElementById("assets").childNodes.length >= 6) {
        } else {
          document.getElementById("assets").appendChild(img);
        }
        if (a.current.props.children[a.current.props.children.length - 1].props.children.length >= 6) {

        }
      } catch (error) {
        console.log("errrtoconvert", error);
      }
    };


    const download = async (e) => {
      try {
        e.preventDefault();
        if (isEmpty(localStorage.getItem("user"))) {
          setOpen(true);
        } else {
          let zip = new JSZip();
          let photoZip = zip.folder(`images`);
          const all = document.querySelectorAll('.assets-images')
          for (let i = 0; i < all.length; i++) {
            let blob = new Blob([all[i].src], { type: 'image/png' })
            let url = URL.createObjectURL(blob);
            // let img = new Image();
            // img.src = url;
            console.log('blb', blob, url)
            photoZip.file(Math.random(), blob)
          }
          zip.generateAsync({ type: "blob" })
            .then(function (content) {
              saveAs(content, 'zipimages');
            });
        }
      } catch (error) {
        console.log('errorinconvet', error)
      }
    };

    console.log(document.querySelectorAll('.assets-images'))
    return (
      <Grid container component={Paper} className="downloads">
        <form ref={ref}>
          <Typography variant="h5">Details</Typography>
          <Grid container spacing={2} className="">
            {/* <input type={'image'} /> */}
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
                  ref={a}
                  showThumbs={false}
                  width="100%"
                  id='assets-carousel'
                  className="carousel-main h-250px"
                >
                  <div
                    id="assets"
                    style={{ border: '1px solid red' }}
                    className="carousel-main all-border scroll"
                  >
                  </div>
                  <div
                    id="assets2"
                    style={{ border: '1px solid blue' }}
                    className="carousel-main all-border scroll"
                  ><p></p><h1></h1></div>
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
