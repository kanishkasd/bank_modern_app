import styles from "../styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-col justify-start flex-1 mr-10">
        <img
          src={logo}
          alt="logo"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A New way to make the payment easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px] text-white"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px]">
              {footerLink.title}
            </h4>

            <ul className="mt-4 list-none">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col items-center justify-between w-full pt-6 md:flex-row border-t-[1px] border-t-[#3f3r45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row mt-6 md:mt-0">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.name}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0 "
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
