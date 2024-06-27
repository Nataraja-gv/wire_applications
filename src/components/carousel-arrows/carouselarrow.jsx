import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./carouselarrow.css";

export const CustomLeftArrow = ({ onClick }) => (
  <div
    className="custom-arrow left hover:bg-neutral-200"
    onClick={onClick}
    style={{
      position: "absolute",
      left: "5px",
      top: "50%",
      transform: "translateY(-50%)",
      //   zIndex: 100,
      cursor: "pointer",
      //   backgroundColor:"white"
      zIndex: 1,
    }}
  >
    <KeyboardArrowLeftIcon className="custom-arrow hover:bg-neutral-200" />
  </div>
);

export const CustomRightArrow = ({ onClick }) => (
  <div
    className="custom-arrow right hover:bg-neutral-200"
    onClick={onClick}
    style={{
      position: "absolute",
      right: "5px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      cursor: "pointer",
      //   backgroundColor:"white"
    }}
  >
    <KeyboardArrowRightIcon className="custom-arrow hover:bg-neutral-200" />
  </div>
);
