import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import ServiceCard from "../../components/serviceCard/serviceCard";
import Process from "../../components/Process/Process";
import Faq from "../../components/Faq/Faq";
// import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Process></Process>
      <div>
        <h1 className="mt-10 text-center text-2xl font-bold">Our Services</h1>
        <div className="grid grid-cols-1 gap-5 mt-9 mb-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
      <Faq></Faq>
    </div>
  );
};

export default Home;
