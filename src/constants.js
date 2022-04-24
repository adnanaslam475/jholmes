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

export const assetStyles = [
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
      return (
        <div
          style={{ minWidth: "50%" }}
          id="0"
          className={`${selectedStyle === 0 && " border"}`}
        >
          {" "}
          <div
            className={`main ${selectedStyle === 0 && ""}`}
            onClick={() => onClick(0)}
            style={{
              fontFamily: font.value,
              boxShadow,
              color: fontColor.value,
            }}
          >
            <div
              className="blue first"
              style={{
                backgroundColor: secondaryColor.value,
              }}
            >
              <h5 style={{ fontSize: presenterFontSize.value }}>
                {details.presenterName}
              </h5>
            </div>
            <div
              className="red"
              style={{
                backgroundColor: primaryColor.value,
                fontSize: companyFontSize.value,
              }}
            >
              {details.company}
            </div>
          </div>
        </div>
      );
    },
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
        logoUrl,
      },
      onClick,
      details
    ) => (
      <div
        className={`main row ${selectedStyle == 1 && " border"}`}
        onClick={() => onClick(1)}
        style={{
          fontFamily: font.value,
          color: fontColor.value,
        }} id="1"
      >
        <div className="second-inner" style={{ boxShadow }}>
          <img
            src={logoUrl.value || RandomLogo}
            style={{
              border: `1px solid ${primaryColor.value}`,
            }}
            className="secondlogo"
            alt="llll"
          />
          <div
            className="secondtext"
            style={{ backgroundColor: secondaryColor.value }}
          >
            <h3
              style={{
                fontSize: presenterFontSize.value,
              }}
            >
              {details.presenterName}
            </h3>
            <p
              style={{
                fontSize: companyFontSize.value,
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
        onClick={() => onClick(2)}
        style={{
          minWidth: "50%",
          color: fontColor.value,
          fontFamily: font.value,
          boxShadow,
        }}
        className={`pr-5 ${selectedStyle == 2 && " border"}`}
      >
        <div
          id="2"
          style={{ backgroundColor: secondaryColor.value }}
          className="main border bg-red h-50px"
        >
          <h2 style={{ fontSize: presenterFontSize.value }}>
            {details.presenterName}
          </h2>
          <p style={{ fontSize: companyFontSize.value }}>{details.company}</p>
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
        className={`main relative ${selectedStyle == 3 && " border"}`}
        onClick={() => onClick(3)}
        style={{
          fontFamily: font.value,
          boxShadow,
          color: fontColor.value,
        }}
      >
        <div
          id="3"
          className="blue first"
          style={{
            backgroundColor: secondaryColor.value,
            fontSize: presenterFontSize.value,
          }}
        >
          <h5>{details.presenterName}</h5>
        </div>
        <div
          className="red red-four"
          style={{
            backgroundColor: primaryColor.value,
            fontSize: companyFontSize.value,
          }}
        >
          {details.company}
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
        id="4"
        onClick={() => onClick(4)}
        style={{
          minWidth: "50%",
          fontFamily: font.value,
          boxShadow,
          color: fontColor.value,
          backgroundColor: secondaryColor.value,
        }}
        className={`main pr-5 ${selectedStyle == 4 && " border"}`}
      >
        <div className="five pr-5">
          <div className="blue" style={{ backgroundColor: primaryColor.value }}>
            <h5 style={{ fontSize: presenterFontSize.value }}>
              {details.presenterName}
            </h5>
          </div>
          <div style={{ fontSize: companyFontSize.value }}>
            {details.company}
          </div>
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
        className={`main ${selectedStyle == 5 && " border"}`}
        style={{
          fontFamily: font.value,
          boxShadow,
          color: fontColor.value,
        }}
        onClick={() => onClick(5)}
      >
        <div
          className="second-inner bg-red"
          style={{ backgroundColor: primaryColor.value, alignItems:'initial' }}
        >
          <img
            src={logoUrl.value || RandomLogo}
            className="secondlogo"
            alt=""
          />
          <div
            className="secondtext"
            style={{ backgroundColor: secondaryColor.value }}
          >
            <h3 style={{ fontSize: presenterFontSize.value }}>
              {details.presenterName}
            </h3>
            <p style={{ fontSize: companyFontSize.value }}>{details.company}</p>
          </div>
        </div>
      </div>
    ),
  },
];
