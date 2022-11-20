import heroMobile from "../assets/images/image-web-3-mobile.jpg";

function Hero() {
  return (
    <div className="mt-4">
      <div className="flex justify-center">
        <img src={heroMobile} />
      </div>
      <div className="my-6">
        <h1 className="text-4xl font-bold">
          The Bright
          <br /> Future of Web
          <br /> 3.0?
        </h1>
        <p className="py-3 text-blue-dark-grayish">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="bg-red-soft text-white-off tracking-widest px-8 py-3 mt-3">
          READ MORE
        </button>
      </div>
    </div>
  );
}

export default Hero;
