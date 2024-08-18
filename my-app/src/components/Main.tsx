import React, { useEffect, useState } from "react";
import videoBg from "../assets/videoBg.mp4";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  XOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import { Link } from "react-router-dom";

const Main = () => {
  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(() => {
    getAdvice();
  }, []); // Empty dependency array means this effect will only run once when the component mounts
  const [advice, setAdvice] = useState(null);
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted playsInline />
        <div className="content">
          <h1>Greetings, and Welcome Aboard</h1>
          {/* <nav
            className="navbar-left"
            style={{
              alignSelf: "auto",
              marginTop: "20px",
              paddingLeft: "-60%",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav> */}
          <a style={{ margin: "16px", color: "white" }} href="/">
            Home
          </a>
          <a style={{ margin: "16px", color: "white" }} href="/about">
            About
          </a>

          <h1 style={{ margin: "16px" }}>{advice}</h1>
          <button
            style={{
              margin: "16px",
            }}
            onClick={getAdvice}
          >
            Get advice
          </button>
          <p>
            You have read <strong>{count}</strong> advices
          </p>

          <div className="social-media-icons-white footer">
            <Space>
              <a href="https://www.facebook.com/rajesh.maldar">
                <FacebookFilled />
              </a>
              <a href="https://x.com/rajeshmaldar">
                <XOutlined />
              </a>
              <a href="https://www.instagram.com/rajeshmaldar?igsh=ZHpzdmt1MDNiN2sx">
                <InstagramFilled />
              </a>
              <a href="https://www.linkedin.com/in/rajesh-maldar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <LinkedinFilled />
              </a>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
