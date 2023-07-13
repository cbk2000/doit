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
    console.log(contentString)
    const tokens = md.parse(contentString);
  
    let title = "";
    let subtitle = "";
    let image = "";
    let content = "";
    let target = "";
  
    const getTitleSubtitle = () => {
      const titleRegex = /"h1",[^`]+`([^`]+)`/;
      const titleMatch = contentString.match(titleRegex);

      if (titleMatch) {
        title = titleMatch[1];
        console.log("title: " + title); 
      }

      const subtitleRegex = /"h2",[^`]+`([^`]+)`/;
      const subtitleMatch = contentString.match(subtitleRegex);

      if (subtitleMatch) {
        subtitle = subtitleMatch[1];
        console.log("subtitle: " + subtitle); 
      }
    };
  
    const getImageContent = () => {
      const srcRegex = /\("img",\s*{\s*parentName:"p"[^}]*"src":"([^"]+)"/;
      const srcMatch = contentString.match(srcRegex);

      if (srcMatch) {
        image = srcMatch[1];
        console.log("image: " + image);
      }

      const contentRegex = /"p",\s*null,\s*`([^`]+)`/;
      const contentMatch = contentString.match(contentRegex);

      if (contentMatch) {
        content = contentMatch[1];
        console.log("content: " + content);
      }
    };

    const getTarget = () => {
      const targetRegex = /"code",\s*\{parentName:"pre"\},\s*`[^`]*Path:\s*([^`]+)`/;
      const targetMatch = contentString.match(targetRegex);

      if (targetMatch) {
        target = targetMatch[1].trim();
        console.log(target);
      }
    };
  
    console.log("tokens: " + tokens)
    
    for (let i = tokens.length - 1; i >= 0; i--) {
      const token = tokens[i];
  
      if (token === "markdown") {
        continue;
      }
  
      console.log("sampepeko")
      if (Array.isArray(token)) {
        getTarget();
        getTitleSubtitle();
        getImageContent();
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
