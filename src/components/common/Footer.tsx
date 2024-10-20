
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-neutral-content">
        <div className="container flex flex-col justify-items-center items-center  px-4 py-8">
            <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row  md:space-x-6 lg:space-x-6 font-medium  text-blue-700 mt-4 ">
                <a href="#" className="">About Us</a>
                <a href="#" className="">Contact Us</a>
                <a href="#" className="">Privacy Policy</a>
                <a href="#" className="">Terms of Service</a>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row lg:flex-row  md:space-x-6 lg:space-x-6  font-medium  text-gray-700 mt-10 mb-6">
                <img src="/logo.png" alt="Your Company" className="h-16 w-auto mt-4" />
                <img src="/footer.png" alt="Your Company" className="h-52 w-auto" />
                <a href="#" className="mt-4">Bookings  </a>
                <a href="#" className="mt-4">Spaces </a>
                <a href="#" className="mt-4">Services </a>
                <a href="#" className="mt-4">Events </a>
                <a href="#" className="mt-4">Settings </a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
