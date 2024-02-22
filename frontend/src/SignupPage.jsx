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
  Image
} from '@chakra-ui/react';
import logo from './assets/verve.png';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your signup logic
    // For example, you can send formData to your backend API

    // Display a toast message for demonstration
    toast({
      title: 'Signup Successful',
      description: 'You have successfully signed up!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

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
          
        </form>
      </Flex>
    </Box>
  );
};

export default SignupPage;
