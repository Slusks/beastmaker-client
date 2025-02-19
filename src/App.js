import React, { useState } from "react";
import { Box, Button, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import Board from "./components/board";
import TileRow from "./components/tileRow";

const sampleTiles = [
  { name: "Swiftfang", attributes: ["Speed", "Cunning", "Tenacity"] },
  { name: "Stonehide", attributes: ["Strength", "Tenacity", "Speed"] },
  { name: "Venomcrest", attributes: ["Speed", "Cunning", "Special"] },
  { name: "Thunderbeak", attributes: ["Speed", "Strength", "Tenacity"] },
  { name: "Emberfang", attributes: ["Strength", "Cunning", "Special"] }
];

function App() {
  const [tiles, setTiles] = useState(sampleTiles);
  const [assignedTiles, setAssignedTiles] = useState({});
  const [selectedTile, setSelectedTile] = useState(null);

  const handleSelectTile = (tile) => {
    setSelectedTile(tile);
  };

  const handleAssignTile = (attribute) => {
    if (!selectedTile || !selectedTile.attributes.includes(attribute)) return;

    setAssignedTiles((prev) => ({
      ...prev,
      [attribute]: selectedTile
    }));

    setTiles((prev) => prev.filter((t) => t !== selectedTile));
    setSelectedTile(null);
  };

  const handleLockTile = (tile) => {
    console.log(`Locked tile: ${tile.name}`);
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" bg="gray.100" p={4}>
      <Heading size="lg">Opponent's Board</Heading>
      <Board assignedTiles={{}} onAssign={() => {}} size="small" />

      <Heading size="lg" mt={8}>Your Board</Heading>
      <Board assignedTiles={assignedTiles} onAssign={handleAssignTile} size="large" />

      <TileRow tiles={tiles} onSelect={handleSelectTile} onLock={handleLockTile} />
    </Flex>
  );
}

export default App;
