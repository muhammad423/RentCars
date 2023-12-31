"use client";
import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import { carManufacturers } from "@/constants/constant";
import { ManifactureProps } from "@/types/interfaces";

export default function CarManifacturelar({manifacture, setManifacture}: ManifactureProps) {
  const [query, setQuery] = useState("");


  const filteredCarManifactular =
    query === ""
      ? carManufacturers
      : carManufacturers.filter((car) => {
          return car.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox value={manifacture} onChange={setManifacture}>
      <div className="relative  mt-2 w-full">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#3E977C] sm:text-sm sm:leading-6"
          placeholder="Search cars"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(car: string) => car}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredCarManifactular.length > 0 && (
          <Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredCarManifactular.map((car) => (
              <Combobox.Option
                key={car}
                value={car}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-3 pr-9' 
                     ${active ? "bg-indigo-600 text-white" : "text-gray-900"}`
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={`block truncate', ${
                        selected && "font-semibold"
                      } `}
                    >
                      {car}
                    </span>

                    {selected && (
                      <span
                        className={`absolute inset-y-0 right-0 flex items-center pr-4',
                          ${active ? "text-white" : "text-indigo-600"} `}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
