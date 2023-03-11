import React from "react";

type SearchPageCardProps = {
  title: string;
  imgId: string;
  subtext: string;
};

function SearchPageCard({ title, imgId, subtext }: SearchPageCardProps) {
  return (
    <div className="card">
      <div className="image-container">
        <div id={imgId} className="card-image" />
        <div className="overlay" />
        <h2>{title}</h2>
      </div>
      <p className="card-subtext">{subtext}</p>
    </div>
  );
}

type CardContentType = {
  title: string;
  imgId: string;
  subtext: string;
};

const cardContent: CardContentType[] = [
  {
    title: "Lands",
    imgId: "land-image",
    subtext: "The mest important part of every deck",
  },
  {
    title: "Creatures",
    imgId: "creature-image",
    subtext: "Limited's bread and butter",
  },
  {
    title: "Spells",
    imgId: "spell-image",
    subtext: "Keeping games dynamic",
  },
  {
    title: "Archetypes",
    imgId: "archetype-image",
    subtext: "The lifeblood of the game",
  },
  {
    title: "Colors",
    imgId: "color-image",
    subtext: "The building blocks of magic",
  },
];

export default function SearchingPage() {
  return (
    <main>
      <h1>Start Searching</h1>
      <input type="search" placeholder="search here"></input>
      <div className="card-container">
        {cardContent.map((card) => (
          <SearchPageCard
            key={card.title}
            title={card.title}
            imgId={card.imgId}
            subtext={card.subtext}
          />
        ))}
      </div>
    </main>
  );
}
