import "./App.scss";
import { Grid } from "@mui/material";
import InputSection from "./sections/InputSections";
import DownloadSection from "./sections/DownloadSection";
import { useRef, useState } from "react";

function App() {
  const ref = useRef(null);
  const [settingState, setSettingState] = useState({
    font: { value: "", error: false },
    fontColor: { value: "", error: false },
    primaryColor: { value: "", error: false },
    secondaryColor: { value: "", error: false },
    presenterFontSize: { value: "", error: false },
    companyFontSize: { value: "", error: false },
    logoUrl: { value: "", error: false, fileName: "" },
  });
  const [shadowColor, setShadowColor] = useState("gray");
  const [boxShadow, setBoxShadow] = useState({
    0: "0px",
    1: "0px",
    2: "0px",
    3: "0px",
  });
  const b = {};
  Object.keys(boxShadow)
    .sort((a, b) => {
      return +a - +b;
    })
    .forEach((x) => {
      b[x] = boxShadow[x];
    });
  const updatedShadow = `${Object.values(b).join(" ")} ${shadowColor?.hex}`;
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item md={5} sm={5} xs={12} lg={5} xl={5}>
          <InputSection
            settingState={settingState}
            boxShadow={boxShadow}
            setBoxShadow={setBoxShadow}
            setShadowColor={setShadowColor}
            shadowColor={shadowColor}
            // updatedShadow={updatedShadow}
            setSettingState={setSettingState}
          />
        </Grid>
        <Grid item md={7} sm={7} xs={12} lg={7} xl={7}>
          <DownloadSection
            ref={ref}
            updatedShadow={updatedShadow}
            // boxShadow={boxShadow}
            settingState={settingState}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
