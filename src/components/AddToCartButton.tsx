"use client";

const AddToCartButton = () => {
  return (
    <button
      onClick={() => window.alert("hello")}
      className="w-full bg-transparent border border-skyColor text-black tracking-wide text-sm py-1.5 hover:bg-skyColor mt-2 rounded-full hover:text-white duration-300"
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
