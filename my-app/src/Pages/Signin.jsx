import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  Heading,
  Link,
  Box,
  Flex,
  Spacer,
  InputGroup,
  Checkbox,
  Stack,
  InputRightElement,
} from "@chakra-ui/react";

const Signin = () => {
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const comingFrom = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ email, password })).then((res) => {
        navigate(comingFrom, { replace: true });
      });
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const [show, setShow] = React.useState(false);

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const handleClick = () => setShow(!show);

  const sizes = ["sm"];
  return (
    <>
      {sizes.map((size) => (
        <Button
          onClick={() => handleSizeClick(size)}
          key={size}
          m={4}
        >{`Sign In`}</Button>
      ))}

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ textAlign: "center" }}>Sign In</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
              <Stack spacing={3}>
                <Input
                  focusBorderColor="black"
                  borderRadius="0px"
                  placeholder="Email Address*"
                />{" "}
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    borderRadius="0px"
                    focusBorderColor="black"
                    type={show ? "text" : "password"}
                    placeholder="Password*"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Flex>
                  <Checkbox defaultChecked>Remember me</Checkbox>
                  <Spacer />
                  <Link href="https://chakra-ui.com" color="blue">
                    Forgot Password?
                  </Link>
                </Flex>
                <Button
                  color="white"
                  size="md"
                  height="40px"
                  width="338px"
                  bgColor="black"
                  borderRadius="0px"
                >
                  SIGN IN NOW
                </Button>
                <Box color="#767676" noOfLines={2} fontSize="sm">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <Link textDecoration="underline">Privacy Policy</Link> and{" "}
                  <Link textDecoration="underline">Terms of Service</Link>{" "}
                  apply.
                </Box>
              </Stack>
              <Stack mt="3rem">
                {/* <hr/'> */}
                <hr />
              </Stack>
              <Stack style={{ textAlign: "center" }} mt="1.5rem" mb="5rem">
                <Heading as="h5" size="sm">
                  Don’t have an account?{" "}
                  <Link href="/signup" color="blue">
                    Sign up now
                  </Link>
                </Heading>
              </Stack>
            </ModalBody>
          </form>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signin;
