import { Fragment, useCallback, useState } from "react";
import { Accordion } from "react-bootstrap";

const defaultAccordionData = [
  {
    id: 1,
    title: "Can I hire developers for short-term projects?",
    answer:
      "Yes, you can hire developers for as little as one month or longer, depending on your project requirements.",
  },
  {
    id: 2,
    title: "How do you ensure the quality of developers?",
    answer:
      "We thoroughly vet our developers to ensure they possess the necessary skills, experience, and qualifications. Additionally, we provide ongoing support and supervision to maintain quality standards.",
  },
  {
    id: 3,
    title: "What if I need to scale my team up or down?",
    answer:
      "We offer flexibility to scale your team based on project demands. You can easily add or remove developers as needed with just 15 days' notice.",
  },
  {
    id: 4,
    title: "Are your developers available in my time zone?",
    answer:
      "Yes, our developers are available to work in your time zone, ensuring effective communication and collaboration.",
  },
  {
    id: 5,
    title: "How do I ensure confidentiality and security of my project?",
    answer:
      "Our developers sign strong non-disclosure agreements to ensure the confidentiality and security of your project information.",
  },
];

const FaqHire = ({ defaultActive, accordions, accordionsData }) => {
  const [active, setActive] = useState(defaultActive ? defaultActive : 2);
  const [data, setData] = useState(
    accordionsData ? accordionsData : defaultAccordionData
  );
  const toggleAccordion = useCallback(
    (value) => {
      setActive(value === active ? null : value);
    },
    [active]
  );

  return (
    <Accordion defaultActiveKey={active}>
      {data.map(
        (accordion) =>
          accordions.includes(accordion.id) && (
            <div className="accordion-item">
              <h5 className="accordion-header">
                <Accordion.Toggle
                  as="button"
                  className={`accordion-button ${
                    accordion.id === active ? "" : "collapsed"
                  }`}
                  eventKey={accordion.id}
                  onClick={() => toggleAccordion(accordion.id)}
                >
                  {accordion.title}
                </Accordion.Toggle>
              </h5>
              <Accordion.Collapse
                eventKey={accordion.id}
                data-bs-parent="#faq-accordion"
              >
                <div className="accordion-body">
                  <p>{accordion.answer}</p>
                </div>
              </Accordion.Collapse>

              {/* <Accordion.Collapse
                eventKey={accordion.id}
                data-bs-parent="#faq-accordion"
              >
                <div className="accordion-body">
                  <p>
                    Sorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Numquam incidunt debitis magnam sit dicta asperiores quidem
                    cum, blanditiis harum non nulla, esse sapiente doloremque,
                    dolores natus! Harum consectetur saepe iure obcaecati illo,
                    maiores minima in dolorem, deleniti unde aut similique fugit
                    earum. Numquam ut ex ipsum molestiae, consequatur obcaecati?
                    Velit.
                  </p>
                </div>
              </Accordion.Collapse> */}
            </div>
          )
      )}
    </Accordion>
  );
};
export default FaqHire;
