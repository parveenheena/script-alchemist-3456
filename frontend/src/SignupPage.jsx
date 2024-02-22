import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  useToast,
  Heading,
  Image,
  Text
} from '@chakra-ui/react';
import logo from './assets/verve.png';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const toast = useToast();
  const navigate = useNavigate();

  const url = "http://localhost:8000/Users/register";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here is implementation of signup logic
    
    fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                mobileNo: mobileNo,
                password: password
            })
        }).then(res => {
          if (res.status === 400) {
            throw new Error('User already exists'); // or parse res.statusText for more detailed error message
          }
          return res.json();
        })
            .then(data => {
              // Display a toast message for demonstration

              toast({
                title: 'Signup Successful',
                description: 'You have successfully registered!',
                status: 'success',
                duration: 5000,
                isClosable: true,
              });

              navigate('/login');
            })
            .catch(err => {
              toast({
                title: 'Signup Failed',
                description: err.message,
                status: 'error',
                duration: 2000,
                isClosable: true,
              });
            });
  };

  const handleLoginClick = () => {
    // Navigate to the login page
    navigate('/login');
  };

  return (
    <Box
      p={8}
      w='100%'
      mx="auto"
      borderWidth={1}
      borderRadius={8}
      bg='black'
    >
      <Flex flexDir='column' pb='10%' align='center' gap={10} w='60%' margin={"auto"} bg='white' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius={10}>
        <Flex h='17vh' w='100%' justify='space-between' align='center'>
        <Image boxSize='100px'
        ml="2%"
          objectFit='cover'
          src={logo}
          borderRadius={10}
          alt='Dan Abramov' />
        </Flex>
        <Heading as="h1" size="3xl" color='black' textShadow='2px 2px #00FFFF'>
          Sign Up
        </Heading>
        <form onSubmit={handleSubmit}>
        <FormControl>
            <FormLabel my='10px' fontSize={18}>Username</FormLabel>
            <Input
              type="name"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              w='300px'
              p={5}
              fontSize={18}
              focusBorderColor="#00FFFF"
              borderRadius={10}
            />
          </FormControl>

          <FormControl>
            <FormLabel my='10px' fontSize={18}>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              w='300px'
              p={5}
              fontSize={18}
              focusBorderColor="#00FFFF"
              borderRadius={10}
            />
          </FormControl>

          <FormControl>
            <FormLabel my='10px' fontSize={18}>Mobile No.</FormLabel>
            <Input
              type="number"
              placeholder="Enter your mobile no."
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              w='300px'
              p={5}
              focusBorderColor="#00FFFF"
              fontSize={18}
              borderRadius={10}
            />
          </FormControl>

          <FormControl>
            <FormLabel my='10px' fontSize={18}>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              w='300px'
              p={5}
              focusBorderColor="#00FFFF"
              fontSize={18}
              borderRadius={10}
            />
          </FormControl>
          <Button mt={30} w='300px' bg='#00FFFF' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' type="submit">
            Sign Up
          </Button>
          
          <Flex mt={30} gap='5%' align='center'>
          <Text fontSize={18}>Already have an account!</Text>
          <Button color='white' bg='Black' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' mr='2%' onClick={handleLoginClick} >
            Login
          </Button>
          </Flex>

        </form>
      </Flex>
    </Box>
  );
};

export default SignupPage;
