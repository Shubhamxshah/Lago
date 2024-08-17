const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
      <div>
          <h2 className="text-white text-center text-lg font-semibold mb-4">
            Products
          </h2>
          <ul className="flex items-center justify-center flex-col">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Usage metering
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                price plans
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Coupons
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Add-ons
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Invoicing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Customer Portal
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-center text-lg font-semibold mb-4">
            Developers
          </h2>
          <ul className="flex items-center justify-center flex-col">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-center text-lg font-semibold mb-4">
            Follow Us
          </h2>
          <div className="flex items-center justify-center flex-col">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
              target="_blank"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-center text-lg font-semibold mb-4">
            Solutions
          </h2>
          <ul className="flex items-center justify-center flex-col">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Engineers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Company
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs pt-8">
        © 2024 Lago. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
