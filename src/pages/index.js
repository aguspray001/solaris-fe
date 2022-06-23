import Image from "next/image";
import React, { useState } from "react";
import moment from "moment";

import MainLayout from "../components/MainLayout";
import BookingForm from "../components/molecules/BookingForm";
import Button from "../components/atoms/Button";
import FeatureText from "../components/atoms/FeatureText";

import travelImage from "../../public/images/travel-bg.svg";
import bookingImage from "../../public/images/booking.svg";
import dataFeature from "../data/data-feature";

function Home() {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal((prevValue) => !prevValue);
  };

  // send message to WhatsApp
  const bookNowConfirm = (data) => {
    const { destination, pickUpLocation, busSize, departureDate, returnDate } = data;
    const fixDepartureDate = moment(departureDate).format("DD MMMM YYYY");
    const fixReturnDate = moment(returnDate).format("DD MMMM YYYY");

    window.open(
      `https://api.whatsapp.com/send?phone=+6281218097779&text=Permisi *admin Solaris Jaya*, saya mau tanya ${busSize} untuk ke ${destination} tanggal ${fixDepartureDate} ${
        returnDate ? `sampai ${fixReturnDate}` : ""
      }, jemput di ${pickUpLocation} apakah masih ada slot?`,
      "_blank"
    );
  };

  return (
    <MainLayout isNeedHeader>
      <section className="relative flex flex-col justify-between items-center md:flex-row">
        {isShowModal && (
          <div className="absolute z-10 mt-20">
            <div className="relative">
              <BookingForm
                title={"Booking Form"}
                onClose={setIsShowModal}
                onConfirm={bookNowConfirm}
              />
            </div>
          </div>
        )}
        <div className="flex flex-col mt-20 justify-center items-center sm:justify-start sm:items-start sm:mt-0">
          <h1 className="text-4xl text-blue-600 font-bold mb-4 sm:text-4xl lg:text-6xl">
            Solaris Travel
          </h1>
          <span className="block mb-10 -mt-2">
            Part of PT. Bina Putra Solaris Jaya Group
          </span>
          <q className="block text-lg text-black font-bold mb-10 -mt-4 text-center sm:text-left">
            We are here to guide your amazing <br /> trip and vacation.
          </q>
          <Button title={"Booking Now"} isPrimary onClick={showModal}></Button>
        </div>
        <div className="mt-10">
          {isShowModal === false ? (
            <Image src={travelImage} alt="home-travel"></Image>
          ) : (
            <Image src={bookingImage} alt="booking"></Image>
          )}
        </div>
      </section>
      <section className="flex flex-col flex-wrap gap-4 justify-center items-center bg-blue-700 py-8 px-8 rounded-xl shadow-md sm:flex-row sm:items-center sm:justify-between">
        {dataFeature &&
          dataFeature.map((feature, key) => {
            return (
              <FeatureText
                key={key}
                value={feature.value}
                description={feature.desc}
              />
            );
          })}
      </section>
    </MainLayout>
  );
}

export default Home;
