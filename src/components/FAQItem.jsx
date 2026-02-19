import { useState } from "react";

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>
                {question}
            </button>
            {isOpen && <p>{answer}</p>}
        </div>
    );
};

export default FAQItem;
