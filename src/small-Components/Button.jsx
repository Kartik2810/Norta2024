const Button = ({ name }) => {
  return (
    <button className="buy_ticket text-white rounded-xl font-semibold py-3 xl:px-12 px-8">
      {name}
    </button>
  );
};

export default Button;
