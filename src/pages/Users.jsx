import React from "react";
import { BsSearch } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import TableClient from "../components/TableCllient";
import TableUser from "../components/TableUser";

const Users = () => {
  return (
    <main className="my-2 mt-20 mx-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium">Users Page</h1>
        <CiSettings
          size={28}
          color={"blue"}
          className="animate-spin cursor-pointer"
        />
      </div>
      <p className="mt-5 text-gray-400 text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        alias voluptas explicabo nisi reprehenderit. Commodi voluptate ducimus
        mollitia nemo hic!
      </p>
      <div className="mt-10">
        <div className="">
          <label
            htmlFor="add-new-user"
            className="cursor-pointer px-5 py-2 mx-1 rounded-lg bg-blue-500 text-white font-medium"
          >
            Add New User
          </label>
          <label
            htmlFor="add-new-role"
            className="cursor-pointer px-5 py-2 mx-1 rounded-lg bg-green-500 text-white font-medium"
          >
            Add New Role
          </label>
        </div>
        <div className="flex items-center gap-3 w-full border rounded-full py-2 px-3 text-gray-500 mt-5">
          <BsSearch size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full outline-none font-light"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <div className="md:col-start-1 md:col-end-4">
            <TableUser />
          </div>
          <div className="md:col-start-4 md:col-end-6">
            <TableClient />
          </div>
        </div>
      </div>
      <input type="checkbox" id="add-new-user" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="add-new-user"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            X
          </label>
          <h1 className="text-lg font-bold">Add New User</h1>
          <form action="">
            <div className="py-4">
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iure
                rerum ipsa. Quasi ipsam labore, quibusdam cumque cupiditate
                dolores esse?
              </p>
              <div className="mt-5">
                <div className="my-2">
                  <label
                    htmlFor="new-username"
                    className="text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="new-username"
                    id="new-username"
                    placeholder="Type here . . ."
                    className="w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500"
                  />
                </div>

                <div className="my-2">
                  <label
                    htmlFor="new-fullname"
                    className="text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="new-fullname"
                    id="new-fullname"
                    placeholder="Type here . . ."
                    className="w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500"
                  />
                </div>

                <div className="my-2">
                  <label
                    htmlFor="new-password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="new-password"
                    id="new-password"
                    placeholder="Type here . . ."
                    className="w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500"
                  />
                </div>

                <div className="my-2">
                  <label
                    htmlFor="new-address"
                    className="text-sm font-medium text-gray-700"
                  >
                    Address
                  </label>
                  <input
                    type="password"
                    name="new-address"
                    id="new-address"
                    placeholder="Type here . . ."
                    className="w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500"
                  />
                </div>

                <div className="my-2">
                  <label
                    htmlFor="new-role"
                    className="text-sm font-medium text-gray-700"
                  >
                    Role
                  </label>
                  <select
                    name="new-role"
                    id="new-role"
                    className="block select select-bordered outline-none w-full"
                  >
                    <option disabled selected>
                      Pick your favorite Simpson
                    </option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </select>
                </div>
                <div className="my-2">
                  <label
                    htmlFor="new-picture"
                    className="text-sm font-medium text-gray-700"
                  >
                    Profile Picture
                  </label>
                  <input
                    type="file"
                    name="new-picture"
                    id="new-picture"
                    placeholder="Type here . . ."
                    className="w-full h-full outline-none font-light flex items-center gap-3 border rounded-lg py-2 px-3 text-gray-500"
                  />
                </div>
                <div className="flex justify-center items-center gap-5 mt-5">
                  <button className="px-5 py-2 bg-blue-500 rounded-lg text-white font-medium text-sm">
                    Add User
                  </button>
                  <button
                    type="reset"
                    className="px-5 py-2 bg-gray-500 rounded-lg text-white font-medium text-sm"
                  >
                    Reset Data
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Users;
