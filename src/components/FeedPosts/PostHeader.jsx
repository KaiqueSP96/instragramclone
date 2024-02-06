import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

const PostHeader = ({username, avatar}) => {
  return (

    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'} my={3}>
        <Flex alignItems={'center'} gap={2}>
            <Avatar cursor={'pointer'} src={avatar} size={'sm'} alt='user profile pic'/>
            <Flex cursor={'pointer'} fontSize={13} fontWeight={'bold'} gap={2}>
                {username}
                <Box color={'gray.500'}>
                &#8226; 1w
                </Box>
            </Flex>
        </Flex>
        <Box cursor={'pointer'}>
            <Text fontSize={13} color={'blue.500'} fontWeight={'bold'} _hover={{color: 'white'}} transition={"0.3s ease-in-out"}>
                Unfollow
            </Text>
        </Box>
    </Flex>

  )
}

export default PostHeader