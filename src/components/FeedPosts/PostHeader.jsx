import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

const PostHeader = () => {
  return (

    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} my={3}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar src="/public/img1.png" size={'sm'} alt='user profile pic'/>
            <Flex fontSize={13} fontWeight={'bold'} gap={2}>
                Mika Lakav
                <Box color={'gray.500'}>
                &#8226; 1w
                </Box>
            </Flex>
        </Flex>
        <Box cursor={'pointer'}>
            <Text fontSize={13} color={'blue.500'} fontWeight={'bold'} _hover={{color: 'white'}} transition={"0.2s ease-in-out"}>
                Unfollow
            </Text>
        </Box>
    </Flex>
  )
}

export default PostHeader