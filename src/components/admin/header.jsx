import { Menu, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import classNames from "classnames";
import React, { Fragment } from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";
import { PiExamFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

// Assuming EditActiveIcon and EditInactiveIcon are imported from another component

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className=" w-full h-16 px-4 flex justify-between items-center border-b border-gray-200 bg-red-500">
      {/* Search Bar */}
      <div className="flex items-center justify-center gap-2 px-1 py-3 ">
        <PiExamFill fontSize={32} className="text-yellow-500" />
        <span className="text-gray-800 text-xl lg:text-2xl font-bold">
          Agni Parikshya
        </span>
      </div>

      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search.."
          aria-label="Search"
          className="pl-11 text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-400 rounded-lg"
        />
      </div>

      {/* Right-hand side icons and menus */}
      <div className="flex items-center gap-4 mr-2">
        {/* Chat Popover */}
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none",
                  {
                    "bg-gray-100": open,
                  }
                )}
              >
                <HiOutlineChatAlt fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 mt-3 w-64 px-2 right-0">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-4 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Messages
                    </strong>
                    <div className="mt-2 py-1 text-sm text-gray-500">
                      This is the message panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        {/* Notifications Popover */}
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none",
                  {
                    "bg-gray-100": open,
                  }
                )}
              >
                <HiOutlineBell fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 mt-3 w-64 px-2 right-0">
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-4 py-2.5">
                    <strong className="text-gray-700 font-medium">
                      Notifications
                    </strong>
                    <div className="mt-2 py-1 text-sm text-gray-500">
                      This is the notification panel.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        {/* User Menu */}
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus-ring-neutral-400">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-cover bg-no-repeat bg-center">
                <span className="sr-only">Open User Menu</span>
                <img
                  src="/profile.jpg" // Replace with the correct path to your image in the public folder
                  className="w-10 h-10 rounded-full"
                  alt="User Avatar"
                />
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div
                    to="/profile"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "text-gray-700 hover:bg-gray-100 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2 block"
                    )}
                  >
                    Your Profile
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    to="/settings"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "text-gray-700 hover:bg-gray-100 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2 block"
                    )}
                  >
                    Settings
                  </div>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "text-gray-700 hover:bg-gray-100 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2 block"
                    )}
                    onClick={() => {
                      // Add your sign out logic here
                      console.log("Signing out...");
                    }}
                  >
                    Sign Out
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
