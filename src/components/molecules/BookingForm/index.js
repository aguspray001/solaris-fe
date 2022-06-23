import React, { useState } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

function BookingForm({ title, onClose, onConfirm }) {
  const [data, setData] = useState({
    destination: "",
    pickUpLocation: "",
    busSize: "",
    departureDate: new Date(),
    returnDate: new Date(),
  });

  const updateData = (e) => {
    setData((data)=>({
      ...data,
      [e.target.name] : e.target.value
    }))
  }

  return (
    <div className="max-w-[40rem] bg-white px-5 py-5 border-4 border-blue-800 shadow-2xl rounded-lg">
      <div className="flex flex-col justify-center items-center mb-6">
        <h1 className="text-2xl font-bold mb-10">{title}</h1>
        <div>
          <Input
            name="destination"
            type={"text"}
            onChange={updateData}
            placeHolder="Tujuan (contoh: Jogjakarta)"
            value={data.destination}
          />
          <Input
            name="busSize"
            type={"text"}
            onChange={updateData}
            placeHolder="Ukuran Bis (contoh: Besar 2 Unit)..."
            value={data.busSize}
          />
          <Input
            name="pickUpLocation"
            type={"text"}
            onChange={updateData}
            placeHolder="Penjemputan (contoh: Alun-Alun Sidoarjo)"
            value={data.pickUpLocation}
          />
          <>
            <span className="block mt-4">Tanggal Berangkat:</span>
            <Input
              name="departureDate"
              type={"date"}
              onChange={updateData}
              placeHolder="Tanggal Berangkat..."
              value={data.departureDate}
            />
            <span className="block mt-4">Tanggal Pulang:</span>
            <Input
              name="returnDate"
              type={"date"}
              onChange={updateData}
              placeHolder="Tanggal Pulang..."
              value={data.returnDate}
            />
          </>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="mr-4">
          <Button
            title={"Confirm"}
            onClick={() => onConfirm(data)}
            isPrimary
          />
        </div>
        <Button title={"Close"} onClick={(e) => onClose(!e)} />
      </div>
    </div>
  );
}

export default BookingForm;
