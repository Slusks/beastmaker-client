import React from "react";
import { Box, Flex } from "@chakra-ui/react";

// Define attribute colors (pastel shades)
const attributeColors = {
  Speed: "orange.200",
  Strength: "green.200",
  Cunning: "purple.200",
  Tenacity: "gray.200",
  Special: "red.200"
};

// Pentagon positions
const positions = {
  Special: { top: "0%", left: "50%", transform: "translate(-50%, 0%)" },
  Speed: { top: "25%", left: "0%" },
  Strength: { top: "25%", right: "0%" },
  Cunning: { bottom: "25%", left: "0%" },
  Tenacity: { bottom: "25%", right: "0%" }
};

const Board = ({ assignedTiles, onAssign, size = "large" }) => {
  const boardSize = size === "large" ? "300px" : "200px";

  return (
    <Box position="relative" w={boardSize} h={boardSize}>
      {/* Pentagon Shape */}
      <svg viewBox="0 0 100 86" width="100%" height="100%">
        <polygon points="50,0 100,32 81,86 19,86 0,32" fill="none" stroke="black" strokeWidth="2" />
      </svg>

      {/* Attribute Slots */}
      {Object.entries(positions).map(([attribute, style]) => (
        <Box
          key={attribute}
          position="absolute"
          {...style}
          w="40px"
          h="40px"
          bg={attributeColors[attribute]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="full"
          cursor="pointer"
          onClick={() => onAssign(attribute)}
        >
          {assignedTiles[attribute] ? assignedTiles[attribute].name : attribute}
        </Box>
      ))}
    </Box>
  );
};

export default Board;
