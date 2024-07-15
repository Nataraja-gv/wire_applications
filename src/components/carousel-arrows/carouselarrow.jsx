 /* eslint-disable react/prop-types */
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
import "./carouselarrow.css";

export const CustomLeftArrow = ({ onClick }) => (
  <div
    className="custom-arrow left"
    onClick={onClick}
    style={{
      position: "absolute",
      left: "60px",
      top: "45%",
      transform: "translateY(-50%)",
      zIndex: 1,
    }}
  >
    <BiLeftArrowAlt />
  </div>
);

export const CustomRightArrow = ({ onClick }) => (
  <div
    className="custom-arrow right"
    onClick={onClick}
    style={{
      position: "absolute",
      right: "60px",
      top: "45%",
      transform: "translateY(-50%)",
      zIndex: 1,
    }}
  >
    <BiRightArrowAlt />
  </div>
);
