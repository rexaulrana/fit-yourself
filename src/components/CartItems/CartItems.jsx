const CartItems = ({ item }) => {
  //   console.log(item);
  const { image, name } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>

          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
