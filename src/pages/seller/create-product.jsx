import Navbar from "@/components/Header/navbar";
import NavigationBottom from "@/components/Header/navigationBottom";
import Footer from "@/components/footer/footer";
import PageHistory from "@/components/shared/page-history";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { CirclePlus } from "lucide-react";
import React, { useState } from "react";

function CreateProduct() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleChange1 = (event) => {
    setInputValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);

  const uploadImage1 = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage1(reader.result);
    };
  };
  const uploadImage2 = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage2(reader.result);
    };
  };
  const uploadImage3 = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage3(reader.result);
    };
  };
  const uploadImage4 = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage4(reader.result);
    };
  };
  const uploadImage5 = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setImage5(reader.result);
    };
  };

  const [inputs, setInputs] = useState([{ id: 1, value: "" }]);

  const handleAddInput = (e) => {
    const newInput = { id: inputs.length + 1, value: "" };
    setInputs([...inputs, newInput]);
  };

  const handleChange = (e, id) => {
    const newInputs = [...inputs];
    const index = newInputs.findIndex((input) => input.id === id);

    if (index !== -1) {
      newInputs[index].value = e.target.value;
      setInputs(newInputs);
    }
  };

  const handleRemoveInput = (id, e) => {
    const newInputs = inputs.filter((input) => input.id !== id);
    setInputs(newInputs);
  };

  return (
    <>
      <div className="z-20 300px:w-[299px] mx-auto 400px:w-[349px] 600px:w-[537px] md:w-[740px] lg:w-[820px] 1200px:w-[956px] xl:w-[890px] 1330px:w-[1298px]">
        <Navbar />
        <PageHistory />
        <div className="space-y-[30px] mt-4 h-auto rounded-[5px] px-[24px] py-[24px] bg-white">
          <div className="relative">
            <label htmlFor="information">To{"'"}liq ma{"'"}lumot yozing</label>
            <input
              id="information"
              type="text"
              placeholder="Masalan, do'ppi bilan ipak"
              maxLength={200}
              value={inputValue1}
              onChange={handleChange1}
              className="outline-none text-gray-500 w-full h-[50px] px-6 rounded-[5px] bg-[#f5f5f5]"
            />
            <p
              className={`absolute right-0 text-[12px] text-gray-500 -bottom-5 ${
                inputValue1.length == 200 ? "text-red-500 outline-red-500" : ""
              } `}
            >
              {inputValue1.length}/200
            </p>
          </div>
          <div>
            <label htmlFor="category">Kategoriya</label>
            <select className="block outline-none bg-[#f5f5f5] w-full md:w-[617px] px-6 text-gray-500 h-[50px] rounded-[5px]">
              <option>Erkaklar libosi</option>
              <option>Ayollar libosi</option>
              <option>Buyumlar</option>
            </select>
          </div>
        </div>
        <div className="bg-white p-[24px] mt-[24px] rounded-[5px]">
          <label htmlFor="textarea">Izoh qo{"'"}shish</label>
          <p className="text-[14px] text-[#7A7A7A] mt-[16px] mb-[8px]">
            Rasmlar tovaringiz oblojkasida joylashadi
          </p>
          <div className="flex items-center 400px:gap-[9px] 600px:gap-[16px] flex-wrap justify-center md:justify-start 300px:gap-[5px]">
            <label htmlFor="enterImage1">
              <div className="md:w-[104px] md:h-[104px] 600px:w-[70px] 600px:h-[70px] 400px:w-[50px] 400px:h-[50px] 300px:w-[40px] 300px:h-[40px] border border-[#999] relative rounded-md">
                <CirclePlus
                  size={24}
                  className="absolute top-[50%] left-[50%] text-[#666] translate-x-[-50%] translate-y-[-50%]"
                />
                <input
                  type="file"
                  multiple
                  onChange={uploadImage1}
                  id="enterImage1"
                  className="hidden"
                />
              </div>
            </label>
            <label htmlFor="enterImage2">
              <div className="md:w-[104px] md:h-[104px] 600px:w-[70px] 600px:h-[70px] 400px:w-[50px] 400px:h-[50px] 300px:w-[40px] 300px:h-[40px] border border-[#999] relative rounded-md">
                <CirclePlus
                  size={24}
                  className="absolute top-[50%] left-[50%] text-[#666] translate-x-[-50%] translate-y-[-50%]"
                />
                <input
                  type="file"
                  multiple
                  onChange={uploadImage2}
                  id="enterImage2"
                  className="hidden"
                />
              </div>
            </label>
            <label htmlFor="enterImage3">
              <div className="md:w-[104px] md:h-[104px] 600px:w-[70px] 600px:h-[70px] 400px:w-[50px] 400px:h-[50px] 300px:w-[40px] 300px:h-[40px] border border-[#999] relative rounded-md">
                <CirclePlus
                  size={24}
                  className="absolute top-[50%] left-[50%] text-[#666] translate-x-[-50%] translate-y-[-50%]"
                />
                <input
                  type="file"
                  multiple
                  onChange={uploadImage3}
                  id="enterImage3"
                  className="hidden"
                />
              </div>
            </label>
            <label htmlFor="enterImage4">
              <div className="md:w-[104px] md:h-[104px] 600px:w-[70px] 600px:h-[70px] 400px:w-[50px] 400px:h-[50px] 300px:w-[40px] 300px:h-[40px] border border-[#999] relative rounded-md">
                <CirclePlus
                  size={24}
                  className="absolute top-[50%] left-[50%] text-[#666] translate-x-[-50%] translate-y-[-50%]"
                />
                <input
                  type="file"
                  multiple
                  onChange={uploadImage4}
                  id="enterImage4"
                  className="hidden"
                />
              </div>
            </label>
            <label htmlFor="enterImage5">
              <div className="md:w-[104px] md:h-[104px] 600px:w-[70px] 600px:h-[70px] 400px:w-[50px] 400px:h-[50px] 300px:w-[40px] 300px:h-[40px] border border-[#999] relative rounded-md">
                <CirclePlus
                  size={24}
                  className="absolute top-[50%] left-[50%] text-[#666] translate-x-[-50%] translate-y-[-50%]"
                />
                <input
                  type="file"
                  multiple
                  onChange={uploadImage5}
                  id="enterImage5"
                  className="hidden"
                />
              </div>
            </label>
          </div>
          <div className="flex items-center mb-10 400px:gap-[9px] 600px:gap-[16px] mt-[16px] flex-wrap justify-center md:justify-start 300px:gap-[5px]">
            {image1 ? (
              <img
                src={image1}
                alt="Uploaded"
                className="md:w-[104px] object-cover md:h-[104px] 600px:w-[70px] 600px:h-[70px] 400px:w-[50px] 400px:h-[50px] 300px:w-[40px] 300px:h-[40px]"
              />
            ) : (
              <div className="md:w-[104px] md:h-[104px] 600px:w-[70px] 600px:h-[70px] 400px:w-[50px] 400px:h-[50px] 300px:w-[40px] 300px:h-[40px] border border-[#999] relative rounded-md">
                <CirclePlus
                  size={24}
                  className="absolute top-[50%] left-[50%] text-[#666] translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            )}
            {image2 ? (
              <img
                src={image2}
                alt="Uploaded"
                className="md:w-[104px] object-cover md:h-[104px] 600px:w-[70px] 600px:h-[70px] 400px:w-[50px] 400px:h-[50px] 300px:w-[40px] 300px:h-[40px]"
              />
            ) : (
              <div className="md:w-[104px] md:h-[104px] 600px:w-[70px] 600px:h-[70px] 400px:w-[50px] 400px:h-[50px] 300px:w-[40px] 300px:h-[40px] border border-[#999] relative rounded-md">
                <CirclePlus
                  size={24}
                  className="absolute top-[50%] left-[50%] text-[#666] translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            )}
            {image3 ? (
              <img
                src={image3}
                alt="Uploaded"
                className="md:w-[104px] md:h-[104px] object-cover 600px:w-[70px] 600px:h-[70px] 400px:w-[50px] 400px:h-[50px] 300px:w-[40px] 300px:h-[40px]"
              />
            ) : (
              <div className="md:w-[104px] md:h-[104px] 600px:w-[70px] 600px:h-[70px] 400px:w-[50px] 400px:h-[50px] 300px:w-[40px] 300px:h-[40px] border border-[#999] relative rounded-md">
                <CirclePlus
                  size={24}
                  className="absolute top-[50%] left-[50%] text-[#666] translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            )}
            {image4 ? (
              <img
                src={image4}
                alt="Uploaded"
                className="md:w-[104px] md:h-[104px] object-cover 600px:w-[70px] 600px:h-[70px] 400px:w-[50px] 400px:h-[50px] 300px:w-[40px] 300px:h-[40px]"
              />
            ) : (
              <div className="md:w-[104px] md:h-[104px] 600px:w-[70px] 600px:h-[70px] 400px:w-[50px] 400px:h-[50px] 300px:w-[40px] 300px:h-[40px] border border-[#999] relative rounded-md">
                <CirclePlus
                  size={24}
                  className="absolute top-[50%] left-[50%] text-[#666] translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            )}
            {image5 ? (
              <img
                src={image5}
                alt="Uploaded"
                className="md:w-[104px] md:h-[104px] object-cover 600px:w-[70px] 600px:h-[70px] 400px:w-[50px] 400px:h-[50px] 300px:w-[40px] 300px:h-[40px]"
              />
            ) : (
              <div className="md:w-[104px] md:h-[104px] 600px:w-[70px] 600px:h-[70px] 400px:w-[50px] 400px:h-[50px] 300px:w-[40px] 300px:h-[40px] border border-[#999] relative rounded-md">
                <CirclePlus
                  size={24}
                  className="absolute top-[50%] left-[50%] text-[#666] translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            )}
          </div>
          <div>
            <label htmlFor="textarea" className="block">
              Mahsulot vaznini kiriting
            </label>
            <button
                onClick={handleAddInput}
                className="bg-[#0074DF] text-white px-2 py-1 rounded-md mt-6"
              >
                Add Input
              </button>
              <div className="customer_records">
                {inputs.map((input) => (
                  <div key={input} className="mt-2 flex gap-2 items-center">
                    <input
                      type="number"
                      value={input.value}
                      className="border border-[#000] rounded-md px-2"
                      onChange={(e) => handleChange(e, input.id)}
                    />
                    <button onClick={() => handleRemoveInput(input.id)} className="border border-[#000] px-2 rounded-md">
                      Remove
                    </button>
                  </div>
                ))}
              </div>
          </div>
        </div>
        <div className="space -y-[30px] mt-4 h-auto rounded-[5px] px-[24px] py-[24px] bg-white">
          <div className="relative">
            <textarea
              maxLength={9000}
              value={inputValue2}
              onChange={handleChange2}
              placeholder="Izoh yozing"
              className="block w-full h-[240px] py-[24px] px-[24px] rounded-[5px] outline-none bg-[#e7e7e7]"
              id="textarea"
              cols="10"
              rows="10"
            ></textarea>
            <textarea
              maxLength={9000}
              value={inputValue2}
              onChange={handleChange2}
              placeholder="Tovar haqida to'liq ma'lumot yozing"
              className="block w-full h-[240px] py-[24px] px-[24px] mt-6 rounded-[5px] outline-none bg-[#e7e7e7]"
              id="textarea"
              cols="10"
              rows="10"
            ></textarea>
            <p
              className={`absolute right-0 text-[12px] text-gray-500 -bottom-5 ${
                inputValue1.length == 200 ? "text-red-500 outline-red-500" : ""
              } `}
            >
              {inputValue2.length}/9000
            </p>
          </div>
        </div>
        <div className="space -y-[10px] mt-4 h-auto rounded-[5px] px-[24px] py-[24px] bg-white">
          <label htmlFor="address">
            Manzil<span className="text-red-500">*</span>
          </label>
          <input
            id="address"
            type="text"
            placeholder="Manzil yoki indeksni kiriting"
            className="md:w-[530px] w-full block outline-none text-gray-500 h-[50px] px-6 rounded-[5px] bg-[#f5f5f5]"
          />
        </div>
        <div className="space-y-[20px] mt-4 h-auto rounded-[5px] px-[24px] py-[24px] bg-white">
          <h2 className="font-bold mb-6">Bog{"'"}lanish ma{"'"}lumotlari</h2>
          <div>
            <label htmlFor="contactPerson">
              Aloqa qiluvchi shaxs<span className="text-red-500">*</span>
            </label>
            <input
              id="contactPerson"
              type="text"
              placeholder="azizovaziz"
              className="md:w-[494px] w-full block outline-none text-gray-500 h-[50px] px-6 rounded-[5px] bg-[#f5f5f5]"
            />
          </div>
          <div>
            <label htmlFor="emailAddress">Pochta manzili</label>
            <input
              id="emailAddress"
              type="email"
              placeholder="azizovaziz@gmail.com"
              className="md:w-[494px] w-full block outline-none text-gray-500 h-[50px] px-6 rounded-[5px] bg-[#f5f5f5]"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Telefon raqami</label>
            <input
              id="phoneNumber"
              type="text"
              placeholder="+(000) 000 00 00"
              className="md:w-[494px] w-full block outline-none text-gray-500 h-[50px] px-6 rounded-[5px] bg-[#f5f5f5]"
            />
          </div>
          <div className="flex justify-end">
            <Button className="bg-blue-500 hover:bg-blue-600 w-full md:w-auto">Tasdiqlash</Button>
          </div>
        </div>
      </div>
        <NavigationBottom/>
        <div className="absolute top-[2700px] w-full z-20">
          <Footer/>
        </div>
    </>
  );
}

export default CreateProduct;
