import { Grid } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
let img =
  "https://goodmorningimageshddownload.com/wp-content/uploads/2018/07/Animal-goodfg-morning-imafg-300x224.jpg";
const ResCarousel = ({ details }) => {
  return (
    <Grid container style={{ }}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        width="100%"
        // renderArrowNext
        // renderArrowPrev
      >
        <div className="carousel-main">
          {/* first */}
          <div className="main pr-5" style={{ fontFamily: "" }}>
            <div className="blue first">
              <h5>weeeeeeeeeeeecw</h5>
            </div>
            <div className="red">wewdcwcqw</div>
          </div>
          {/* second */}
          <div className="main border row">
            <div className="second-inner">
              <img src={img} className="secondlogo" />
              <div className="secondtext" style={{ fontFamily: "" }}>
                <h3>dfdfsssssssssssssssswadnanaslam</h3>
                <p>comspny</p>
              </div>
            </div>
          </div>
          {/* therere */}
          <div style={{ minWidth: "50%" }} className="pr-5">
            <div  className="main border bg-red">
              <h2>{"sdddddd"}</h2>
              <p>{"weeeeee"}</p>
            </div>
          </div>
          {/* four */}
          <div
            className="main relative"
            style={{ height: "50px", fontFamily: "" }}
          >
            <div className="blue first">
              <h5>{details.presenterName.value}</h5>
            </div>
            <div className="red red-four">{details.company.value}</div>
          </div>
          {/* fifth */}
          <div style={{minWidth:'50%'}} className='pr-5'>
          <div
            className="main five pr-5"
            style={{
              fontFamily: "",
            }}
          >
            <div className="blue">
              <h5>{details.presenterName.value}</h5>
            </div>
            <div className="">{"sdaaaaaaaaaaa"}</div>
          </div>
          </div>
          {/* six */}
          <div
            className="main"
            style={{
              fontFamily: "",
            }}
          >
            <div className="second-inner bg-red">
              <img src={img} className="secondlogo" />
              <div className="secondtext" style={{ fontFamily: "" }}>
                <h3>dfdfsssssssssssssssswadnanaslam</h3>
                <p>comspny</p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </Grid>
  );
};

export default ResCarousel;
