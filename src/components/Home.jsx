import React, { useEffect } from "react";
import styles from "./Home.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); //global
  }, []);

  return (
    <>
      <h1 className={styles.soon}>НАСКОРО</h1>

      <div
        data-aos-delay="1000"
        data-aos="zoom-in"
        className={styles.home_container}
      >
        <div className={styles.avatar_container}>
          <Navbar />
          <h1>BOKSY MK</h1>
          <div
            data-aos-delay="2000"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className={styles.avatar}
          >
            <img className={styles.avatar_img} src={avatar1} alt="/" />
          </div>

          <div className={styles.button_container}>
            <Link
              to={"/register"}
              onClick={() => console.log("IM CLICKED")}
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              className={styles.button}
            >
              REGISTER
            </Link>
          </div>
          <div
            style={{ marginTop: "150px" }}
            data-aos="zoom-out-left"
            data-aos-offset="500"
            data-aos-easing="ease-in-out"
            className={styles.avatar}
          >
            <img className={styles.avatar_img} src={avatar2} alt="/" />
          </div>

          <div
            style={{ marginTop: "200px" }}
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-delay="3000"
            data-aos-duration="500"
            // className={styles.avatar}
          >
            <h2>HELLOOO BOKSY</h2>
          </div>


          <div
            style={{alignSelf: "flex-end"}}
            data-aos-delay="1000"
            data-aos="zoom-in-down"
            className={styles.avatar}
          >
            <img className={styles.avatar_img} src={avatar1} alt="/" />
          </div>


          <div
            style={{alignSelf: "flex-start"}}
            data-aos-delay="1000"
            data-aos="zoom-in-down"
            className={styles.avatar}
          >
            <img className={styles.avatar_img} src={avatar1} alt="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
