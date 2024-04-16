import { Box, List, ListItem, ListIcon, Heading, Link } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const mockFiles = [
  { name: 'file1.txt', url: '/files/file1.txt' },
  { name: 'file2.jpg', url: '/files/file2.jpg' },
  // ... other mock files
];

export default function Files() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={5}>
        Uploaded Files
      </Heading>
      <List spacing={3}>
        {mockFiles.map((file, index) => (
          <ListItem key={index} d="flex" alignItems="center">
            <ListIcon as={MdCheckCircle} color="green.500" />
            <Link href={file.url} isExternal>
              {file.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
