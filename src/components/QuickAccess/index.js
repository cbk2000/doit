import React, { useState, useEffect } from "react";
import "./QuickAccess.css";
import Card from "@site/src/components/QuickAccess/QuickAccessCard";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const Index = () => {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [cards, setCards] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCards = searchQuery
    ? cards.filter((card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : cards;

  useEffect(() => {
    // Dynamically load the markdown files
    const loadMarkdownFiles = async () => {
      const markdownFiles = await importAll(
        require.context("/docs", true, /\.md$/)
      );

      const processedCards = await Promise.all(
        markdownFiles.map((file) => processMarkdown(file))
      );

      setCards(processedCards);
    };

    loadMarkdownFiles();
  }, []);

  const importAll = (context) => {
    const keys = context.keys();
    const files = keys.map(context);
    const nestedFiles = files.reduce((acc, file, index) => {
      const pathParts = keys[index].split("/");
      const directory = pathParts[1];
      const filename = pathParts[pathParts.length - 1];
      const filePath = `${directory}/${filename}`;

      return {
        ...acc,
        [filePath]: file.default,
      };
    }, {});

    return Object.entries(nestedFiles).map(([path, content]) => ({
      path,
      content,
    }));
  };

  const processMarkdown = (file) => {
    const md = require("markdown").markdown;
    const contentString = file.content.toString();
    const tokens = md.parse(contentString);

    const extractImage = (rawImage) => {
      const srcRegex = /"src":"([^"]+)"/;
      const match = rawImage.match(srcRegex);
      return match ? match[1] : null;
    };

    let data = {};

    for (const token of tokens) {
      if (token !== "markdown") {
        if (customFields.NODE_ENV == "production") {
          data = {
            title: token[18][4][1],
            subtitle: token[22][4][1],
            image: extractImage(token[30][3]),
            content: token[34][4][1],
            target: token[44][1].split(":")[1].trim(),
          };
        } else {
          data = {
            title: token[20][1],
            subtitle: token[28][2][1],
            image: extractImage(token[37]),
            content: token[44][2][1],
            target: token[54][1].split(":")[1].trim(),
          };
        }
      }
    }

    return data;
  };

  return (
    <>
      <div className="title">Quick Access</div>
      <div className="search-container">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="search-input"
        />
      </div>
      {filteredCards.length > 0 ? (
        <div className="grid-container">
          {filteredCards.map((card, index) => (
            <Card
              className=""
              key={card.title}
              title={card.title}
              image={card.image}
              description={card.content}
              subtitle={card.subtitle}
              target={card.target}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <img
            src="https://www.backblaze.com/blog/wp-content/uploads/2019/12/Incomplete-archives.jpg"
            alt="meme"
            className="w-full sm:w-1/2"
          />
        </div>
      )}
    </>
  );
};

export default Index;
