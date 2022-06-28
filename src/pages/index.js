import { useAmp } from 'next/amp'
import React, { useState } from "react";
import moment from "moment";

import MainLayout from "../components/MainLayout";
import BookingForm from "../components/molecules/BookingForm";
import Button from "../components/atoms/Button";
import FeatureText from "../components/atoms/FeatureText";

import travelImage from "../../public/images/travel-bg.svg";
import bookingImage from "../../public/images/booking.svg";

import dataFeature from "../data/data-feature";
import dataDestination from '../data/data-destination';
import AMPImage from "../components/atoms/AMPImage";

export const config = { amp: 'hybrid' }
function Home() {
  const [isShowModal, setIsShowModal] = useState(false);
  const isAmp = useAmp();

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
    <MainLayout isNeedHeader title="Home Page" desc="Landing Page and Booking Form">
      <section className="relative flex flex-col justify-between items-center md:flex-row">
        {isShowModal && (
          <div className="absolute z-10 top-10">
            <BookingForm
              title={"Booking Form"}
              onClose={setIsShowModal}
              onConfirm={bookNowConfirm}
            />
          </div>
        )}
        <div className="flex flex-col mt-20 justify-center items-center sm:justify-start sm:items-start sm:mt-0">
          <h1 className="text-4xl text-blue-600 font-bold mb-4 sm:text-4xl lg:text-6xl">
            Solaris Travel
          </h1>
          <p className="block mb-10 -mt-2 text-center">
            Part of PT. Bina Putra Solaris Jaya Group
          </p>
          <q className="block text-lg text-black font-bold mb-10 -mt-4 text-center sm:text-left">
            We are here to guide your amazing <br /> trip and vacation.
          </q>
          <Button title={"Booking Now"} isPrimary onClick={showModal}></Button>
        </div>
        <div className="mt-10">
          {isShowModal === false ? (
            <AMPImage height={400} width={400} src={travelImage} alt="home-travel" isAmp={isAmp}/>
          ) : (
            <AMPImage height={400} width={400} src={bookingImage} alt="booking" isAmp={isAmp}/>
          )}
        </div>
      </section>
      <section className="flex flex-col flex-wrap gap-4 justify-center items-center bg-blue-700 py-8 rounded-xl shadow-md sm:flex-row sm:items-center sm:justify-between">
        {dataFeature &&
          dataFeature.map((feature, key) => {
            const isLastFeature = dataFeature.length === (key+1)
            return (
              <FeatureText
                key={key}
                value={feature.value}
                description={feature.desc}
                isLastFeature={isLastFeature}
              />
            );
          })}
      </section>
      <section className="flex justify-center">
        <div className="grid grid-flow-dense grid-cols-1 gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {
            dataDestination &&
            dataDestination.map((destination, key)=>{
              return(
                <div key={key} className="flex flex-col relative rounded-xl overflow-auto">
                  <span className="flex justify-center items-center absolute rounded-tr-xl rounded-bl-xl top-0 right-0 z-[998] bg-blue-600 h-4 p-4">
                    <p className="font-semibold text-white">{destination.imageAlt}</p>
                  </span>
                  <AMPImage height={200} width={300}  className="object-cover hover:opacity-75 hover:scale-[1.1] cursor-pointer" src={destination.imagePath} alt={destination.imageAlt} isAmp={isAmp}/>
                </div>
              )
            })
          }
        </div>
      </section>
    </MainLayout>
  );
}

export default Home;
