import React, { useState } from "react";
import { assets } from "../assets/assets";
import "./Login.css";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle forms
  const [activeBullet, setActiveBullet] = useState(1); // State for carousel bullets

  // Toggle between sign-in and sign-up forms
  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
  };

  // Handle slider movement for carousel
  const moveSlider = (index) => {
    setActiveBullet(index);
  };

  // Prevent form submission default behavior
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(isSignIn ? "Sign In Form Submitted" : "Sign Up Form Submitted");
  };

  // Calculate the text slider's position
  const sliderStyle = {
    transform: `translateY(${-(activeBullet - 1) * 2.2}rem)`,
  };

  return (
    <main className={isSignIn ? "" : "sign-up-mode"}>
      <div className="box">
        <div className="inner-box">
          {/* Forms */}
          <div className="forms-wrap">
            {isSignIn ? (
              <form
                onSubmit={handleFormSubmit}
                autoComplete="off"
                className="sign-in-form"
              >
                <div className="logo">
                  <img src={assets.loginlogo} alt="artisans" />
                  <h4 className="text-orange-400">The Artisans Collective</h4>
                </div>

                <div className="heading">
                  <h2>Welcome Back</h2>
                  <h6>Not registered yet?</h6>
                  <button type="button" className="toggle" onClick={toggleForm}>
                    Sign up
                  </button>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                    <label>Name</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                    <label>Password</label>
                  </div>

                  <input type="submit" value="Sign In" className="sign-btn" />

                  
                </div>
              </form>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                autoComplete="off"
                className="sign-up-form"
              >
                <div className="logo">
                  <img src={assets.loginlogo} alt="easyclass" />
                  <h4>The Artisans Collective</h4>
                </div>

                <div className="heading">
                  <h2>Get Started</h2>
                  <h6>Already have an account?</h6>
                  <button type="button" className="toggle" onClick={toggleForm}>
                    Sign in
                  </button>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="text"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                    <label>Name</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="email"
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                    <label>Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                    <label>Password</label>
                  </div>

                  <input type="submit" value="Sign Up" className="sign-btn" />

                  <p className="text">
                    By signing up, I agree to the{" "}
                    <a href="#">Terms of Service</a> and{" "}
                    <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Carousel */}
          <div className="carousel">
            <div className="images-wrapper">
              <img
                src={assets.image1}
                className={`image img-1 ${activeBullet === 1 ? "show" : ""}`}
                alt=""
              />
              <img
                src={assets.image2}
                className={`image img-2 ${activeBullet === 2 ? "show" : ""}`}
                alt=""
              />
              <img
                src={assets.image3}
                className={`image img-3 ${activeBullet === 3 ? "show" : ""}`}
                alt=""
              />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group" style={sliderStyle}>
                  <h2>Display your handcrafted masterpieces.</h2>
                  <h2>Curate collections that reflect your artistry.</h2>
                  <h2>Engage with customers & share your art.</h2>
                </div>
              </div>

              <div className="bullets">
                {[1, 2, 3].map((bullet) => (
                  <span
                    key={bullet}
                    className={activeBullet === bullet ? "active" : ""}
                    onClick={() => moveSlider(bullet)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
