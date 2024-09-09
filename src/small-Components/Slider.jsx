const Slider = ({ src }) => {
  return (
    <div>
      <img
        className="sm:w-96 w-72 h-28 sm:h-60 object-cover md:rounded-3xl rounded-xl"
        src={src}
        alt=""
      />
    </div>
  );
};

export default Slider;
