import * as React from "react";
import { Image } from "antd";

const noImg = require("./noImg.png");

export default (props: {src?:string}) => {
  return <Image preview={false} placeholder fallback={noImg} width="100%" src={props.src || noImg} />;
};