const Footer = () => {
  return (
    <div className="bg-black text-white mt-8 md:mt-32 rounded-t-2xl">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-4xl pb-4">Foodies</h1>
          <p className="text-sm">Indulge in a symphony of flavors, where each plate is a canvas for culinary excellence.</p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Recipe
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Menu
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              About
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Our Recipes
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Premium Menu
            </a>
          </nav>
        </div>
        <div>
        <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
        <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              foodies@gmail.com
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +1234567890
            </a>
            <p className="text-md">Monday-Saturday (10AM-11PM)</p>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          <span className="text-brightColor">Copyright ©2024 Foodies | All rights reserved</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
