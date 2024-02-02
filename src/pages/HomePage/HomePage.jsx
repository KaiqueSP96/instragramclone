import { Container, Flex, Box } from '@chakra-ui/react';
import FeedPosts from '../../components/FeedPosts/FeedPosts';

const HomePage = () => {
  return (
    <Container maxW={'container.lg'}>
      <Flex gap={20}>
        <Box flex={2} gap={10}>
          <FeedPosts />
        </Box>
        <Box flex={3} mr={20} display={{base: 'none', lg: 'block'}} maxW={300}>
          SuggestedUsers
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
