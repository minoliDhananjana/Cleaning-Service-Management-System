import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}

      <section className="grid md:grid-cols-2 items-center px-10 py-16">
        <div>
          <h1 className="text-5xl font-bold text-blue-900">
            Spotless Homes,
            <br />
            Stress-Free Life
          </h1>

          <p className="mt-6 text-gray-600">
            Professional cleaning services tailored to your needs.
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg">
            Book Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
          alt=""
          className="rounded-xl"
        />
      </section>

      {/* ABOUT SECTION */}

      <section className="grid md:grid-cols-2 gap-10 px-10 py-10">
        <img
          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
          alt=""
          className="rounded-xl"
        />

        <div>
          <h2 className="text-3xl font-bold text-blue-900">
            About Us
          </h2>

          <p className="mt-4 text-gray-600">
            At CleanNest, we are committed to delivering top-quality
            cleaning services with attention to detail and care.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;