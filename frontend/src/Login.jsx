import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Heading,
  useToast,
  Image,
  Text
} from '@chakra-ui/react';
import logo from './assets/verve.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your login logic here
    // For demo, I'm just displaying the input values in a toast message
    toast({
      title: 'Login Attempt',
      description: `Email: ${email}, Password: ${password}`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    navigate('/dashboard/home');
    
  };

  const handleSignUpClick = () => {
    // Navigate to the sign up page
    navigate('/signuppage');
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
      <Flex flexDir='column' h='100vh' align='center' gap={10} w='60%' margin={"auto"} bg='white' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius={10}>
        <Flex h='17vh' w='100%' justify='space-between' align='center'>
        <Image boxSize='100px'
        ml="2%"
          objectFit='cover'
          src={logo}
          borderRadius={10}
          alt='Dan Abramov' />
        </Flex>
        <Heading as="h1" size="3xl" color='#00FFFF' textShadow='1px 1px black'>
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
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
            LOGIN
          </Button>
          
          <Flex mt={30} gap='5%' align='center'>
          <Text fontSize={18}>Don't have an account!</Text>
          <Button color='white' bg='Black' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' mr='2%' onClick={handleSignUpClick} >
            Sign Up
          </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
};

export default Login;