import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Heading as="h1" size="2xl" mt={10} mb={5}>
        Student Founders Club
      </Heading>
      <Text>
        Welcome to the Student Founders Club file upload portal. You can upload and view files securely.
      </Text>
      <Box my={10}>
        <Link href="/upload" passHref>
          <Button colorScheme="teal" mr={3}>
            Upload Files
          </Button>
        </Link>
        <Link href="/files" passHref>
          <Button colorScheme="teal" variant="outline">
            View Files
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
