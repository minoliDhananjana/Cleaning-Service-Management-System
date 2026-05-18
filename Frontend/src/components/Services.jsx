import Navbar from "../components/Navbar";

function Services() {

  const services = [
    {
      name: "Deep Cleaning",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    },
    {
      name: "Office Cleaning",
      price: "$100",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold text-center text-blue-900">
          Our Services
        </h1>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-lg rounded-xl p-4"
            >
              <img
                src={service.image}
                alt=""
                className="rounded-lg h-48 w-full object-cover"
              />

              <h2 className="mt-4 text-xl font-bold">
                {service.name}
              </h2>

              <p className="text-green-600 font-bold">
                {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;