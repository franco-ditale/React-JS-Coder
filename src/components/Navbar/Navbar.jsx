import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  useColorMode
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { CartWidget } from "../CartWidget";
import { Link } from "react-router-dom";
import { useItemsCollection } from "../../hooks";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { items } = useItemsCollection("categories");

  return (
    <>
      <Box bgGradient="linear(to-r, teal.400, cyan.600)" px={4} boxShadow="lg">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link to="/" fontSize="x1" fontWeight="bold" color="white" textShadow="1px 1px 4px rgba(0, 0, 0, 0.6) bk">
              PipoStore
            </Link>
          </Box>
          <Box width={"100%"} ml={10}>
            <Menu>
              <MenuButton as={Button} ml={4} bg="black" color="white" _hover={{ bg: "gray.200", color: "teal.800" }}>
                Dynamic Menu
              </MenuButton>
              <MenuList maxH={"200px"} overflowY={"scroll"}>
                {items.map((category) => (
                  <MenuItem key={category.slug}>
                    <Link to={`/category/${category.slug}`}>{category.name}</Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <CartWidget />
              <Button
                onClick={toggleColorMode}
                bg="white"
                color="teal.600"
                _hover={{ bg: "gray.200", color: "teal.800" }}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>

    </>
  );
};

