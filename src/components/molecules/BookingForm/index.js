import React, { useState } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

function BookingForm({ title, onClose, onConfirm }) {
  const [destination, setDestination] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const bookData = { destination, pickUpLocation, departureDate, returnDate };

  return (
    <div className="max-w-[40rem] bg-white px-5 py-5 border-4 border-blue-800 shadow-xl rounded-lg">
      <div className="flex flex-col justify-center items-center mb-6">
        <h1 className="text-2xl font-bold mb-10">{title}</h1>
        <div>
          <Input
            type={"text"}
            onChange={setDestination}
            placeHolder="Tujuan..."
            value={destination}
          />
          <Input
            type={"text"}
            onChange={setPickUpLocation}
            placeHolder="Penjemputan..."
            value={pickUpLocation}
          />
          <Input
            type={"date"}
            onChange={setDepartureDate}
            placeHolder="Tanggal Berangkat..."
            value={departureDate}
          />
          <Input
            type={"date"}
            onChange={setReturnDate}
            placeHolder="Tanggal Pulang..."
            value={returnDate}
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="mr-4">
          <Button
            title={"Confirm"}
            onClick={() => onConfirm(bookData)}
            isPrimary
          />
        </div>
        <Button title={"Close"} onClick={(e) => onClose(!e)} />
      </div>
    </div>
  );
}

export default BookingForm;
