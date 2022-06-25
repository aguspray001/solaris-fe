import React from "react";
import Image from "next/image";

const AMPImage = ({ isAmp, alt, src, height, width, className }) => {
  if (!isAmp) {
    return <Image className={className} height={height} width={width} alt={alt} src={src}></Image>;
  } else {
    return <amp-img className={className} height={height} width={width} alt={alt} src={src}></amp-img>;
  }
};

export default AMPImage;
