
import React, { useState } from "react";
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
  Select,
  Box,
  Flex,
  Spacer,
  InputGroup,
  Checkbox,
  Stack,
  InputRightElement,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { signUp } from "../Redux/AuthReducer/action";


const Signup = () => {
  const [emailUp, setEmailUp] = useState("");
  const [passwordUp, setPasswordUp] = useState("");
  const [country, setCountry] = useState("");
  const dispatc = useDispatch();
  const handleSubmitUp = (e) => {
    if (emailUp && passwordUp && country) {
      dispatc(signUp({ emailUp, passwordUp, country }))
      alert("Sign Up successfull")
    }
    else if(emailUp === ""){
      alert("Please enter Email")
    }
    else if(passwordUp === ""){
      alert("Please enter Password")
    }
    // else if(country === "Country*"){
    //   alert("Please select Country")
    // }
    else{
      alert("Please select Country")
    }
    setEmailUp("");
    setPasswordUp("");
    setCountry("");
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sizeUp, setSizeUp] = React.useState("md");
  const [showUp, setShowUp] = React.useState(false);

  const handleSizeClickUp = (newSize) => {
    setSizeUp(newSize);
    onOpen();
  };
  const handleClickUp = () => setShowUp(!showUp);

  const sizesUp = ["sm"];

  return (
    <>
      {sizesUp.map((size) => (
        <button
          onClick={() => handleSizeClickUp(size)}
          key={size}
          m={4}
        >{`Sign Up`}</button>
      ))}

      <Modal onClose={onClose} size={sizeUp} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ textAlign: "center" }}>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Input
                focusBorderColor="black"
                borderRadius="0px"
                value={emailUp}
                onChange={(e) => setEmailUp(e.target.value)}
                placeholder="Email Address*"
              />{" "}
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  borderRadius="0px"
                  focusBorderColor="black"
                  value={passwordUp}
                  onChange={(e) => setPasswordUp(e.target.value)}
                  type={showUp ? "text" : "password"}
                  placeholder="Password*"
                />

                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClickUp}>
                    {showUp ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Select
                placeholder="Country*"
                borderRadius="0px"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="Afghanistan">Afghanistan</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Brazil">Brazil</option>
                <option value="Canada">Canada</option>
                <option value="China">China</option>
                <option value="Denmark">Denmark</option>
                <option value="Egypt">Egypt</option>
                <option value="Finland">Finland</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Italy">Italy</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Libya">Libya</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Mexico">Mexico</option>
                <option value="Nepal">Nepal</option>
                <option value="New Zealand">New Zealand</option>
                <option value="North Korea">North Korea</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Philippines">Philippines</option>
                <option value="Portugal">Portugal</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Singapore">Singapore</option>
                <option value="South Africa">South Africa</option>
                <option value="South Korea">South Korea</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United State of America">United State of America</option>
                <option value="Zimbabwe">Zimbabwe</option>
                <option value="Other">Other</option>
              </Select>
              <Spacer />
              <Spacer />
              <Flex>
                <Checkbox defaultChecked>Remember me</Checkbox>
              </Flex>
              <Button
                color="white"
                size="md"
                height="40px"
                width="338px"
                bgColor="black"
                borderRadius="0px"
                onClick={handleSubmitUp}
              >
                CREATE AN ACCOUNT
              </Button>
              <Box color="#767676" noOfLines={6} fontSize="sm">
                By clicking "Create an Account", you agree to our{" "}
                <Link textDecoration="underline">Terms of Use</Link>
                and <Link textDecoration="underline">Privacy Policy</Link>,
                including the Use of Cookies and the transfer of your personal
                information to the United States, a jurisdiction that may not
                provide an equivalent level of data protection to the laws in
                your home country.
              </Box>
            </Stack>
            <Stack mt="3rem">
              {/* <hr/'> */}
              <hr />
            </Stack>
            <Stack style={{ textAlign: "center" }} mt="1.5rem">
              <Heading as="h5" size="sm">
                Already have an account?
                <Link
                  href="/signup"
                  onClick={() => handleSizeClickUp(sizeUp)}
                  key={sizeUp}
                  m={2}
                  color="blue"
                >
                  Sign In
                </Link>
              </Heading>
            </Stack>
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
