import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import Image from "../../assets/Profil-Picture.png";
import Photo from "../../assets/image.png";

const EditProduct = () => {
  return (
    <div>
      <div className="flex justify-between border-solid border-2 border-gray-200 rounded-md w-full bg-white">
        <div className="w-8/12">
          <img src={Photo} alt="photo2" className="rounded-tl-md w-full" />
          <div className="p-10">
            <input
              className="font-bold"
              value={`              Intelligent Finite Elements in Structural mechanics
`}
            />
            <textarea
              className="mt-4"
              value={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.`}
            />
          </div>
        </div>
        <div className="border-l p-10 w-4/12	">
          <span className="font-bold">Offered By</span>
          <img
            src="https://img.innoloft.com/logo.svg"
            alt="logo"
            className="fill-white object-scale-down w-auto  h-8"
          />
          <div className="flex gap-2 items-center">
            <img src={Image} alt="profile image2" />
            <div>
              <h6 className="font-bold">Sven Pietsch</h6>
              <h6>Innoloft Gmbh</h6>
            </div>
          </div>
          <span className="flex gap-1">
            <IoLocationOutline />
            Jülicher Straße 72a, 52070 Aachen, Germany
          </span>
          <h1>GOOGLE MAP HERE</h1>
        </div>
      </div>
      <div className="border-solid border-2 border-gray-200 rounded-md w-full bg-white mt-6 p-6">
        <h1 className="font-bold">Video</h1>
        <input type="text" />
      </div>
      <div className="border-solid border-2 border-gray-200 rounded-md w-full bg-white mt-6 p-6">
        <h1 className="font-bold">Offer Details</h1>
        <div className="grid grid-cols-2  ">
          <div>TEst</div>
          <div>TEst</div>
          <div>TEst</div>
          <div>TEst</div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
