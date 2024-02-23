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
                <Button color="black" bg='#00FFFF' size="lg" onClick={tryAgain}>
                    Try Again
                </Button>
                <Button color="black" bg='#00FFFF' size="lg" onClick={goToDashboard}>
                    Dashboard
                </Button>
            </Box>
        </Box>
    );
}

export default QuizResult;
