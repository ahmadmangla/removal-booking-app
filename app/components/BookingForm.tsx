"use client";

import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Input from "./formElements/Input";
import Select from "./formElements/Select";

const formData = {
  numberOfMovers: ["1", "2"],
  MovingFrom: [
    {
      selectFloor: [
        "Basement",
        "Ground Floor",
        "Ground + Basement",
        "Ground + 1st",
        "Ground + 1st + 2nd",
        "Ground + 1st + 2nd + 3rd",
        "Ground + 1st + Basement",
        "Ground + 1st + 2nd + Basement",
        "Ground + 1st + 2nd + 3rd + Basement",
        "1st Floor",
        "2nd Floor",
        "3rd Floor",
        "4th Floor",
        "5th Floor and over with lift",
        "5th Floor",
        "6th Floor",
        "7th Floor",
      ],

      isThereALift: false,

      loadingTime: [
        "15 min",
        "30 min",
        "45 min",
        "1 hour",
        "1 hour 30 min",
        "2 hours",
        "2 hours 30 min",
        "3 hours",
        "3 hours 30 min",
        "4 hours",
        "4 hours 30 min",
        "5 hours",
        "5 hours 30 min",
        "6 hours",
        "6 hours 30 min",
        "7 hours",
        "7 hours 30 min",
        "8 hours",
      ],

      packingTime: [
        "Not Required",
        "15 min",
        "30 min",
        "45 min",
        "1 hour",
        "1 hour 30 min",
        "2 hours",
        "2 hours 30 min",
        "3 hours",
        "3 hours 30 min",
        "4 hours",
        "4 hours 30 min",
        "5 hours",
        "5 hours 30 min",
        "6 hours",
        "6 hours 30 min",
        "7 hours",
        "7 hours 30 min",
        "8 hours",
      ],
      disassemblyTime: [
        "Not Required",
        "15 min",
        "30 min",
        "45 min",
        "1 hour",
        "1 hour 30 min",
        "2 hours",
        "2 hours 30 min",
        "3 hours",
        "3 hours 30 min",
        "4 hours",
        "4 hours 30 min",
        "5 hours",
        "5 hours 30 min",
        "6 hours",
        "6 hours 30 min",
        "7 hours",
        "7 hours 30 min",
        "8 hours",
      ],
      parkingOptions: ["Free", "On a Meter - I will Pay", "Restricted with limited parking time", "Restricted - I will provide Parking Permit", "Parking Fine Deposit (£80 + VAT)"],
    },
  ],

  MovingTo: [
    {
      selectFloor: [
        "Basement",
        "Ground Floor",
        "Ground + Basement",
        "Ground + 1st",
        "Ground + 1st + 2nd",
        "Ground + 1st + 2nd + 3rd",
        "Ground + 1st + Basement",
        "Ground + 1st + 2nd + Basement",
        "Ground + 1st + 2nd + 3rd + Basement",
        "1st Floor",
        "2nd Floor",
        "3rd Floor",
        "4th Floor",
        "5th Floor and over with lift",
        "5th Floor",
        "6th Floor",
        "7th Floor",
      ],

      unLoadingTime: [
        "15 min",
        "30 min",
        "45 min",
        "1 hour",
        "1 hour 30 min",
        "2 hours",
        "2 hours 30 min",
        "3 hours",
        "3 hours 30 min",
        "4 hours",
        "4 hours 30 min",
        "5 hours",
        "5 hours 30 min",
        "6 hours",
        "6 hours 30 min",
        "7 hours",
        "7 hours 30 min",
        "8 hours",
      ],

      unPackingTime: [
        "Not Required",
        "15 min",
        "30 min",
        "45 min",
        "1 hour",
        "1 hour 30 min",
        "2 hours",
        "2 hours 30 min",
        "3 hours",
        "3 hours 30 min",
        "4 hours",
        "4 hours 30 min",
        "5 hours",
        "5 hours 30 min",
        "6 hours",
        "6 hours 30 min",
        "7 hours",
        "7 hours 30 min",
        "8 hours",
      ],
      AssemblyTime: [
        "Not Required",
        "15 min",
        "30 min",
        "45 min",
        "1 hour",
        "1 hour 30 min",
        "2 hours",
        "2 hours 30 min",
        "3 hours",
        "3 hours 30 min",
        "4 hours",
        "4 hours 30 min",
        "5 hours",
        "5 hours 30 min",
        "6 hours",
        "6 hours 30 min",
        "7 hours",
        "7 hours 30 min",
        "8 hours",
      ],
      parkingOptions: ["Free", "On a Meter - I will Pay", "Restricted with limited parking time", "Restricted - I will provide Parking Permit", "Parking Fine Deposit (£80 + VAT)"],
    },
  ],

  additionalOptions: [
    {
      CongestionCharge: ["Yes", "No"],
      UltraLowEmissionZone: ["Yes", "No"],
      InsuranceOptions: ["No, I have home content insurance - £0", "Cover up to £5000 - £15", "Cover up to £10000 - £30", "Cover up to £15000 - £45"],
      passengerTraveling: ["Yes", "No"],
      needPackingMaterials: ["Yes", "No"],
    },
  ],

  name: "",
  phone: 0,
  email: "",
};

const BookingForm = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs(new Date()));

  return (
    <>
      <h1 className="font-medium text-center">Get Instant Quote By filling in the Form</h1>
      <form className="p-4">
        <div className="mt-10">
          <div className="mb-8">
            <label htmlFor="first-name" className="block text-lg font-medium leading-6 text-gray-900">
              Select Date and Time for your move
            </label>
            <div className="my-2">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker value={value} className="text-sm font-bold" onChange={(newValue) => setValue(newValue)} />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="number-of-movers" className="block text-lg mb-3 font-medium leading-6 text-gray-900">
              Select Number of Movers
            </label>
            <Select Object={formData.numberOfMovers} label="Number of Movers" />
          </div>

          <div className="mb-8 inner-form-wrapper flex justify-between max-sm:flex-wrap gap-4">
            <div className="w-full">
              <label htmlFor="moving-from" className="block text-lg font-medium leading-6 text-gray-900">
                Moving From
              </label>
              <div className="wrapper mt-5">
                <Input label="From Post Code" icon={<MapPinIcon />} />
                <Select Object={formData.MovingFrom[0].selectFloor} label="Select Floor/Level" />
                {/* <Select Object={formData.MovingFrom[0].isThereALift ? "Yes": "No"} label="is There a lift?" /> */}
                <Select Object={formData.MovingFrom[0].loadingTime} label="Loading Time" />
                <Select Object={formData.MovingFrom[0].packingTime} label="Estimated Packing Time" />
                <Select Object={formData.MovingFrom[0].disassemblyTime} label="Estimated Disassembly Time" />
                <Select Object={formData.MovingFrom[0].parkingOptions} label="Estimated Parking Time" />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="moving-from" className="block text-lg font-medium leading-6 text-gray-900">
                Moving To
              </label>
              <div className="wrapper mt-5">
                <Input label="To Post Code" icon={<MapPinIcon />} />

                <Select Object={formData.MovingTo[0].selectFloor} label="Select Floor/Level" />
                <Select Object={formData.MovingTo[0].unLoadingTime} label="Unloading Time" />
                <Select Object={formData.MovingTo[0].unPackingTime} label="Estimated Unpacking Time" />
                <Select Object={formData.MovingTo[0].AssemblyTime} label="Estimated Assembly Time" />
                <Select Object={formData.MovingTo[0].parkingOptions} label="Estimated Parking Time" />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="moving-from" className="block text-lg font-medium leading-6 text-gray-900">
                Additional Options
              </label>
              <div className="wrapper mt-5">
                <Select Object={formData.additionalOptions[0].CongestionCharge} label="Congestion Charge" />
                <Select Object={formData.additionalOptions[0].UltraLowEmissionZone} label="Ultra Low Emission Zone" />
                <Select Object={formData.additionalOptions[0].InsuranceOptions} label="Select Insurance Options" />
                <Select Object={formData.additionalOptions[0].passengerTraveling} label="Passenger Travelling in the Van?" />
                <Select Object={formData.additionalOptions[0].needPackingMaterials} label="Do you need Packing Materials?" />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="w-full">
              <label htmlFor="moving-from" className="block text-lg font-medium leading-6 text-gray-900">
                Personal Details
              </label>
              <div className="wrapper mt-5">
                <Input label="Name" icon={<UserCircleIcon />} />
                <Input label="Email" icon={<EnvelopeIcon />} />
                <Input label="Phone" icon={<PhoneIcon />} />
              </div>
            </div>
          </div>
        </div>

        <button className="w-full block text-center sm:w-60 bg-black text-white px-4 py-2 rounded mx-auto">Get A Quote</button>
      </form>
    </>
  );
};

export default BookingForm;
