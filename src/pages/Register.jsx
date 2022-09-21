import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import styles from "../pages/Register.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Register = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 }); //global
  }, []);

  return (
    <div
      data-aos-delay="500"
      data-aos="zoom-in"
      className={styles.register_page}
    >
      <Navbar />
      <form
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="2000"
        data-aos-duration="2000"
        className={styles.form}
      >
        {/* E-MAIL */}
        <div
             data-aos="fade-left"
             data-aos-anchor="#example-anchor"
             data-aos-offset="500"
             data-aos-delay="3000"
             data-aos-duration="1000"
          className={styles.input_container}
        >
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email..." />
        </div>

        {/* Password */}
        <div
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-delay="3000"
          data-aos-duration="1000"
          className={styles.input_container}
        >
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password..." />
        </div>

        {/* Confirm password */}

        <div
             data-aos="fade-left"
             data-aos-anchor="#example-anchor"
             data-aos-offset="500"
             data-aos-delay="3000"
             data-aos-duration="1000"
          className={styles.input_container}
        >
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" placeholder="Confirm password..." />
        </div>
      </form>
    </div>
  );
};

export default Register;
