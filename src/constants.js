import { img } from "./components/CarouselItem";
import RandomLogo from "../src/assets/RandomLogo.svg";
export const formInputs = [
  {
    name: "firstName",
    id: "firstName",
    placeholder: "First name",
    required: true,
    type: "text",
    error: "First Name is requried",
  },
  {
    name: "lastName",
    type: "text",
    error: "Last Name is requried",
    id: "lastName",
    placeholder: "Last name",
    required: true,
  },
  {
    name: "companyName",
    id: "companyName",
    placeholder: "Company Name",
    required: false,
    type: "text",
  },
  {
    name: "phoneNumber",
    id: "phoneNumber",
    placeholder: "Phone Number",
    required: false,
    type: "number",
  },
  {
    name: "companyEmail",
    id: "companyEmail",
    type: "email",
    error: "Email Address is requried",
    placeholder: "Company Email Address ",
    required: true,
  },
];
export const detailsInputs = [
  {
    name: "presenterName",
    label: "Presenter Name",
    type: "text",
  },
  {
    name: "company",
    type: "text",
    label: "Company",
  },
];

export const styles = [
  {
    div: (
      {
        font,
        secondaryColor,
        primaryColor,
        fontColor,
        presenterFontSize,
        companyFontSize,
        selectedStyle,
        boxShadow,
      },
      onClick,
      details
    ) => {
      console.log("font", font, secondaryColor, primaryColor);
      return (
        <div
          id="0"
          className={`main pr-5 ${selectedStyle === 0 && " border"}`}
          onClick={onClick}
          style={{ fontFamily: font?.value, boxShadow }}
        >
          <div
            className="blue first"
            style={{
              backgroundColor: secondaryColor?.value,
              color: fontColor?.value,
            }}
          >
            <h5 style={{ fontSize: presenterFontSize?.value }}>
              {details.presenterName}
            </h5>
          </div>
          <div
            className="red"
            style={{
              backgroundColor: primaryColor?.value,
              fontSize: companyFontSize?.value,
            }}
          >
            {details.company}
          </div>
        </div>
      );
    },
  },
  {
    div: (
      {
        font,
        // secondaryColor,
        primaryColor,
        fontColor,
        presenterFontSize,
        companyFontSize,
        selectedStyle,
        boxShadow,
        logoUrl,
      },
      onClick,
      details
    ) => (
      <div
        id="1"
        className={`row ${selectedStyle === 1 && " border"}`}
        onClick={() => onClick(1)}
        style={{
          fontFamily: font?.value,
          boxShadow,
          color: fontColor?.value,
        }}
      >
        <div className="second-inner">
          <img
            src={logoUrl?.value || RandomLogo}
            style={{
              border: `1px solid ${primaryColor?.value}`,
              color: font?.value,
            }}
            className="secondlogo"
            alt="llll"
          />
          <div className="secondtext">
            <h3
              style={{
                fontSize: presenterFontSize?.value,
              }}
            >
              {details.presenterName}
            </h3>
            <p
              style={{
                fontSize: companyFontSize?.value,
              }}
            >
              {details.company}
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    div: (
      {
        font,
        secondaryColor,
        fontColor,
        presenterFontSize,
        companyFontSize,
        selectedStyle,
        boxShadow,
      },
      onClick,
      details
    ) => (
      <div
        id="2"
        style={{
          minWidth: "50%",
          color: fontColor?.value,
          fontFamily: font?.value,
          boxShadow,
        }}
        onClick={() => onClick(2)}
        className={`pr-5 ${selectedStyle === 2 && " border"}`}
      >
        <div
          style={{ backgroundColor: secondaryColor?.value }}
          className="main border bg-red h-95"
        >
          <h2 style={{ fontSize: presenterFontSize?.value }}>
            {details.presenterName}
          </h2>
          <p style={{ fontSize: companyFontSize?.value }}>{details.company}</p>
        </div>
      </div>
    ),
  },
  {
    div: (
      {
        font,
        secondaryColor,
        primaryColor,
        fontColor,
        presenterFontSize,
        companyFontSize,
        selectedStyle,
        boxShadow,
      },
      onClick,
      details
    ) => (
      <div
        id="3"
        className={`main relative ${selectedStyle === 3 && " border"}`}
        onClick={onClick}
        style={{ height: "50px", fontFamily: font?.value, boxShadow }}
      >
        <div className="blue first">
          <h5>{details.presenterName}</h5>
        </div>
        <div className="red red-four">{details.company}</div>
      </div>
    ),
  },
  {
    div: (
      {
        font,
        secondaryColor,
        primaryColor,
        fontColor,
        presenterFontSize,
        companyFontSize,
        selectedStyle,
        boxShadow,
      },
      onClick,
      details
    ) => (
      <div
        id="4"
        style={{ minWidth: "50%", fontFamily: font?.value, boxShadow }}
        onClick={onClick}
        className={`pr-5 ${selectedStyle === 4 && " border"}`}
      >
        <div className="main five pr-5" style={{}}>
          <div className="blue">
            <h5>{details.presenterName}</h5>
          </div>
          <div className="">{details.company}</div>
        </div>
      </div>
    ),
  },
  {
    div: (
      {
        logoUrl,
        font,
        secondaryColor,
        primaryColor,
        fontColor,
        presenterFontSize,
        companyFontSize,
        selectedStyle,
        boxShadow,
      },
      onClick,
      details
    ) => (
      <div
        id="5"
        className={`main ${selectedStyle === 5 && " border"}`}
        style={{
          fontFamily: font?.value,
          boxShadow,
        }}
        onClick={onClick}
      >
        <div className="second-inner bg-red">
          <img
            src={logoUrl?.value || RandomLogo}
            className="secondlogo"
            alt=""
          />
          <div className="secondtext" style={{}}>
            <h3>{details.presenterName}</h3>
            <p>{details.company}</p>
          </div>
        </div>
      </div>
    ),
  },
];
