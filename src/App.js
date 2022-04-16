import "./App.scss";
import { Grid } from "@mui/material";
import InputSection from "./sections/InputSections";
import DownloadSection from "./sections/DownloadSection";
import { useRef } from "react";

function App() {
  const ref= useRef(null);
  return (
    <div className="App">
      <Grid
        container
        spacing={2}
      >
        <Grid item md={5} sm={5} xs={12} lg={5} xl={5}>
          <InputSection />
        </Grid>
        <Grid item md={7} sm={7} xs={12} lg={7} xl={7}>
          <DownloadSection ref={ref} />
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
