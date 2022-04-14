import React, { forwardRef, useState } from "react";
import { FormControl, Grid, Paper, TextField, Typography } from "@mui/material";
import { detailsInputs, formInputs } from "../constants";
import { Carousel } from 'react-responsive-carousel'

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
  const onBlur = () => { };
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
        </Grid>
        <Grid container>
          <Carousel showArrows={true}
          showThumbs={false}
          // renderArrowNext
          // renderArrowPrev
          // onChange={onChange} 
          // onClickItem={onClickItem} 
          >
            <div>
              {/* <img src="https://miro.medium.com/max/1135/1*E5VQSUDJZ-mfc_G7NkIZIw.png" /> */}
              <div style={{border:'1px solid red'}}>
                <div className="first">adnannaaa</div>
              </div>
            </div>
            <div>
              <img src="https://blog.logrocket.com/wp-content/uploads/2019/08/building-carousel-react-using-only-hook-nocdn.jpg" />
            </div>
          </Carousel>
        </Grid>
      </Grid>
    </form>
  );
});

export default DownloadSection;
