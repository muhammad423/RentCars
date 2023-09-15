"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { CarManifacturelar, CustomFilter } from ".";
import { fuels, YearsArr } from "@/constants/constant";
import { SearchParamsType } from "@/types/interfaces";

const SearchBar = () => {
  const [manifacture, setManifacture] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manifacture == "" && model === "") {
      alert("Search fields are empty");
    }

    updateSearchInputFields(
      model.toLocaleLowerCase(),
      manifacture.toLocaleLowerCase()
    );
  };

  const updateSearchInputFields = (model: string, manifacture: string) => {
    const searchParams: SearchParamsType = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manifacture) {
      searchParams.set("manifacture", manifacture);
    } else {
      searchParams.delete("manifacture");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <>
      <h1 className="font-bold md:text-4xl text-3xl my-4">Cars Updates</h1>
      <div className="md:flex justify-between w-full items-center">
        <form
          className="md:flex w-full items-center gap-5"
          onSubmit={handleSearch}
        >
          <div className="">
            <CarManifacturelar
              manifacture={manifacture}
              setManifacture={setManifacture}
            />
          </div>
          <div className="mt-2 flex items-center gap-3">
            <input
              type="text"
              className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#3E977C] sm:text-sm sm:leading-6"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="Model"
            />
            <button
              type="submit"
              className="p-1 rounded-sm hidden md:block bg-[#3E977C] text-white"
            >
              search
            </button>
          </div>
        </form>
        <div className="flex items-center mt-3 md:mt-0 gap-5">
          <CustomFilter title='fuel' options={fuels}/>
          <CustomFilter title='year' options={YearsArr}/>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
