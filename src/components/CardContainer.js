// CardContainer.js
import React from 'react';
import Card from './Card';

const cardData = [
  { imgSrc: "../../images/github.png", title: "dair-ai", description: "A collection of Machine Learning course/lecture notes." },
  { imgSrc: "../../images/coursera.png", title: "AI and Machine Learning", description: "Andrew Ng dives into the basics of ML with this course" },
  { imgSrc: "../../images/huggingface.png", title: "AI Cookbook", description: "A collection of notebooks illustrating practical aspects of building AI applications." },
];

const CardContainer = () => {
  return (
    <div className="w-full items-center flex flex-nowrap gap-32 overflow-x-auto sm:overflow-x-visible px-4">
      {cardData.map((card, index) => (
        <div key={index} className="flex-shrink-0 w-full">
          <Card
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
          />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;