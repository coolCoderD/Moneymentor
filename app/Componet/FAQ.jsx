import React from "react";
import Accordion from "./Accordion";
import data from "./data";
const FAQ = () => {
  return (
    <div className="p-4  rounded-lg m-4">
      <h1 className="text-3xl text-center font-bold mb-5">Frequently Asked Questions</h1>
      {data.map((newdata,index)=><Accordion
        title={newdata.question}
        answer={newdata.answer}
      />)}
     
     
    </div>
  );
};

export default FAQ;