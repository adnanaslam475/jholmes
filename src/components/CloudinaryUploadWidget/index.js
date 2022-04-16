import React, { Component } from "react";
import { Button } from "@mui/material";

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "mernapp",
        uploadPreset: "ml_default",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          this.props.imagesHandler(result, error);
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }
  componentDidCatch() {
    console.log("catcahcaca");
  }

  render() {
    return (
      <Button
        fullWidth
        id="upload_widget"
        className="upload-btn cloudinary-button"
        type="button"
        variant="contained"
        focusRipple
        centerRipple
      >
        Upload Image
      </Button>
    );
  }
}

export default CloudinaryUploadWidget;
