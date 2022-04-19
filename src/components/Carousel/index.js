import React from "react";
import { Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { styles } from "../../constants";
// import CarouselItem from "../CarouselItem";
const ResCarousel = ({
  details,
  selectedStyle,
  setSelectedStyle,
  boxShadow,
  settingState,
}) => {
  const onClick = i => setSelectedStyle(i);
  // console.log('first', settingState, selectedStyle)

  return (
    <Grid container style={{}}>
      <Carousel
        showArrows
        showThumbs={false}
        width="100%"
        className="carousel-main"
      >
        <div className="carousel-main">
          {styles.map((v) => (
            <>
              {v.div({ ...settingState, selectedStyle, boxShadow }, onClick, details)}
            </>
          ))}
        </div>
        {/* {v.div(settingState, onClick, details)} */}
      </Carousel>
    </Grid>
  );
};
export default ResCarousel;
// {/* <CarouselItem details={details}selectedStyle={selectedStyle} /> */}
