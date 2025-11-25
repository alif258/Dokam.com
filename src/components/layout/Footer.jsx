import Flex from "../Flex";
import { Link } from "react-router-dom";
import Container from "../Container";
import Image from "../Image";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F1EDFD] pt-32 pb-9">
        <Container>
          <footer>
            <div className="sm:px-6 lg:px-0">

              {/* Responsive 4 Columns */}
              <div className="flex flex-wrap gap-10 lg:gap-[0]">

                {/* Column 1 */}
                <div className="w-full sm:w-[45%] lg:w-auto mr-[118px]">
                  <Image className={"mb-8"} src="/images/LogoFooter.png" />
                  <ul className="">
                    <li className="pb-4"><Link to="/" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">About Us</Link></li>
                    <li className="pb-4"><Link to="/" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">Testimonials</Link></li>
                    <li className="pb-4"><Link to="/" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">Affiliates</Link></li>
                    <li className="pb-4"><Link to="/" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">Partners</Link></li>
                    <li className="pb-4"><Link to="/" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">Contact Us</Link></li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="w-full sm:w-[45%] lg:w-auto mr-[113px]">
                  <h4 className="poppins font-semibold text-2xl text-[#393939] mb-8">
                    Product
                  </h4>
                  <ul className="">
                    <li className="pb-4"><Link to="/features" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">Features</Link></li>
                    <li className="pb-4"><Link to="/modules" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">Modules</Link></li>
                    <li className="pb-4"><Link to="/pricing" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">Pricing</Link></li>
                    <li className="pb-4"><Link to="/themes" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">Dokani Theme</Link></li>
                    <li className="pb-4"><Link to="/themes" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">Compatible Theme</Link></li>
                    <li className=""><Link to="/plugins" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">Compatible Plugins</Link></li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="w-full sm:w-[45%] lg:w-auto mr-[120px]">
                  <h4 className="poppins font-semibold text-2xl text-[#393939] mb-8">
                    Quick Links
                  </h4>
                  <ul className="">
                    <li className="pb-4"><Link to="/" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">Support Area</Link></li>
                    <li className="pb-4"><Link to="/" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">Support Policy</Link></li>
                    <li className="pb-4"><Link to="/" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">Refund Policy</Link></li>
                    <li className="pb-4"><Link to="/" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">Terms of Service</Link></li>
                    <li className="pb-4"><Link to="/" className="hover:text-[#7047EB] lato text-[18px] leading-[140%] text-[#828282] ">Coupons</Link></li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div className="w-full sm:w-[45%] lg:w-auto">
                  <h4 className="poppins font-semibold text-2xl text-[#393939] mb-8">
                    Keep Updated
                  </h4>

                  {/* Email Input */}
                  <div className="w-full ">
                    <form>
                      <div className="relative w-full">
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="w-[390px] bg-white rounded-[32px] text-[16px] lato text-[#828282] py-4 pl-8 pr-14 focus:outline-none"
                          required
                        />

                        <button
                          type="submit"
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-[40px] h-[40px]"
                        >
                          <Image src="/images/sent.png" />
                        </button>
                      </div>
                    </form>
                  </div>

                  <Flex className="gap-4 mt-6">
                    <Image src="/images/fb.png" />
                    <Image src="/images/x.png" />
                    <Image src="/images/in.png" />
                  </Flex>
                </div>
              </div>












              <div className="pt-[134px] pb-[95px] flex items-center justify-between">

             <div className="flex">
                 <div className="btn flex gap-5 mr-[42px]">

                  <div className=" text-white bg-[#7047EB] text-[16px] py-[12px] px-[30px] rounded-xl inline-block lato leading-[150%]">
                    Download
                  </div>

                  <div className=" text-[#7047EB] border  text-[16px] py-[12px] px-[30px] rounded-xl inline-block lato leading-[150%]">
                    Try Demo
                  </div>
                </div>



                <div className="joining flex items-center gap-3">
                  <p className="lato text-[16px] leading-[150%] text-[#575757] border-b-1 ">Join 10,000+ Users</p>
                  <Image src='/images/tenJon.png' />
                </div>

             </div>




                <div className="paybal ">
                  <Image src='/images/paybal.png' />
                </div>



              </div>
































              {/* Bottom Section */}
              <div className="border-t border-[#D3D3D3] pt-6 flex flex-col sm:flex-row justify-between items-center text-sm ">
                <Image src="/images/weDevs.png" />
                <div className="">
                  <p className="lato text-[14px] leading-[150%] text-[#575757]">Copyright © 2008-2022, weDevs Pte. Ltd. weDevs® is a registered</p>
                  <p className="lato text-[14px] leading-[150%] text-[#575757] text-right">trademark of weDevs Pte. Ltd.</p>
                </div>
              </div>

            </div>
          </footer>
        </Container>
      </div>
    </>
  );
};

export default Footer;
