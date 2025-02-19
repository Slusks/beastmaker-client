import React from "react";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";

const TileRow = ({ tiles, onSelect, onLock }) => {
  return (
    <Flex gap={4} p={4} justify="center">
      {tiles.map((tile, index) => (
        <VStack key={index} bg="white" p={4} borderRadius="md" boxShadow="md">
          <Text fontWeight="bold">{tile.name}</Text>
          <Text fontSize="sm">{tile.attributes.join(", ")}</Text>
          <Button colorScheme="blue" size="sm" onClick={() => onSelect(tile)}>
            Select
          </Button>
          <Button colorScheme="gray" size="sm" onClick={() => onLock(tile)}>
            Lock
          </Button>
        </VStack>
      ))}
    </Flex>
  );
};

export default TileRow;
