import heroMobile from "../assets/images/image-web-3-mobile.jpg";
import heroDesktop from "../assets/images/image-web-3-desktop.jpg";

function Hero() {
  return (
    <div>
      <div className="flex justify-center">
        <img src={heroMobile} className="sm:hidden block" />
        <img src={heroDesktop} className="sm:block hidden" />
      </div>
      <div className="my-6 xl:grid grid-cols-2 xl:mb-0">
        <h1 className="text-5xl font-bold">
          The Bright
          <br /> Future of Web
          <br /> 3.0?
        </h1>
        <main>
          <p className="py-3 text-blue-dark-grayish">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-red-soft text-white-off tracking-widest px-8 py-3 mt-3">
            READ MORE
          </button>
        </main>
      </div>
    </div>
  );
}

export default Hero;
