import React from "react";
import videoBg from "../assets/videoBg.mp4";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  XOutlined,
} from "@ant-design/icons";
import { Space } from "antd";

const Main = () => {
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1>Greetings, and Welcome Aboard</h1>
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
