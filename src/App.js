import "./App.scss";
import { Grid } from "@mui/material";
import InputSection from "./sections/InputSections";
import DownloadSection from "./sections/DownloadSection";

function App() {
  return (
    <div className="App">
      <Grid
        container
        spacing={3}
      >
        <Grid item md={4} sm={5} xs={12} lg={4} xl={4}>
          <InputSection />
        </Grid>
        <Grid item md={6} sm={7} xs={12} lg={6} xl={6}>
          <DownloadSection />
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
