const HeadCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* cards */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-2xl text-white">
          <p className="font-bold text-2xl pt-4 px-3">Bread done, slice out</p>
          <p className="px-3">Yummy</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className=" md:max-h[200px] w-full object-cover rounded-2xl"
          src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
      {/* cards */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-2xl text-white">
          <p className="font-bold text-2xl pt-4 px-3">New Restaurant</p>
          <p className="px-3">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className=" md:max-h[200px] w-full object-cover rounded-2xl"
          src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
      {/* cards */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-2xl text-white">
          <p className="font-bold text-2xl pt-4 px-3">We deliver</p>
          <p className="px-3">Noodles</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className=" md:max-h[200px] w-full object-cover rounded-2xl"
          src="https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadCards;
