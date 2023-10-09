import { useEffect, useState } from "react";
import CartItems from "../../components/CartItems/CartItems";

const Cart = () => {
  const [notFound, setNotFound] = useState("");
  const [addedItems, setAddedItems] = useState([]);
  useEffect(() => {
    const LsAddedItems = JSON.parse(localStorage.getItem("cart"));
    if (LsAddedItems) {
      setAddedItems(LsAddedItems);
    } else {
      setNotFound("No Data Found");
    }
  }, []);

  // delete all favorites
  const handleDeleteAll = () => {
    localStorage.clear();
    setAddedItems([]);
    setNotFound("All Events Deleted");
  };
  return (
    <div>
      {!addedItems ? (
        <h3 className="text-5xl font-semibold h-screen flex justify-center items-center">
          {notFound}
        </h3>
      ) : (
        <div>
          <div>
            <h1 className="text-center text-3xl font-semibold bg-pink-300 py-16">
              Your Favorites Events
            </h1>
            <div className="flex justify-center items-center">
              {notFound ? (
                <h3 className="text-5xl font-semibold h-screen flex justify-center items-center">
                  {notFound}
                </h3>
              ) : (
                <button
                  onClick={handleDeleteAll}
                  className="btn btn-outline btn-error text-black mt-4"
                >
                  Delete All
                </button>
              )}
            </div>
          </div>
          <div className=" mt-4 mb-7 grid grid-cols-1  gap-5  mx-auto md:grid-cols-2  lg:grid-cols-3">
            {addedItems.map((item) => (
              <CartItems key={item.id} item={item}></CartItems>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
