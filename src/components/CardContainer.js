// CardContainer.js
import React from 'react';
import Card from './Card';

const cardData = [
  { imgSrc: "../../images/github.png", title: "dair-ai", description: "A collection of Machine Learning course/lecture notes." },
  { imgSrc: "../../images/coursera.png", title: "AI and Machine Learning", description: "Andrew Ng dives into the basics of ML with this course" },
  { imgSrc: "../../images/huggingface.png", title: "AI Cookbook", description: "A collection of notebooks illustrating practical aspects of building AI applications." },
//   { imgSrc: "hotstar_clone_images/poster4.png", title: "Movie Name", description: "Lorem ipsum dolor sit amet consectetur." },
//   { imgSrc: "hotstar_clone_images/poster5.png", title: "Movie Name", description: "Lorem ipsum dolor sit amet consectetur." },
//   { imgSrc: "hotstar_clone_images/poster6.png", title: "Movie Name", description: "Lorem ipsum dolor sit amet consectetur." },
//   { imgSrc: "hotstar_clone_images/poster7.png", title: "Movie Name", description: "Lorem ipsum dolor sit amet consectetur." },
//   { imgSrc: "hotstar_clone_images/poster8.png", title: "Movie Name", description: "Lorem ipsum dolor sit amet consectetur." },
];

const CardContainer = () => {
  return (
<div className="w-full items-center flex flex-nowrap gap-5">
      {cardData.map((card, index) => (
        <Card
          key={index}
          imgSrc={card.imgSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardContainer;