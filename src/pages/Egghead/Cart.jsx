import {
  useColorModeValue,
  useColorMode,
  AspectRatio,
  Heading,
  Divider,
  VStack,
  Button,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();

  const backgroundColor = useColorModeValue("gray.50", "whiteAlpha.50");

  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      background={backgroundColor}
      alignItems="flex-start"
      height="full"
      width="full"
      padding={10}
      spacing={6}
    >
      <VStack alignItems="flex-start" spacing={3}>
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If the price is too hard on your eyes,{" "}
          <Button onClick={toggleColorMode} colorScheme="black" variant="link">
            try changing the theme.
          </Button>
        </Text>
      </VStack>
      <HStack alignItems="center" width="full" spacing={6}>
        <AspectRatio width={24} ratio={1}>
          <Image src="/images/skateboard.jpg" alt="Skateboard"></Image>
        </AspectRatio>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
          width="full"
          spacing={0}
        >
          <VStack alignItems="flex-start" width="full" spacing={0}>
            <Heading size="md">Penny board</Heading>
            <Text color={secondaryTextColor}>PNYCOMP27541</Text>
          </VStack>
          <Heading textAlign="end" size="sm">
            $119.00
          </Heading>
        </Stack>
      </HStack>
      <VStack alignItems="stretch" width="full" spacing={4}>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes (estimated)</Text>
          <Heading size="sm">$23.80</Heading>
        </HStack>
      </VStack>
      <Divider></Divider>
      <HStack justifyContent="space-between" width="full">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="lg">$162.79</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
