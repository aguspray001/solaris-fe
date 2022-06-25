import React from "react";
import Image from "next/image";

const AMPImage = ({ isAmp, alt, src }) => {
  if (!isAmp) {
    return <Image alt={alt} src={src}></Image>;
  } else {
    return <amp-img alt={alt} src={src}></amp-img>;
  }
};

export default AMPImage;
