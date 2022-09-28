import { Search2Icon } from "@chakra-ui/icons"
import { Button, Flex, Icon, IconButton, Text, useBreakpointValue } from "@chakra-ui/react"
import { Logo } from "./Logo"


export const Header = () => {

  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="6"
    >
      <Logo />
      <Flex 
        w="100%"
        maxWidth={1480}
        align="center"
        justifyContent="center"
        color="gray.500"
      >
        <Text as="a" >Home</Text>
        <Text as="a" ml="10">Features</Text>
        <Text as="a" ml="10">Blog</Text>
        <Text as="a" ml="10">Shop</Text>
        <Button ml="10" size='sm'>
          <Search2Icon />
        </Button>
      </Flex>
      <Flex
        align="center"
        justifyContent="space-between"
        ml="auto"
      >
        <Button backgroundColor="transparent" color="gray.500" borderRadius={50}>
          Sign In
        </Button>
        <Button borderRadius={50} color="white" bgColor="#25DAC5">
          Sign Up
        </Button>
      </Flex>
    </Flex>
  )
}