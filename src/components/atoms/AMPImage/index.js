import React from "react";
import Image from "next/image";

const AMPImage = ({ isAmp, alt, src, height, width }) => {
  if (!isAmp) {
    return <Image height={height} width={width} alt={alt} src={src}></Image>;
  } else {
    return <amp-img height={height} width={width} alt={alt} src={src}></amp-img>;
  }
};

export default AMPImage;
