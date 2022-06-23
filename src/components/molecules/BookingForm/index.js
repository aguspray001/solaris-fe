import React, { useState } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

function BookingForm({ title, onClose, onConfirm }) {
  const [destination, setDestination] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [busSize, setBusSize] = useState("");

  const bookData = { destination, pickUpLocation, departureDate, returnDate };

  return (
    <div className="max-w-[40rem] bg-white px-5 py-5 border-4 border-blue-800 shadow-2xl rounded-lg">
      <div className="flex flex-col justify-center items-center mb-6">
        <h1 className="text-2xl font-bold mb-10">{title}</h1>
        <div>
          <Input
            type={"text"}
            onChange={setDestination}
            placeHolder="Tujuan (contoh: Jogjakarta)"
            value={destination}
          />
          <Input
            type={"text"}
            onChange={setBusSize}
            placeHolder="Ukuran Bis (contoh: Besar 2 Unit)..."
            value={busSize}
          />
          <Input
            type={"text"}
            onChange={setPickUpLocation}
            placeHolder="Penjemputan (contoh: Alun-Alun Sidoarjo)"
            value={pickUpLocation}
          />
          <>
            <span className="block mt-4">Tanggal Berangkat:</span>
            <Input
              type={"date"}
              onChange={setDepartureDate}
              placeHolder="Tanggal Berangkat..."
              value={departureDate}
            />
            <span className="block mt-4">Tanggal Pulang:</span>
            <Input
              type={"date"}
              onChange={setReturnDate}
              placeHolder="Tanggal Pulang..."
              value={returnDate}
            />
          </>
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
