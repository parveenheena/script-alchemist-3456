import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Box, Button, Text } from '@chakra-ui/react';
import axios from 'axios';

function QuizResult({ score,language, totalScore, tryAgain }) {
    const navigate = useNavigate(); 

    const goToDashboard = async () => {   
        try {
            let userData = JSON.parse(localStorage.getItem("userData"));
            let userInfo = userData.userDetails;
            console.log(userInfo._id);
    
            const response = await fetch(`http://localhost:8000/users/${userInfo._id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${userData.token}`
                },
                body: JSON.stringify({
                    language: language,
                    score: score
                })
            });
    
            const data = await response.json();
            console.log(data);
        } catch(err) {
            console.log(err);
        }
        navigate('/dashboard/home');
    };

    return (
        <Box textAlign="center" mt={6}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Your Score: {score}
            </Text>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Total Score: {totalScore}
            </Text>
            <Box>
            <Button
            mr="3"
    bg="black"
    color="white"
    size="lg"
    onClick={tryAgain}
    _hover={{ color: 'black', bg: 'gray.200' }}
>
    Try Again
</Button>
<Button
    bg="black"
    color="white"
    size="lg"
    onClick={goToDashboard}
    _hover={{ color: 'black', bg: 'gray.200' }}
>
    Dashboard
</Button>

            </Box>
        </Box>
    );
}

export default QuizResult;
