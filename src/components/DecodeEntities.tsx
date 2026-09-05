import { Fragment } from "react";

const DecodeEntities = ({ str }: { str: string }) => {
  // Helper function to parse links and bold text
  const parseFormatting = (text: string) => {
    const linkPattern = /Linktext:([^;]+);Linkto:([^;]+);/g;
    const boldPattern = /Boldtext:([^;]+);/g;
    const parts = [];

    // Collect all matches with their types
    const allMatches = [];

    // Find all link matches
    let match;
    while ((match = linkPattern.exec(text)) !== null) {
      allMatches.push({
        type: "link",
        index: match.index,
        length: match[0].length,
        url: match[2],
        text: match[1],
      });
    }

    // Find all bold matches
    while ((match = boldPattern.exec(text)) !== null) {
      allMatches.push({
        type: "bold",
        index: match.index,
        length: match[0].length,
        text: match[1],
      });
    }

    // Sort matches by index
    allMatches.sort((a, b) => a.index - b.index);

    console.log("Input text:", text);
    console.log("All matches found:", allMatches);

    let lastIndex = 0;
    for (const match of allMatches) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push({
          type: "text",
          content: text.slice(lastIndex, match.index),
        });
      }

      // Add the formatted content
      if (match.type === "link") {
        parts.push({ type: "link", url: match.url, text: match.text });
      } else if (match.type === "bold") {
        parts.push({ type: "bold", text: match.text });
      }

      lastIndex = match.index + match.length;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({ type: "text", content: text.slice(lastIndex) });
    }

    console.log("Parsed parts:", parts);

    return parts.length > 0 ? parts : [{ type: "text", content: text }];
  };

  // Process text with newlines and nbsp
  const processText = (text: string) => {
    if (text.includes("\n")) {
      return text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {line.split("&nbsp;").map((word, j) => (
            <Fragment key={j}>
              {word}
              {j < line.split("&nbsp;").length - 1 && "\u00A0"}
            </Fragment>
          ))}
          {i < text.split("\n").length - 1 && <br />}
        </Fragment>
      ));
    }
    return text.split("&nbsp;").map((word, j) => (
      <Fragment key={j}>
        {word}
        {j < text.split("&nbsp;").length - 1 && "\u00A0"}
      </Fragment>
    ));
  };

  const parts = parseFormatting(str || "");

  console.log(parts);

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part.type === "link" ? (
            <a href={part.url} target="_blank" rel="noopener noreferrer">
              {part.text}
            </a>
          ) : part.type === "bold" ? (
            <strong>{processText(part?.text || "")}</strong>
          ) : (
            processText(part?.content || "")
          )}
        </Fragment>
      ))}
    </>
  );
};

export default DecodeEntities;
