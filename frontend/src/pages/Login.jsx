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
import logo from '../assets/verve.png';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setDataIntoStore} from '../redux/userActionAndReducer/actions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const url = "http://localhost:8000/Users/login";
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.token) {
                  const userData = {
                    token: data.token,
                    userDetails: data.userDetails,
                  }
                  
                  dispatch(setDataIntoStore(userData));

                    setTimeout(() => {
                      navigate('/dashboard/home');

                        toast({
                          title: 'Login Success',
                          description: `You have successfully logged in!`,
                          status: 'success',
                          duration: 5000,
                          isClosable: true,
                        });
                    }, 1000);
                } else{
                  toast({
                    title: 'Login Failed',
                    description: `Please log in with correct credentials`,
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                  });
                }

            })
            .catch(err => {
              toast({
                title: 'Login Failed',
                description: `Please log in with correct credentials`,
                status: 'error',
                duration: 2000,
                isClosable: true,
              });
            });
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
      h="100%"
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