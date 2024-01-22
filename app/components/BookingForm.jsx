"use client";

import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import Input from "./formElements/Input";
import Select from "./formElements/Select";
import DistanceCalculator from "./DistanceCalculator";

const formData = {
  numberOfMovers: {
    name: "Number of Movers",
    options: [
      {
        name: "1",
        charges: 15,
      },
      {
        name: "2 (A helper Included)",
        charges: 30,
      },
    ],
  },
  movingFrom: {
    name: "Moving From",
    selectFloor: {
      name: "Select Floor",
      options: [
        { name: "Basement", charges: 5 },
        { name: "Ground Floor", charges: 0 },
        { name: "Ground + Basement", charges: 10 },
        { name: "Ground + 1st", charges: 5 },
        { name: "Ground + 1st + 2nd", charges: 10 },
        { name: "Ground + 1st + 2nd + 3rd", charges: 15 },
        { name: "Ground + 1st + Basement", charges: 10 },
        { name: "Ground + 1st + 2nd + Basement", charges: 15 },
        { name: "Ground + 1st + 2nd + 3rd + Basement", charges: 20 },
        { name: "1st Floor", charges: 5 },
        { name: "2nd Floor", charges: 10 },
        { name: "3rd Floor", charges: 15 },
        { name: "4th Floor", charges: 20 },
        { name: "5th Floor and over with lift", charges: 5 },
        { name: "5th Floor", charges: 25 },
        { name: "6th Floor", charges: 30 },
        { name: "7th Floor", charges: 35 },
      ],
    },

    isThereALift: {
      options: [{ name: "Yes" }, { name: "No" }],
    },

    loadingTime: {
      name: "Loading Time",
      options: [
        { name: "15 min", charges: 15 },
        { name: "30 min", charges: 15 },
        { name: "45 min", charges: 15 },
        { name: "1 hour", charges: 15 },
        { name: "1 hour 30 min", charges: 30 },
        { name: "2 hours", charges: 30 },
        { name: "2 hours 30 min", charges: 45 },
        { name: "3 hours", charges: 45 },
        { name: "3 hours 30 min", charges: 60 },
        { name: "4 hours", charges: 60 },
        { name: "4 hours 30 min", charges: 75 },
        { name: "5 hours", charges: 75 },
        { name: "5 hours 30 min", charges: 90 },
        { name: "6 hours", charges: 90 },
        { name: "6 hours 30 min", charges: 105 },
        { name: "7 hours", charges: 105 },
        { name: "7 hours 30 min", charges: 120 },
        { name: "8 hours", charges: 120 },
      ],
    },

    packingTime: {
      name: "Packing Time",
      options: [
        { name: "Not Required", charges: 0 },
        { name: "15 min", charges: 15 },
        { name: "30 min", charges: 15 },
        { name: "45 min", charges: 15 },
        { name: "1 hour", charges: 15 },
        { name: "1 hour 30 min", charges: 15 },
        { name: "2 hours", charges: 15 },
        { name: "2 hours 30 min", charges: 15 },
        { name: "3 hours", charges: 15 },
        { name: "3 hours 30 min", charges: 15 },
        { name: "4 hours", charges: 15 },
        { name: "4 hours 30 min", charges: 15 },
        { name: "5 hours", charges: 15 },
        { name: "5 hours 30 min", charges: 15 },
        { name: "6 hours", charges: 15 },
        { name: "6 hours 30 min", charges: 15 },
        { name: "7 hours", charges: 15 },
        { name: "7 hours 30 min", charges: 15 },
        { name: "8 hours", charges: 15 },
      ],
    },
    disassemblyTime: {
      name: "Disassembly Time",
      options: [
        { name: "Not Required", charges: 0 },
        { name: "15 min", charges: 15 },
        { name: "30 min", charges: 15 },
        { name: "45 min", charges: 15 },
        { name: "1 hour", charges: 15 },
        { name: "1 hour 30 min", charges: 15 },
        { name: "2 hours", charges: 15 },
        { name: "2 hours 30 min", charges: 15 },
        { name: "3 hours", charges: 15 },
        { name: "3 hours 30 min", charges: 15 },
        { name: "4 hours", charges: 15 },
        { name: "4 hours 30 min", charges: 15 },
        { name: "5 hours", charges: 15 },
        { name: "5 hours 30 min", charges: 15 },
        { name: "6 hours", charges: 15 },
        { name: "6 hours 30 min", charges: 15 },
        { name: "7 hours", charges: 15 },
        { name: "7 hours 30 min", charges: 15 },
        { name: "8 hours", charges: 15 },
      ],
    },
  },
  movingTo: {
    name: "Moving To",
    selectFloor: {
      name: "Select Floor",
      options: [
        { name: "Basement", charges: 5 },
        { name: "Ground Floor", charges: 0 },
        { name: "Ground + Basement", charges: 10 },
        { name: "Ground + 1st", charges: 5 },
        { name: "Ground + 1st + 2nd", charges: 10 },
        { name: "Ground + 1st + 2nd + 3rd", charges: 15 },
        { name: "Ground + 1st + Basement", charges: 10 },
        { name: "Ground + 1st + 2nd + Basement", charges: 15 },
        { name: "Ground + 1st + 2nd + 3rd + Basement", charges: 20 },
        { name: "1st Floor", charges: 5 },
        { name: "2nd Floor", charges: 10 },
        { name: "3rd Floor", charges: 15 },
        { name: "4th Floor", charges: 20 },
        { name: "5th Floor and over with lift", charges: 5 },
        { name: "5th Floor", charges: 25 },
        { name: "6th Floor", charges: 30 },
        { name: "7th Floor", charges: 35 },
      ],
    },

    isThereALift: {
      options: ["Yes", "No"],
    },

    unLoadingTime: {
      name: "Unloading Time",
      options: [
        { name: "15 min", charges: 15 },
        { name: "30 min", charges: 15 },
        { name: "45 min", charges: 15 },
        { name: "1 hour", charges: 15 },
        { name: "1 hour 30 min", charges: 30 },
        { name: "2 hours", charges: 30 },
        { name: "2 hours 30 min", charges: 45 },
        { name: "3 hours", charges: 45 },
        { name: "3 hours 30 min", charges: 60 },
        { name: "4 hours", charges: 60 },
        { name: "4 hours 30 min", charges: 75 },
        { name: "5 hours", charges: 75 },
        { name: "5 hours 30 min", charges: 90 },
        { name: "6 hours", charges: 90 },
        { name: "6 hours 30 min", charges: 105 },
        { name: "7 hours", charges: 105 },
        { name: "7 hours 30 min", charges: 120 },
        { name: "8 hours", charges: 120 },
      ],
    },

    unPackingTime: {
      name: "Unpacking Time",
      options: [
        { name: "Not Required", charges: 0 },
        { name: "15 min", charges: 15 },
        { name: "30 min", charges: 15 },
        { name: "45 min", charges: 15 },
        { name: "1 hour", charges: 15 },
        { name: "1 hour 30 min", charges: 15 },
        { name: "2 hours", charges: 15 },
        { name: "2 hours 30 min", charges: 15 },
        { name: "3 hours", charges: 15 },
        { name: "3 hours 30 min", charges: 15 },
        { name: "4 hours", charges: 15 },
        { name: "4 hours 30 min", charges: 15 },
        { name: "5 hours", charges: 15 },
        { name: "5 hours 30 min", charges: 15 },
        { name: "6 hours", charges: 15 },
        { name: "6 hours 30 min", charges: 15 },
        { name: "7 hours", charges: 15 },
        { name: "7 hours 30 min", charges: 15 },
        { name: "8 hours", charges: 15 },
      ],
    },
    assemblyTime: {
      name: "assembly Time",
      options: [
        { name: "Not Required", charges: 0 },
        { name: "15 min", charges: 15 },
        { name: "30 min", charges: 15 },
        { name: "45 min", charges: 15 },
        { name: "1 hour", charges: 15 },
        { name: "1 hour 30 min", charges: 15 },
        { name: "2 hours", charges: 15 },
        { name: "2 hours 30 min", charges: 15 },
        { name: "3 hours", charges: 15 },
        { name: "3 hours 30 min", charges: 15 },
        { name: "4 hours", charges: 15 },
        { name: "4 hours 30 min", charges: 15 },
        { name: "5 hours", charges: 15 },
        { name: "5 hours 30 min", charges: 15 },
        { name: "6 hours", charges: 15 },
        { name: "6 hours 30 min", charges: 15 },
        { name: "7 hours", charges: 15 },
        { name: "7 hours 30 min", charges: 15 },
        { name: "8 hours", charges: 15 },
      ],
    },
  },

  additionalOptions: {
    name: "Additional Options",
    CongestionCharge: {
      name: "Congestion Charge",
      options: [
        { name: "Yes", charges: 15 },
        { name: "No", charges: 0 },
      ],
      charges: 15,
    },
    UltraLowEmissionZone: {
      name: "Ultra Low Emission Zone",
      options: [
        { name: "Yes", charges: 15 },
        { name: "No", charges: 0 },
      ],
    },

    InsuranceOptions: {
      name: "Insurance Options",
      options: [
        { name: "Yes", charges: 15 },
        { name: 'No, I have home content insurance - £0", "Cover up to £5000 - £15", "Cover up to £10000 - £30", "Cover up to £15000 - £45', charges: 0 },
      ],
    },

    passengerTraveling: {
      name: "Passenger Travelling",
      options: [
        { name: "Yes", charges: 15 },
        { name: "No", charges: 0 },
      ],
    },
  },

  name: "",
  phone: 0,
  email: "",
};

const BookingForm = () => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <form className="py-12 px-6 ">
        <div className="mb-8">
          <label htmlFor="first-name" className="block text-lg font-medium leading-6 text-gray-900">
            Select Date and Time for your move
          </label>
          <div className="my-2">
            <Datepicker
              value={value}
              inputClassName="w-full h-[50px] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 transition-all   border focus:border-2 border-t-transparent focus:border-t-transparent text-md p-3 rounded-[7px] focus:border-gray-900"
              placeholder={"Select a Date"}
              useRange={false}
              onChange={handleValueChange}
              asSingle={true}
            />
          </div>
        </div>

        <div className="mb-8">
          <label htmlFor="number-of-movers" className="block text-lg mb-3 font-medium leading-6 text-gray-900">
            Select Number of Movers
          </label>
          <Select options={formData.numberOfMovers.options} label={formData.numberOfMovers.name} />
        </div>

        <div className="mb-8 inner-form-wrapper flex justify-between max-sm:flex-wrap gap-4">
          <div className="w-full">
            <label htmlFor="moving-from" className="block text-lg font-medium leading-6 text-gray-900">
              Moving From
            </label>
            <div className="wrapper mt-5">
              <DistanceCalculator />
              <Select options={formData.movingFrom.selectFloor.options} label="Select Floor/Level" />
              <Select options={formData.movingFrom.isThereALift.options} label="is There a lift?" />
              <Select options={formData.movingFrom.loadingTime.options} label="Loading Time" />
              <Select options={formData.movingFrom.packingTime.options} label="Estimated Packing Time" />
              <Select options={formData.movingFrom.disassemblyTime.options} label="Estimated Disassembly Time" />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="moving-from" className="block text-lg font-medium leading-6 text-gray-900">
              Moving To
            </label>
            <div className="wrapper mt-5">
              <DistanceCalculator />

              <Select options={formData.movingTo.selectFloor.options} label="Select Floor/Level" />
              <Select options={formData.movingTo.unLoadingTime.options} label="Unloading Time" />
              <Select options={formData.movingTo.unPackingTime.options} label="Estimated Unpacking Time" />
              <Select options={formData.movingTo.assemblyTime.options} label="Estimated Assembly Time" />
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="moving-from" className="block text-lg font-medium leading-6 text-gray-900">
              Additional Options
            </label>
            <div className="wrapper mt-5">
              <Select options={formData.additionalOptions.CongestionCharge.options} label="Congestion Charge" />
              <Select options={formData.additionalOptions.UltraLowEmissionZone.options} label="Ultra Low Emission Zone" />
              <Select options={formData.additionalOptions.InsuranceOptions.options} label="Select Insurance Options" />
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

        <button className="w-full block text-center sm:w-60 bg-black text-white px-4 py-2 rounded mx-auto">Get A Quote</button>
      </form>
    </>
  );
};

export default BookingForm;
