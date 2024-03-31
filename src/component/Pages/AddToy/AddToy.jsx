import React from "react";
import bannerImg from "../../../assets/banner/banner2.jpg";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddToy = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const {
      toy_name,
      toy_picture,
      toy_rating,
      toy_price,
      detail_description,
      seller_name,
      available_quantity,
      sub_category,
    } = data;
    const newToy = {
      toy_name,
      toy_picture,
      toy_rating: parseFloat(toy_rating),
      toy_price: parseFloat(toy_price),
      detail_description,
      seller_name,
      available_quantity,
      sub_category,
    };
    console.log(newToy);
    // send data to the server
    fetch("http://localhost:4000/allToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "New toy Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="mt-20 max-w-screen-2xl mx-auto">
      <div className=" relative">
        <img src={bannerImg} className="w-full h-80 opacity-70" alt="" />
        <div className=" absolute inset-0 flex justify-center items-center">
          <h2 className="text-5xl font-bold ">Add A New Toy</h2>
        </div>
      </div>
      <div className=" bg-slate-200 max-w-screen-xl mx-auto mt-10 p-10 rounded-md">
        <h2 className="text-2xl font-semibold text-center">Add A New Item</h2>
        <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-10 ">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-xl">Toy Name</span>
              </div>
              <input
                type="text"
                {...register("toy_name", { required: true, maxLength: 120 })}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text text-xl">Toy Seller Name</span>
              </div>
              <input
                type="text"
                {...register("seller_name", { required: true, maxLength: 120 })}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full -mt-4">
              <div className="label">
                <span className="label-text text-xl">Toy Rating</span>
              </div>
              <input
                type="number"
                {...register("toy_rating", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full -mt-4 ">
              <div className="label">
                <span className="label-text text-xl">Toy Price</span>
              </div>
              <input
                type="number"
                {...register("toy_price", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full -mt-4">
              <div className="label">
                <span className="label-text text-xl">
                  Available Quantity of Toy
                </span>
              </div>
              <input
                type="text"
                {...register("available_quantity", { required: true })}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>
            <label className="form-control w-full -mt-4">
              <div className="label">
                <span className="label-text text-xl">
                  Pick the best Category
                </span>
              </div>
              <select
                {...register("sub_category", { required: true })}
                className="select select-bordered"
              >
                <option disabled selected>
                  Pick one
                </option>
                <option>remote</option>
                <option>educational</option>
                <option>model</option>
              </select>
            </label>
          </div>
          <label className="form-control mt-4">
            <div className="label">
              <span className="label-text text-xl">Toy Description</span>
            </div>
            <textarea
              {...register("detail_description", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="detail description"
            ></textarea>
          </label>
          <label className="form-control w-full mt-4">
            <div className="label">
              <span className="label-text text-xl">Toy Image Url</span>
            </div>
            <input
              type="text"
              {...register("toy_picture", { required: true })}
              placeholder="Image url"
              className="input input-bordered w-full"
            />
          </label>
          {/* <label className="form-control w-full max-w-xs mt-3">
            <div className="label">
              <span className="label-text text-xl flex">
                Toy Image <p className="text-red-500">*</p>
              </span>
            </div>
            <input
              type="file"
              {...register("toy_picture", { required: true })}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label> */}
          <input
            style={{
              background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
            }}
            className="py-2 px-8 cursor-pointer rounded text-white mt-5 w-full"
            type="submit"
            value="Add Item"
          />
        </form>
      </div>
    </div>
  );
};

export default AddToy;
