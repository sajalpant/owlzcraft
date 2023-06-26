import React from "react";
import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Link, Image, Box, Button, Show, MenuButton, IconButton, Menu, MenuList, MenuItem, Hide, LinkBox } from "@chakra-ui/react";
import owlCraftlogo from "../Utils/Navbar/Images/owlCraft.png";
import { Link as ReachLink } from "@reach/router"
function Navbar({ data }) {
  return (
    <>
    {/* <Flex >
        
          <Box display={"flex"}  ml={4}  fontWeight="bold"
            textTransform="uppercase"
            fontSize={{lg:"32px",sm:"30px",md:"28px"}}
            letterSpacing="wide"
            color="orange">
            DELIVARY </Box>
"Home", "About Us", "Services", "Portfolio", "Contact Us"
          <Button textTransform="uppercase" bg="orange" color={"white"}>LOGIN</Button>
          </Flex> */}
      <Flex p={5}  w={{ lg: '100%', sm: '100%', md: '100%' }} justifyContent="space-evenly" color="gray.500" 
       
        alignItems="center"
        boxShadow=" rgba(0, 0, 0, 0.18) 0px 2px 4px"
      ><Show mr={10}  breakpoint='(max-width: 770px)'><Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
      />
      <MenuList>
      {data.map((e) => (
            <MenuItem
              
              _hover={{ color: "red"} }
             
            >
              {e}
            </MenuItem>
          ))}
      
      </MenuList>
    </Menu></Show>
        <div>
          <Box id="owlzlogo" display={"flex"}  ml={4}  fontWeight="bold"
            textTransform="uppercase"
            fontSize={{lg:"32px",sm:"30px",md:"28px"}}
            letterSpacing="wide"
            color="orange">
            <Image src={owlCraftlogo} alt="OwlzCraftLogo" />
          </Box>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            padding: "56px",
            _hover: { color: "red" },
          }}
        >
          <Hide below='md' >
          {data.map((e) => (
            <LinkBox
              className="link"
              color="#9a6a38"
              fontSize={{lg:"20px",sm:"15px",md:"10px"}}
              fontWeight="400"
             
              _hover={{ color: "red"} }
             
            >
              {e}
            </LinkBox>
          ))}
       </Hide> </div>
        <div>
          <Button
            colorScheme="whatsapp"
            borderRadius="22px"
            size="20px"
            _hover={{
              bg: "orange",
              transitionDuration: "570ms",
            }}
            fontSize={{lg:"18px",sm:"15px",md:"10px"}}
            p="15px"
            width={{ lg: '200px', sm: '100%', md: '100%' }} 
            _active={{}}
          >
            let's Connect <ArrowForwardIcon />{" "}
          </Button>
        </div>
      </Flex>
    </>
  );
}

export { Navbar };
