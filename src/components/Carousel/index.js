import React from "react";
import { Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { assetStyles } from "../../constants";
const ResCarousel = ({
  details,
  selectedStyle,
  setSelectedStyle,
  boxShadow,
  settingState,
}) => {
  const onClick = (e) => setSelectedStyle(e);

  return (
    <Grid container>
      <Carousel
        showArrows
        showThumbs={false}
        width="100%"
        className="carousel-main h-250px"
      >
        <div id="style-1" className="carousel-main all-border scroll">
          {assetStyles.map((v) => (
            <>
              {v.div(
                { ...settingState, selectedStyle, boxShadow },
                onClick,
                details
              )}
            </>
          ))}
        </div>
      </Carousel>
    </Grid>
  );
};
export default ResCarousel;
// {/* <CarouselItem details={details}selectedStyle={selectedStyle} /> */}
