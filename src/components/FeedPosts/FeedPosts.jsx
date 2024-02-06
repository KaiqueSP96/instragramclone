import { Container, VStack, Flex, Box, Skeleton, SkeletonCircle } from "@chakra-ui/react";

import FeedPost from "./FeedPost";

import { useEffect, useState } from "react";

const FeedPosts = () => {

  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() =>{
      setLoading(false)
    }, 2000)
  },[])

  return (
    <Container maxW={'container.sm'} py={10} px={2}>
        {isLoading && [0,1,2,3].map((_,idx) => (
          <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size='10'/>
              <VStack gap={2} alignItems={'flex-start'}>
              <Skeleton height='10px' w={200} />
              <Skeleton height='10px' w={200} />
              </VStack>
            </Flex>
            <Skeleton w={'full'}>
              <Box h={500}></Box>
            </Skeleton>
          </VStack>
        ))}

        {!isLoading && (
        <>
          <FeedPost username='mikaLakav' avatar='/img1.png' img='/img1.png' />
          <FeedPost username='bareshMita' avatar='/img2.png' img='/img2.png' />
          <FeedPost username='kaeiLamov' avatar='/img3.png' img='/img3.png' />
          <FeedPost username='_lizandromotta' avatar='/img4.png' img='/img4.png' />
         </>   
        )}
    </Container>
  )
}

export default FeedPosts