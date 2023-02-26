import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function Profile() {
  return (
    <div className="flex flex-col gap-5">
      <Image
        src="/avatar.png"
        width={500}
        height={500}
        alt="avatar"
        className=" max-w-none rounded-full object-cover md:h-36 md:w-36 xl:h-52 xl:w-52"
      />
      <h1 className="text-2xl font-medium text-textNavbar">
        Nguyen Thanh Huyen
      </h1>
      <p className="text-lg font-normal">
        I am a student at University of Engineer and Technology.
      </p>
      <MyModal />
    </div>
  );
}
export default Profile;

export function SmProfile() {
  return (
    <div className="mt-5 flex flex-col gap-4 md:hidden">
      <Image
        src="/avatar.png"
        width={500}
        height={500}
        alt="avatar"
        className=" h-20 w-20 max-w-none rounded-full object-cover"
      />
      <h1 className="text-xl font-medium text-textNavbar">
        Nguyen Thanh Huyen
      </h1>
      <p className="text-base font-normal">
        I am a student at University of Engineer and Technology.
      </p>
      {/* <button className="rounded-full border border-blue-700 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-slate-100">
        Edit profile
      </button> */}
      <MyModal />
    </div>
  );
}

function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal(e) {
    e.preventDefault();
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={openModal}
        className="w-full rounded-full border border-blue-700 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-slate-100"
      >
        Edit profile
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit Profile
                  </Dialog.Title>
                  <form>
                    <div className="mt-4">
                      <label
                        htmlFor="name"
                        className="block text-base font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Nguyen Thanh Huyen"
                          className="block w-full rounded-md bg-slate-100 py-2  focus:outline-button"
                          autoFocus
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="bio"
                        className="block text-base font-medium text-gray-700"
                      >
                        Bio
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="bio"
                          id="bio"
                          className="block w-full rounded-md bg-slate-100 py-2 focus:outline-button"
                          autoFocus
                        />
                      </div>
                    </div>

                    <button
                      onClick={closeModal}
                      className="mt-5 rounded-lg bg-button px-4 py-2 text-white hover:bg-buttonHover"
                    >
                      Complete
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
