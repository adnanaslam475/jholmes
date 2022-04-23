import React, { Component } from "react";
import { Button } from "@mui/material";

class CloudinaryUploadWidget extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "mernapp",
        uploadPreset: "ml_default",
        // api_key:''
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

  render() {
    console.log("props", this.props);
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
