// CardContainer.js
import React from 'react';
import Card from './Card';

const cardData = [
  { imgSrc: "https://picsum.photos/id/1/360/200", title: "Loki", description: "Loki challenges reality with time travel." },
  { imgSrc: "https://picsum.photos/id/2/360/200", title: "Mulan", description: "Mulan: Courage, Honor, Warrior's Journey." },
  { imgSrc: "https://picsum.photos/id/3/360/200", title: "The Falcon and the Winter Soldier", description: "Superheroes unite to battle villains." },
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