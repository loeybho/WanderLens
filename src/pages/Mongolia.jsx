import van_1 from "@assets/mongolia/mong_1.jpg";
import van_2 from "@assets/mongolia/mong_2.jpg";
import van_3 from "@assets/mongolia/mong_3.jpg";
import van_4 from "@assets/mongolia/mong_4.jpg";
import van_5 from "@assets/mongolia/mong_5.jpg";
import van_6 from "@assets/mongolia/mong_6.jpg";
import { useState } from "react";

const images = [
  { src: van_1, alt: "밴쿠버 이미지 1" },
  { src: van_2, alt: "밴쿠버 이미지 2" },
  { src: van_3, alt: "밴쿠버 이미지 3" },
  { src: van_4, alt: "밴쿠버 이미지 4" },
  { src: van_5, alt: "밴쿠버 이미지 5" },
  { src: van_6, alt: "밴쿠버 이미지 6" },
];

function Mongolia() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="col-span-3 md:col-span-1">
            <img
              src={image.src}
              alt={image.alt}
              onClick={() => openModal(image.src)}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>

      {modalImage && (
        <div
          className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white bg-opacity-100 pt-20 cursor-pointer"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="모달 이미지"
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </>
  );
}

export default Mongolia;
