import React, { useContext, useEffect } from "react";
import { SimpleLink } from "../../../ui/Link/Link";
import { makeStyles } from "@mui/styles";
import "./style.css";
import { ResumeInputContext } from "../../../contexts/ResumeInputContext";
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
  const { activeFeatures, setActiveFeatures } = useContext(ResumeInputContext);

  useEffect(() => {
    console.log(activeFeatures);
  }, [activeFeatures]);

  return (
    <div className="navbar">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        onSlideChange={(swiper) => setActiveFeatures(swiper.realIndex)}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        <SwiperSlide>
          <SimpleLink text="PROFILE" styleClass={classes.featuresLink} />
        </SwiperSlide>
        <SwiperSlide>
          <SimpleLink text="SUMMARY" styleClass={classes.featuresLink} />
        </SwiperSlide>

        <SwiperSlide>
          <SimpleLink text="EXPERIENCE" styleClass={classes.featuresLink} />
        </SwiperSlide>
        <SwiperSlide>
          <SimpleLink text="EDUCATION" styleClass={classes.featuresLink} />
        </SwiperSlide>
        <SwiperSlide>
          <SimpleLink text="TECHNICAL SKILLS" styleClass={classes.featuresLink} />
        </SwiperSlide>
        <SwiperSlide>
          <SimpleLink text="ACHIEVEMENTS" styleClass={classes.featuresLink} />
        </SwiperSlide>
        <SwiperSlide>
          <SimpleLink text="PROJECTS" styleClass={classes.featuresLink} />
        </SwiperSlide>
        <SwiperSlide>
          <SimpleLink text="HOBBIES" styleClass={classes.featuresLink} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
