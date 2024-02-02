import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Image } from "@chakra-ui/react";

const FeedPost = () => {
  return <>
  
    <PostHeader />
        <Box>
            <Image src="/public/img1.png" alt="user profile pic" />
        </Box>
    <PostFooter />

  </>
}

export default FeedPost