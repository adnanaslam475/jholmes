import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  Button,
  Grid,
  Paper,
  TextField,
  Input,
  Typography,
  Select,
  useTheme,
  Popper,
  Fade,
} from "@mui/material";
import { isEmpty } from "lodash";
import FontPicker from "font-picker-react";
import { SwatchesPicker, ChromePicker } from "react-color";

import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";
// import { dropinputs } from "../constants";
// import UserInformationForm from "../components/UserInformationForm";

export function maxLengthInput(input, maxLength) {
  return isEmpty(input)
    ? ""
    : Math.max(0, input).toString().slice(0, maxLength);
}
const InputSections = forwardRef(
  (
    {
      boxShadow,
      shadowColor,
      setBoxShadow,
      setShadowColor,
      settingState,
      setSettingState,
    },
    refa
  ) => {
    const styles = { item: true, md: 6, lg: 6, xs: 12, sm: 6, xl: 6 };
    const [show, setShow] = useState("");
    const [openDropShadow, setOpenDropShadow] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const ref = useRef(null);
    const popperRef = useRef(null);

    const handleChange = (v, name) => {
      setSettingState((prev) => ({
        ...prev,
        [name]: {
          error: false,
          value: v,
        },
      }));
    };
    const errorHandler = ({ target }) => {
      !settingState[target?.name].value.toString().trim().length &&
        setSettingState((prev) => ({
          ...prev,
          [target.name]: {
            ...prev[target.name],
            error: !prev[target.name].value,
          },
        }));
    };
    const imagesHandler = (image, error) => {
      const { secure_url, original_filename } = image.info;
      setSettingState({
        ...settingState,
        logoUrl: {
          value: secure_url,
          fileName: original_filename,
          error,
        },
      });
      localStorage.setItem("logoUrl", secure_url);
    };
    const onClose = () => setShow("");
    const handleOpenDropShadow = (e) => {
      setAnchorEl(e.currentTarget);
      setOpenDropShadow(!openDropShadow);
    };

    const handledropShadow = (e) => {
      const { name, value } = e.target;
      setBoxShadow((prev) => ({
        ...prev,
        [name]: `${value || 0}px`,
      }));
    };

    return (
      <Grid container component={Paper} className="settings">
        <form ref={ref} className="form">
          <Typography variant="h5">Settings</Typography>
          <Grid container spacing={2} className="main no-cursor">
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
                className="h-55 mb-20 clr-gray pooooooooooooo"
                onOpen={() => setShow("font")}
                renderValue={() => <p className="ml-15">Font colour</p>}
                onClose={onClose}
                name="fontColor"
                value={settingState.fontColor.value.hex || ""}
                error={settingState.fontColor.error}
                onBlur={errorHandler}
              />
              {show === "font" && (
                <SwatchesPicker
                  color={settingState.fontColor.value}
                  className="color-picker mb-20"
                  onChangeComplete={(value) =>
                    handleChange(value.hex, "fontColor")
                  }
                />
              )}
            </Grid>
            <Grid {...styles}>
              <TextField
                fullWidth
                onChange={(e) =>
                  handleChange(+e.target.value, "presenterFontSize")
                }
                variant="filled"
                name="presenterFontSize"
                error={settingState.presenterFontSize.error}
                onBlur={errorHandler}
                type="number"
                label="Presenter font size"
                className=""
              />
            </Grid>
            <Grid {...styles}>
              <TextField
                fullWidth
                type="number"
                error={settingState.companyFontSize.error}
                onChange={(e) =>
                  handleChange(+e.target.value, "companyFontSize")
                }
                name="companyFontSize"
                onBlur={errorHandler}
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
                type="number"
                value={settingState.primaryColor.value.hex || ""}
                name="primaryColor"
                style={{}}
                onBlur={errorHandler}
              />
              {show === "primary" && (
                <SwatchesPicker
                  className="color-picker mb-20 select"
                  color={settingState.primaryColor.value}
                  onChangeComplete={(v) => handleChange(v.hex, "primaryColor")}
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
                name="secondaryColor"
                value={settingState.secondaryColor.value.hex || ""}
                variant="standard"
                onBlur={errorHandler}
              />
              {show === "secondary" && (
                <SwatchesPicker
                  onChangeComplete={(v) =>
                    handleChange(v.hex, "secondaryColor")
                  }
                  color={settingState.secondaryColor.value}
                  className="color-picker"
                />
              )}
            </Grid>
            <Grid {...styles}>
              <div className="choose_file">
                <CloudinaryUploadWidget imagesHandler={imagesHandler} />
              </div>
            </Grid>
            <Grid {...styles}>{settingState.logoUrl.fileName}</Grid>
            <Grid {...styles} className="d-flex">
              <Popper
                open={openDropShadow}
                anchorEl={anchorEl}
                ref={popperRef}
                className="z-2"
                placement="top-end"
                transition
              >
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper className="shadow-picker">
                      <div>
                        {[
                          "offset-x",
                          "offset-y",
                          "blur-radius",
                          "spread-radius",
                        ].map((v, i) => {
                          return (
                            <>
                              <label className="mb-10">{v}</label>{" "}
                              <input
                                key={i}
                                type="range"
                                name={i}
                                onChange={handledropShadow}
                                min="-20"
                                max="20"
                                value={+boxShadow[i].replace("px", "")}
                              />
                            </>
                          );
                        })}
                      </div>
                      <ChromePicker
                        color={shadowColor}
                        onChangeComplete={(v) => {
                          setShadowColor(v);
                        }}
                        className="min-200"
                      />
                    </Paper>
                  </Fade>
                )}
              </Popper>
                <div
                  onClick={handleOpenDropShadow}
                  style={{ backgroundColor: shadowColor?.hex || shadowColor }}
                  className={`${"drop-shadow"}`}
                ></div>
              <span>Drop Shadow</span>
            </Grid>
          </Grid>
        </form>
      </Grid>
    );
  }
);

export default InputSections;
