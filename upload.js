import { Box, Input, Button, Heading, useToast } from '@chakra-ui/react';
import { useState } from 'react';

export default function Upload() {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: 'No file selected',
        description: "You must select a file to upload.",
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: 'Uploaded',
          description: "Your file has been uploaded.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: "There was an issue with the upload.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5} textAlign="center">
      <Heading as="h1" size="xl" mb={5}>
        Upload a File
      </Heading>
      <Input type="file" onChange={handleFileChange} mb={3} />
      <Button colorScheme="teal" onClick={handleUpload}>
        Upload File
      </Button>
    </Box>
  );
}
