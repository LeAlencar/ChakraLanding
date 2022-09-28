import { Text } from "@chakra-ui/react";

const Logo = () => {
  return(
    <Text
        fontSize={["2xl","3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        MyStartup
        <Text as="span" ml="1" color="pink.500">.</Text>
      </Text>
  )
}

export default Logo