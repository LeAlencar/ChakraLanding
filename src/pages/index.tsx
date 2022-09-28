import { Center, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from './components/Header'
import { PurchaseButton } from './components/PurchaseButton'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Center mt="20" width="100%">
        <Stack spacing={10} direction='column'>
        <Heading as='h2' mx="auto" size='2xl' color="#1E0E62">
          Startup Framework
        </Heading>
        <Text
          maxW="700px"
          noOfLines={4}
          fontSize={['12px', '22px', '25px']} 
          mt="10"
          justifyContent="center"
          textAlign="center"
          color="gray.500"
          >
          We made it so beautiful and simple. 
          It combines landings, pages,
          blogs and shop screens. It is definitely
          the tool you need in your collection!
        </Text>
        <Flex 
          align="center"
          justifyContent="center"
          mt="10"
          flexDirection="column"
        >

          <PurchaseButton />  
          <Text as="a" mt="10" fontSize="20px"  fontWeight="bold" color="#25DAC5">Learn More</Text>
        </Flex>
        </Stack>
        
      </Center>
    </>
  )
}

export default Home
