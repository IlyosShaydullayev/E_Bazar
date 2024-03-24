import Navbar from "@/components/Header/navbar";
import NavigationBottom from "@/components/Header/navigationBottom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    const [image, setImage] = useState(null)
    return (
        <div className="mb-40">
            <Navbar />
            <form className="mx-auto bg-[#fff] shadow-2xl rounded-md p-7 max-w-[70%] h-[840px] md:h-auto">
                <p className="text-[#0074DF] text-[20px] font-semibold">Edit Your Profile</p>
                <div className="my-4 cursor-pointer w-[74px] relative h-[74px]">
                    {image ? (
                        <img src={URL.createObjectURL(image)} alt="new add user" className="rounded-full" />
                    ) : (
                        <img src="/public/images/Annotation 2024-03-20 203655.png" alt="add new user" className="w-full h-full" />
                    )}
                    <input type="file" className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0" onChange={(e) => setImage(e.target.files[0])} accept="image/jpeg, image/jpg, image/png, image/gif" />
                </div>
                <div className="flex justify-between flex-wrap gap-3">
                    <label htmlFor="fullName" className="300px:w-[100%] md:w-[45%] lg:w-[45%]">
                        <p className="font-[400] text-[16px]">Full Name</p>
                        <input required type="text" name="fullName" placeholder="Aziz Azizov" className="bg-[#F5F5F5] mt-2 p-3 rounded-md block w-full" />
                    </label>
                    <label htmlFor="phoneNumber" className="300px:w-[100%] md:w-[45%] lg:w-[45%]">
                        <p className="font-[400] text-[16px]">Phone Number</p>
                        <input required type="text" name="phoneNumber" placeholder="+(000) 000 00 00" className="bg-[#F5F5F5] mt-2 p-3 rounded-md block w-full" />
                    </label>
                    <label htmlFor="email" className="300px:w-[100%] md:w-[45%] lg:w-[45%]">
                        <p className="font-[400] text-[16px]">Email</p>
                        <input required type="text" name="email" placeholder="aziz@gmail.com" className="bg-[#F5F5F5] mt-2 p-3 rounded-md block w-full" />
                    </label>
                    <label htmlFor="address" className="300px:w-[100%] md:w-[45%] lg:w-[45%]">
                        <p className="font-[400] text-[16px]">Address</p>
                        <input required type="text" name="address" placeholder="Tashkent, Chilanzar-3, 34" className="bg-[#F5F5F5] mt-2 p-3 rounded-md block w-full" />
                    </label>
                </div>
                <div className="flex flex-col gap-3 mt-5">
                    <label htmlFor="passwordChanges">
                        <p>Password Changes</p>
                        <input required type="text" placeholder="Current Password" className="bg-[#F5F5F5] mt-2 p-3 w-full rounded-md" />
                        <input required type="text" placeholder="New Password" className="bg-[#F5F5F5] mt-2 p-3 w-full rounded-md" />
                        <input required type="text" placeholder="Confirm Current Password" className="bg-[#F5F5F5] mt-2 p-3 w-full rounded-md" />
                    </label>
                </div>
                <div className="flex items-center flex-col-reverse md:flex-row 300px:pb-10 md:justify-between mt-10">
                    <Link to='/create-product' className="text-[#0074DF] text-[14px] font-semibold ml-auto mt-10 md:mt-0 md:ml-0">Sotuvchi bo{"'"}lish</Link>
                    <div className="flex justify-end gap-[40px] ml-auto">
                        <button className="text-[16px]">Cancel</button>
                        <button className="bg-[#0074DF] p-3 text-[12px] font-semibold text-white rounded-md">Save Changes</button>
                    </div>
                </div>
            </form>
            <NavigationBottom />
        </div>
    )
}

export default Profile;