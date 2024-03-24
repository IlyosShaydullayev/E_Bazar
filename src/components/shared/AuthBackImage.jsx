const AuthBackImage = ({ children }) => {
    const pathname = window.location.pathname;
        return (
          <div className="w-full grid mx-auto relative place-content-center">
            <div className="300px:hidden md:block z-[1]">
              <img
                src={"/public/images/backImage/Screenshot 2024-03-16 163250.png"}
                alt="backImage"
                className={`absolute right-0 lg:h-[291px] md:h-[225px] top-[600px]`}
              />
              <img
                src={"/public/images/backImage/Screenshot 2024-03-16 171204.png"}
                alt="backImage"
                className={`absolute left-0 lg:h-[218.23px] md:h-[160px] top-[700px]`}
              />
            </div>
            {children}
          </div>
        );
  };
  
  export default AuthBackImage;
  