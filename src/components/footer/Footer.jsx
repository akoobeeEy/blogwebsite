import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="py-12 bg-bgBlack">
      <div className="container mx-auto">
          <div className="flex justify-between">
        <div className="">
        <p className="mb-2 text-sm font-normal text-gray-200 md:text-base">
            Finstreet 118 2561 Fintown
            </p>
            <p className="text-sm font-normal text-gray-200 md:text-base">
            Hello@finsweet.com  020 7993 2905
            </p>
        </div>
   
        <div className="flex gap-4">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
              <span className="bannerIcon">
                <FaTwitter />
              </span>
              <span className="bannerIcon">
                <FaInstagram/>
              </span>
              <span className="bannerIcon">
                <FaLinkedinIn/>
              </span>
            </div>
    
          </div>
      </div>
      </footer>
  )
}

export default Footer