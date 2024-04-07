import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";

const ContentHeader = () => {
    const toggleSidebar = () => {};
    return (
        <div className="w-full flex flex-row justify-between items-center flex-1 mt-6 py-2">
            <div className="flex flex-row items-center">
                <button
                    type="button"
                    className="flex flex-row justify-center items-center text-xl me-3"
                    onClick={() => toggleSidebar()}
                >
                    <FiMenu className="w-5" />
                </button>
                <h3 className="text-lg font-semibold text-gray-400">Home</h3>
            </div>
            <div className="flex flex-row items-center justify-end gap-x-3">
                <button className="flex flex-row items-center justify-center text-xl">
                    <IoSearchSharp />
                </button>
                <button className="flex flex-row items-center justify-center text-xl">
                    <FaBell />
                </button>
            </div>
        </div>
    );
};

export default ContentHeader;