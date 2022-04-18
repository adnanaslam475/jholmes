import { Grid } from "@mui/material";
import React from "react";
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
  const onClick = (index) => console.log("first", index);
  // console.log(first)
  return (
    <Grid container style={{}}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        width="100%"
        className="carousel-main"
      >
        <div className="carousel-main">
          {styles.map((v) => (
            <>
              <v.div
                settingState={settingState}
                onClick={onClick}
                details={details}
              />
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
