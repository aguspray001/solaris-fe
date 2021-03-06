import React from "react";
import Image from "next/image";
import MainLayout from "../components/MainLayout";
import notFoundImage from "../../public/images/404.svg";
import Button from "../components/atoms/Button";
import { useRouter } from "next/router";

const NotFoundPage = () => {

  const router = useRouter()

  return (
    <MainLayout title="Not Found" desc="not found page" isNeedHeader>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="mb-4">
          <Image src={notFoundImage} alt="notfound-image" />
        </div>
        <Button title={"Go Back"} isPrimary onClick={router.back}/>
      </div>
    </MainLayout>
  );
};

export default NotFoundPage;
