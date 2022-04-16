import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Grid,
  Paper,
  TextField,
  Input,
  Typography,
  Select,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import FontPicker from "font-picker-react";
import { SwatchesPicker } from "react-color";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
import UserInformationForm from "../components/UserInformationForm";
const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
});
const InputSections = () => {
  const classes = useStyles();

  const styles = { item: true, md: 6, lg: 6, xs: 12, sm: 6, xl: 6 };
  const [show, setShow] = useState("");
  const ref = useRef(null);
  const [settingState, setSettingState] = useState({
    font: { value: "", error: false },
    fontColor: { value: "", error: false },
    primaryColor: { value: "", error: false },
    secondaryColor: { value: "", error: false },
    presenterFontSize: { value: "", error: false },
    companyFontSize: { value: "", error: false },
    logoUrl: { value: "", error: false,fileName:'' },
  });
  const handleChange = (v, name) => {
    setSettingState((prev) => ({
      ...prev,
      [name]: { error: false, value: v },
    }));
  };
  const errorHandler = (name) => {
    setSettingState((prev) => ({
      ...prev,
      [name]: { ...prev[name], error: true },
    }));
  };
  const onClose = () => setShow("");
  useEffect(() => {
    // console.log(
    //   "setingstate",
    //   settingState,
    //   !settingState.primaryColor.value.length
    // );
  }, [settingState]);
  return (
    <Grid container component={Paper} className="settings">
      <form ref={ref} className="form">
      <Typography variant="h5">Settings</Typography>
        <Grid container spacing={2} className="main">
          <Grid {...styles}>
            <FontPicker
              className="font-selector"
              activeFontFamily={settingState.font.value || "Select a Font"}
              apiKey={"AIzaSyD6EuzRU38k9pfvca_CbtFZ68uDxaL97wc"}
              onChange={(nextfont) => handleChange(nextfont.family, "font")}
            />
          </Grid>
          <Grid {...styles} className="grid">
            <Select
              fullWidth
              displayEmpty
              variant="standard"
              className="h-55 mb-20 clr-gray"
              onOpen={() => setShow("font")}
              renderValue={() => <p className="ml-15">Font colour</p>}
              onClose={onClose}
              error={settingState.fontColor.error}
              onBlur={() => {
                !settingState.fontColor.value.length &&
                  errorHandler("fontColor");
              }}
            />
            {show === "font" && (
              <SwatchesPicker
                color={settingState.fontColor.value}
                className="color-picker mb-20"
                onChange={(e) => {
                  handleChange(e, "fontColor");
                }}
              />
            )}
          </Grid>
          <Grid {...styles}>
            <TextField
              fullWidth
              onChange={(e) =>
                handleChange(e.target.value, "presenterFontSize")
              }
              variant="filled"
              error={settingState.presenterFontSize.error}
              onBlur={() =>
                !settingState.presenterFontSize.value.length &&
                errorHandler("presenterFontSize")
              }
              label="Presenter font size"
              className=""
            />
          </Grid>
          <Grid {...styles}>
            <TextField
              fullWidth
              error={settingState.companyFontSize.error}
              onChange={(e) => handleChange(e.target.value, "companyFontSize")}
              onBlur={() =>
                !settingState.companyFontSize.value.length &&
                errorHandler("companyFontSize")
              }
              variant="filled"
              label="Company font size"
              className="mb-20"
            />
          </Grid>
          <Grid {...styles} className="grid">
            <Select
              fullWidth
              displayEmpty
              variant="standard"
              className="h-55 mb-20 clr-gray"
              renderValue={() => <p className="ml-15">Primary colour</p>}
              onOpen={() => setShow("primary")}
              onClose={onClose}
              // style={{backgroundColor:'red'}}
              onBlur={() =>
                !settingState.primaryColor.value.length &&
                errorHandler("primaryColor")
              }
            />
            {show === "primary" && (
              <SwatchesPicker
                className="color-picker mb-20 select"
                color={settingState.primaryColor.value}
                onChange={(e) => handleChange(e, "primaryColor")}
              />
            )}
          </Grid>
          <Grid {...styles} className="grid">
            <Select
              fullWidth
              displayEmpty
              className="h-55 mb-20 clr-gray"
              renderValue={() => <p className="ml-15">Secondary colour</p>}
              onOpen={() => setShow("secondary")}
              onClose={onClose}
              variant="standard"
              onBlur={() =>
                !settingState.secondaryColor.value.length &&
                errorHandler("secondaryColor")
              }
            />
            {show === "secondary" && (
              <SwatchesPicker
                onChange={(e) => handleChange(e, "secondaryColor")}
                primaryColor
                className="color-picker"
              />
            )}
          </Grid>
          <Grid {...styles}>
            <div className="choose_file">
              <CloudinaryUploadWidget
                imagesHandler={(image, error) => {
                  const { secure_url, original_filename } = image.info;
                  setSettingState({
                    ...settingState,
                    logoUrl: {
                      value: secure_url,
                      fileName: original_filename,
                      error,
                    },
                  });
                  localStorage.setItem('logoUrl', secure_url);
                }}
              />
              <p>{settingState.logoUrl.fileName}</p>
            </div>
          </Grid>
          <Grid {...styles}></Grid>
          <div className={`${"drop-shadow"}`}></div>
          <span>Drop Shadow</span>
        </Grid>
      </form>
      <UserInformationForm open={true} />
    </Grid>
  );
};

export default InputSections;
