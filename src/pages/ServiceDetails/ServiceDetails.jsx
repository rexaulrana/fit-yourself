import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import swal from "sweetalert";

const ServiceDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  //   console.log(typeof idInt);
  const details = useLoaderData();
  const item = details.find((detail) => detail.id === idInt);

  // local storage
  const handleAddToCart = () => {
    const itemCart = [];
    const LSitem = JSON.parse(localStorage.getItem("cart"));
    if (!LSitem) {
      itemCart.push(item);
      localStorage.setItem("cart", JSON.stringify(itemCart));
      swal("Added to Cart successfully", "success");
    } else {
      itemCart.push(...LSitem, item);
      localStorage.setItem("cart", JSON.stringify(itemCart));
      swal("success", "Added to Cart successfully", "success");
    }
  };
  return (
    <div>
      <div className="text-3xl text-center font-bold mt-4  bg-pink-200 py-10">
        Details About Service
      </div>
      <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg mt-4">
        <div className=" m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img
            className="relative h-[100vh]  mx-auto"
            src={item.image}
            alt="ui/ux review check"
          />
          <div className="absolute top-4 left-8 md:left-52 lg:left-80 md:top-5 py-7 px-5 bg-pink-400 rounded-xl">
            <h3 className=" flex items-center gap-2  text-3xl font-bold">
              <AiFillStar className="text-amber-400 text-4xl"></AiFillStar>
              {item.rating}
            </h3>
          </div>
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center">
            {item.name}
          </h4>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            {item.description}
          </p>
        </div>
      </div>
      <Link>
        <button
          onClick={handleAddToCart}
          className="flex justify-center items-center w-60  mx-auto btn mt-5 mb-5 btn-outline"
        >
          Add To Cart
        </button>
      </Link>
    </div>
  );
};

export default ServiceDetails;
