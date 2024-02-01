import { Box, Container, Flex, Image, VStack } from '@chakra-ui/react';

import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = () => {
  return (
    <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'} px={4}>
      <Container maxW={'container.md'} padding={0}>
        <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
          {/* Conteudo lado Esquerdo */}
          <Box display={{ base: 'none', md: 'block' }}>
            <Image src="/auth.png" h={650} alt="Phone Image" />
          </Box>

          {/* Conteudo lado Direito */}
          <VStack spacing={4} align={'stretch'}>
            <AuthForm />
            <Box textAlign={'center'}>Get the app:</Box>
            <Flex gap={5} justifyContent={'center'}>
              <Image cursor={'pointer'} src="/public/playstore.png" h={'10'} alt="Play Store logo"/>
              <Image cursor={'pointer'} src="/public/microsoft.png" h={'10'} alt="Play Store logo"/>
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
