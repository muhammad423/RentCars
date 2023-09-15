"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CarProps } from "@/types/interfaces";
import Image from "next/image";
import car2 from "../../public/car.png";
import { genereteCarsUrl } from "@/utils/carsApi";

interface CarsDetailProps {
  open: boolean;
  closeModel: () => void;
  cars: CarProps;
}

export default function CarsDetail({
  open,
  closeModel,
  cars,
}: CarsDetailProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModel}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg ">
                <div className="absolute -right-3 -top-3  z-10 pr-4 pt-4">
                  <button
                    type="button"
                    className="rounded-full bg-white text-gray-400 hover:text-gray-500"
                    onClick={closeModel}
                  >
                    <XMarkIcon className="h-6 w-6 z-20" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex flex-1 flex-col gap-3">
                  <div className="bg-cover-img bg-cover bg-center h-40 w-full relative">
                    <Image
                      src={genereteCarsUrl(cars)}
                      alt="car"
                      fill
                      priority
                      className=" object-contain"
                    />
                  </div>
                  <div className="flex justify-center items-center px-2  gap-3">
                    <div className="flex-1 relative w-full h-24 rounded-lg bg-gray-200 shadow-sm hover:shadow-md">
                      <Image
                        src={genereteCarsUrl(cars, '29')}
                        alt="car"
                        fill
                        priority
                        className=" object-contain"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 rounded-lg bg-gray-200 shadow-sm hover:shadow-md">
                      <Image
                        src={genereteCarsUrl(cars, '33')}
                        alt="car"
                        fill
                        priority
                        className=" object-contain mt-4"
                      />
                    </div>
                    <div className="flex-1 relative w-full h-24 rounded-lg bg-gray-200 shadow-sm hover:shadow-md">
                      <Image
                        src={genereteCarsUrl(cars, '13')}
                        alt="car"
                        fill
                        priority
                        className=" object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-3 px-2">
                    <h5 className="text-xl font-semibold mb-5">{cars.make} {cars.model}</h5>
                    <div>
                        {
                            Object.entries(cars).map(([key, value]) => (
                                <div className="flex justify-between items-center w-full gap-5" key={key}>
                                    <h4 className=" capitalize font-medium mb-1 text-gray-700">{key.split('_').join(' ')}</h4>
                                    <p>{value}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
