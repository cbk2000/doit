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
  
    let title = "";
    let subtitle = "";
    let image = "";
    let content = "";
    let target = "";
  
    const getTitleSubtitle = token => {
      if (customFields.NODE_ENV === "production") {
        title = token[18][4]?.[1];
        subtitle = token[22][4]?.[1];
      } else {
        title = token[20]?.[1];
        subtitle = token[28]?.[2]?.[1];
      }
    };
  
    const getImageContent = token => {
      let rawImage;
      if (customFields.NODE_ENV === "production") {
        rawImage = token[30][3];
        content = token[34][4]?.[1];
      } else {
        rawImage = token[37];
        content = token[44]?.[2]?.[1];
      }
      const srcRegex = /"src":"([^"]+)"/;
      const match = rawImage !== undefined ? rawImage.match(srcRegex) : null
      image = match ? match[1] : null;
    };
  
    console.log(tokens)
    for (let i = tokens.length - 1; i >= 0; i--) {
      const token = tokens[i];
  
      if (token === "markdown") {
        continue;
      }
  
      console.log("sampepeko")
      if (Array.isArray(token)) {
    
        for (const nestedToken of token) {
          // Check if nestedToken is an array and its first element is 'inlinecode'
          if (Array.isArray(nestedToken) && nestedToken[0] === 'inlinecode' && typeof nestedToken[1] === 'string') {
            const inlineString = nestedToken[1];
            console.log("inline ketemu")
            if (inlineString.includes('Path:')) {
              console.log("found");
              const pathLine = inlineString.split('\n').find(line => line.startsWith('Path:'));
              target = pathLine.split(":")[1].trim();
            }
          }
        }
    
        getTitleSubtitle(token);
        getImageContent(token);
      }
  
      // If we have found the target, there's no need to continue looping
      if (target) break;
    }
  
    return {
      title,
      subtitle,
      image,
      content,
      target,
    };

  
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
