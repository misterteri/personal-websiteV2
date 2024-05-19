import { Box, Container, HStack, Link, Spacer, Text } from "@chakra-ui/react";

export default function Navbar(): JSX.Element {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      display="flex"
      flexDirection="row"
      backgroundColor="gray.400"
      height="60px" // Set a fixed height for the Navbar
      opacity={0.9} // Add opacity to make it slightly transparent
      zIndex={10} // Add z-index to make it appear above other elements
    >
      <Box
        // border="1px solid #e2e8f0"
        margin="auto"
        padding="2"
        paddingInline={8}
      >
        <Text fontSize="3xl" fontWeight="bold">
          /dev/gilbert
        </Text>
      </Box>
      <Spacer />
      <HStack spacing={8}>
        <Link href="#about">
          <Text fontSize="xl">About Me</Text>
        </Link>

        <Link href="#skills">
          <Text fontSize="xl">Skills</Text>
        </Link>
        <Link href="#projects">
          <Text fontSize="xl">Projects</Text>
        </Link>
        <Link href="#contact">
          <Text fontSize="xl">Contact</Text>
        </Link>
      </HStack>
    </Box>
  );
}
