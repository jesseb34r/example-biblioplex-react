import React from "react";
import "./App.css";

type HomepageCardProps = {
  title: string;
  imgId: string;
  subtext: string;
};

function HomepageCard({ title, imgId, subtext }: HomepageCardProps) {
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

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Start Searching</li>
            <li>All Archives</li>
            <li>My Account</li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Start Searching</h1>
        <input type="search" placeholder="search here"></input>
        <div className="card-container">
          {cardContent.map((card) => (
            <HomepageCard
              key={card.title}
              title={card.title}
              imgId={card.imgId}
              subtext={card.subtext}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
