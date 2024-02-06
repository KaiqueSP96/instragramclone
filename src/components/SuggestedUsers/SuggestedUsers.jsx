import { VStack, Flex, Text, Box, Link } from "@chakra-ui/react";

import SuggestedHeader from '../../components/SuggestedUsers/SuggestedHeader';
import SuggestedUser from '../../components/SuggestedUsers/SuggestedUser';


const SuggestedUsers = () => {

  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader/>

      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontSize={12} fontWeight={'bold'} color={'gray.400'}>
          Suggested for you
        </Text>
        <Text fontSize={12} fontWeight={'bold'} _hover={{color:'gray.400'}} cursor={'pointer'}>
          See all
        </Text>
      </Flex>

      <SuggestedUser name='Adam Bills' followers={254} avatar='https://bit.ly/dan-abramov'/>
      <SuggestedUser name='Ryan Graves' followers={115} avatar='https://bit.ly/ryan-florence'/>
      <SuggestedUser name='Christian Membo' followers={221} avatar='https://bit.ly/code-beast'/>

      <Box alignSelf={'start'} fontSize={12} color={'gray.500'} mt={5}>
      Ⓒ 2024 Built by {" "} <Link href="https://github.com/KaiqueSP96" color={'blue.500'} target="_blank"> Kaique Santos </Link>
      </Box>

    </VStack>
  )
}

export default SuggestedUsers