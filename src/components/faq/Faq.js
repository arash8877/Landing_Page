import React, {useEffect} from "react";
import "./Faq.css";
import Question from "./Question";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { questions } from "./data";

import AOS from 'aos';  // animation package
import 'aos/dist/aos.css';

const Faq = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
    }, []);


  return (
    <section id="faq">
      <div className="container faq">
        <div className="faq-title" data-aos="fade-up">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>Frequently Asked Questions</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you.
            variations of passages of Lorem Ipsum available. of passages of
            Lorem Ipsum available.
          </p>
        </div>
        <div className="questions">
          {questions &&
            questions.map((item) => (
              <Question
               key={item.id}
               title={item.title}
               answer={item.answer}
               id={item.id}/>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
