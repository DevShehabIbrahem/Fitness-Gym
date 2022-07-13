import React from "react";
import "../../css/Footer/Footer.css";
import { FooterItems } from "../../data/FooterItems";
import { BiPhoneCall } from "react-icons/bi";
import { social } from "../../data/Social_media";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          {/*footer-address*/}
          <div className="footer-address">
            <h1>Address</h1>
            <ul>
              {FooterItems.map(({ title, id }) => (
                <li key={id}>
                  <span>
                    <BiPhoneCall />
                  </span>

                  <p>{title}</p>
                </li>
              ))}
            </ul>
          </div>
          {/*social-media*/}
          <div className="social-media">
            <h1>Connect with us!</h1>
            <ul>
              {social.map(({ icon, id }) => (
                <li key={id}>{icon}</li>
              ))}
            </ul>
          </div>
          {/*map*/}
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.4557531559876!2d-73.9546892284254!3d40.64188298376931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b48192c72f3%3A0x4beb237062fb3c90!2zODU1IE9jZWFuIEF2ZSwgQnJvb2tseW4sIE5ZIDExMjI22Iwg2KfZhNmI2YTYp9mK2KfYqiDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1657108525435!5m2!1sar!2seg"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
