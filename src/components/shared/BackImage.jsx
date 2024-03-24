const BackImage = ({ children }) => {
  const pathname = window.location.pathname;
  const pages = ["product", "my-products"];
  const findpage = pathname
    ?.slice(1)
    ?.split("/")
    ?.some((page) => pages.includes(page));
      return (
        <div className="w-full grid mx-auto relative place-content-center">
          <div className="300px:hidden md:block z-[1]">
            <img
              src={"/public/images/backImage/Screenshot 2024-03-16 163250.png"}
              alt="backImage"
              className={`absolute right-0 lg:h-[291px] md:h-[225px] ${pathname == '/sign-in' || pathname === '/profile' ? 'top-[600px]' : 'top-[872px] 1500px:top-[1072px]'}`}
            />
            <img
              src={"/public/images/backImage/Screenshot 2024-03-16 171204.png"}
              alt="backImage"
              className={`absolute left-0 lg:h-[218.23px] md:h-[160px] ${pathname == '/sign-in' || pathname === '/profile' ? 'top-[700px]' : 'top-[1000px] 1500px:top-[1200px] '}`}
            />
            <img
              src={"/public/images/backImage/Screenshot 2024-03-16 163330.png"}
              alt="backImage"
              className={`absolute top-[1649px] 1500px:top-[1849px] right-0 lg:h-[260.29px] md:h-[205px] ${pathname == '/sign-in' || pathname === '/profile' ? 'hidden' : 'block'}`}
            />
            {!findpage && (
              <>
                <img
                  src={"/public/images/backImage/Screenshot 2024-03-16 163357.png"}
                  alt="backImage"
                  className={`absolute top-[2109.58px] 1500px:top-[2309px] left-0 lg:h-[155.96px] md:h-[100px]  ${pathname == '/sign-in' || pathname === '/profile' ? 'hidden' : 'block'}`}
                />
                <img
                  src={"/public/images/backImage/Screenshot 2024-03-16 163435.png"}
                  alt="backImage"
                  className={`absolute top-[3011.97px] 1500px:top-[3211px] left-0 lg:h-[209px] md:h-[150px] ${pathname === '/create-product' ? 'hidden' : 'block'} ${pathname == '/sign-in' || pathname === '/profile' ? 'hidden' : 'block'}`}
                />
                <img
                  src={"/public/images/backImage/Screenshot 2024-03-16 163505.png"}
                  alt="backImage"
                  className={`absolute top-[2958.89px] 1500px:top-[3158px] right-0 lg:h-[232px] md:h-[173px] ${pathname === '/create-product' ? 'hidden' : 'block'} ${pathname == '/sign-in' || pathname === '/profile' ? 'hidden' : 'block'}`}
                />
              </>
            )}
          </div>
          {children}
        </div>
      );
};

export default BackImage;
