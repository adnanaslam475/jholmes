import React from "react";
import { Grid } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { styles } from "../../constants";
const ResCarousel = ({
  details,
  selectedStyle,
  setSelectedStyle,
  boxShadow,
  settingState,
  style,
  assets = [],
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
        {style && (
          <div id="style-1" className="carousel-main all-border scroll">
            {styles.map((v) => (
              <>
                {v.div(
                  { ...settingState, selectedStyle, boxShadow },
                  onClick,
                  details
                )}
              </>
            ))}
          </div>
        )}
        {assets && (
          <div>
            {assets.map((v) => (
              <>{v}</>
            ))}
          </div>
        )}
      </Carousel>
    </Grid>
  );
};
export default ResCarousel;
// {/* <CarouselItem details={details}selectedStyle={selectedStyle} /> */}
