import { Flex, Box, Text, InputGroup, InputRightElement, Button } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'

import { useState } from "react"

import { CommentLogo, NotificationsLogo, UnlikeLogo} from '../../assets/constants'

const PostFooter = ({username}) => {

  const [liked, setLiked] = useState();
  const [likes, setLikes] = useState(3);

  const handleLike = () => {
    setLiked((prevLiked) => !prevLiked);
    setLikes((prevLikes) => likes ? prevLikes + 1 : prevLikes - 1);
  }

  return <Box mb={10}>
  
    <Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={2} mt={4}>
        <Box fontSize={18} cursor={'pointer'} onClick={handleLike}>
          {!liked ? (<NotificationsLogo />) : (<UnlikeLogo/>)}
        </Box>

        <Box cursor={'pointer'} fontSize={18}>
          <CommentLogo/>
        </Box>
    </Flex>

    <Text fontWeight={600} fontSize={'sm'}>
        {likes} likes
    </Text>

    <Text fontSize={'sm'} mt={3} fontWeight={700}>
        {username}{' '}
        <Text as='span' fontWeight={400}>
          Feeling god.
        </Text>
    </Text>
    <Text fontSize='sm'  color={'gray'} cursor={'pointer'}>
        View all 2 comments
    </Text>

    <Flex alignItems={'center'} gap={2} justifyContent={'space-between'} w={'full'}>
      <InputGroup>
        <Input variant={'flushed'} placeholder={'Add a comment...'} fontSize={14}/>
        <InputRightElement>
          <Button fontSize={14} color={'blue.500'} fontWeight={600} cursor={'pointer'} _hover={{color: 'white'}} bg={'transparent'}>
            Post
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>

  </Box>
}

export default PostFooter