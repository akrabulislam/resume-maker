import React from "react";
import { SimpleLink } from "../../../ui/Link/Link";
import { makeStyles } from "@mui/styles";
import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const useStyles = makeStyles({
  featuresLink: {
    display: "block",
    textDecoration: "none",
    padding: "7px 10px",
    color: "white",
    background: "#4a5568",
    borderRadius: "5px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize : '12px',
    letterSpacing : '1px'
  }
});

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div className="options">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        <SwiperSlide>
          <SimpleLink text="Templates" styleClass={classes.featuresLink} />
        </SwiperSlide>
        <SwiperSlide>
          <SimpleLink text="Colors" styleClass={classes.featuresLink} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
