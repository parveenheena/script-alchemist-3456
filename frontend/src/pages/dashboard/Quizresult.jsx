import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Box, Button, Text } from '@chakra-ui/react';

function QuizResult({ score, totalScore, tryAgain }) {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const goToDashboard = () => {
        navigate('/dashboard/home'); // Navigate to the dashboard route
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
