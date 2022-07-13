import { useRef } from "react";
import "../../css/subscribe/subscribe.css";
import emailjs from "@emailjs/browser";
const Subscribe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zeh80n6",
        "template_hickzrb",
        form.current,
        "hcOD-fgZJpbRsXwjp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="subscribe">
      {/*subscribe-left*/}
      <div className="subscribe-left">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>

        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>

      {/*subscribe-right*/}
      <div className="subscribe-right">
        <form ref={form} className="subscribe-content" onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Enter Your Email here..."
          />
          <button>Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
