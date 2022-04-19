import { img } from "./components/CarouselItem";

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
// font: { value: "", error: false },
//     fontColor: { value: "", error: false },
//     primaryColor: { value: "", error: false },
//     secondaryColor: { value: "", error: false },
//     presenterFontSize: { value: "", error: false },
//     companyFontSize: { value: "", error: false },
//     logoUrl: { value: "", error: false, fileName: "" },

export const styles = [
  {
    div: (
      {
        font,
        secondaryColor,
        primaryColor,
        fontColor,
        presenterFontSize,
        companyFontSize, selectedStyle, boxShadow
      },
      onClick,
      details
    ) => (
      <div
        className={`main pr-5 ${selectedStyle === 0 && ' border'}`}
        onClick={() => onClick(0)}
        style={{ fontFamily: font, }}
      >
        <div
          className="blue first"
          style={{
            backgroundColor: secondaryColor.value,
            color: fontColor.value,
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
    ),
  },
  {
    div: ({ selectedStyle }, onClick, details) => (
      <div className={`row ${selectedStyle === 1 && ' border'}`}
        // style={{width:'50%'}} 
        onClick={() => onClick(1)}>
        <div className="second-inner">
          <img src={img} className="secondlogo" alt="" />
          <div className="secondtext" style={{ fontFamily: "" }}>
            <h3>{details.presenterName}</h3>
            <p>{details.company}</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    div: ({ selectedStyle }, onClick, details) => (
      <div
        style={{ minWidth: "50%" }}
        onClick={() => onClick(2)}
        className={`pr-5 ${selectedStyle === 2 && ' border'}`}
      >
        <div className="main border bg-red h-95">
          <h2>{details.presenterName}</h2>
          <p>{details.company}</p>
        </div>
      </div>
    ),
  },
  {
    div: ({ selectedStyle }, onClick, details) => (
      <div
        className={`main relative ${selectedStyle === 3 && ' border'}`}
        onClick={() => onClick(3)}
        style={{ height: "50px", fontFamily: "" }}
      >
        <div className="blue first">
          <h5>{details?.presenterName}</h5>
        </div>
        <div className="red red-four">{details?.company}</div>
      </div>
    ),
  },
  {
    div: ({ selectedStyle, font }, onClick, details) => (
      <div
        style={{ minWidth: "50%" }}
        onClick={() => onClick(4)}
        className={`pr-5 ${selectedStyle === 4 && ' border'}`}
      >
        <div
          className="main five pr-5"
          style={{
            fontFamily: font,
          }}
        >
          <div className="blue">
            <h5>{details?.presenterName}</h5>
          </div>
          <div className="">{details.company}</div>
        </div>
      </div>
    ),
  },
  {
    div: ({ selectedStyle }, onClick, details) => (
      <div
        className={`main ${selectedStyle === 5 && ' border'}`}
        style={{
          fontFamily: "",
        }}
        onClick={() => onClick(5)}
      >
        <div className="second-inner bg-red">
          <img src={img} className="secondlogo" alt="" />
          <div className="secondtext" style={{ fontFamily: "" }}>
            <h3>{details.presenterName}</h3>
            <p>{details.company}</p>
          </div>
        </div>
      </div>
    ),
  },
];
