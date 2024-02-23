import React, { useState, useEffect } from 'react';
import QuizResult from './Quizresult';
import { Box, Button, Container, Text, Badge, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Card, CardBody } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const QuestionData = useSelector(state=>state.user.question)
    const [clickedOptions, setClickedOptions] = useState(Array(QuestionData.length).fill(0));
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300); 
    const [isTimeUp, setIsTimeUp] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    useEffect(() => {
        const timer = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(prevTime => prevTime - 1);
            } else {
                clearInterval(timer);
                setIsTimeUp(true);
                onOpen();
            }
        }, 1000);
        
        return () => clearInterval(timer);
    }, [timeLeft, onOpen]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const changeQuestion = (nextQuestion) => {
        updateScore();

        if (nextQuestion >= 0 && nextQuestion < QuestionData.length) {
            setCurrentQuestion(nextQuestion);
            setShowResult(false);
            
        } else if (nextQuestion === QuestionData.length) {
            setShowResult(true);
        }
    };
     
    const updateScore = () => {
        if (clickedOptions[currentQuestion] === QuestionData[currentQuestion].correct_answer) {
            console.log(currentQuestion)
            setScore(score + 1);
        }
    };

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOptions(Array(QuestionData.length).fill(0));
        setScore(0);
        setTimeLeft(300); 
        setIsTimeUp(false);
        onClose(); 
    };

    const handleOptionClick = (optionString) => {
        const newClickedOptions = [...clickedOptions];
        newClickedOptions[currentQuestion] = optionString;
        setClickedOptions(newClickedOptions);
        console.log(newClickedOptions);
    };

    
    return (

        <Box
    w='100%'
    mx="auto"
    borderWidth={1}
    borderRadius={8}
    bg='black'
    h="100vh"
    display="flex"
    alignItems="center"
    justifyContent="center"
>
    <Container
        p={[4, 6, 8]}
        bg='white'
        boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
        borderRadius={10}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        position="relative"
    >
        <Text fontSize={["xl", "2xl"]} fontWeight="bold" textAlign="center" mt={4} mb={6}>
            {QuestionData[0].language} Quiz 
        </Text>
        
     
        <Box>
            {showResult ? (
                <QuizResult score={score} totalScore={QuestionData.length} tryAgain={resetAll} />
            ) : (
                <>
                <Box position="absolute" top={2} right={2}>
            <Badge colorScheme="yellow" fontSize="lg">
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </Badge>
        </Box>
                    <Box mb={6}>
                        <Text fontSize={["md", "xl"]} fontWeight="bold">
                            {currentQuestion + 1}. {QuestionData[currentQuestion].question}
                        </Text>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        {QuestionData[currentQuestion].options.map((option, i) => (
                            <Button
                                key={i}
                                variant={clickedOptions[currentQuestion] === option ? 'solid' : 'outline'}
                                colorScheme={clickedOptions[currentQuestion] === option ? 'blue' : 'gray'}
                                size="lg"
                                width="100%"
                                mb={2}
                                fontSize={["sm", "md", "lg", "xl"]}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </Button>
                        ))}
                    </Box>
                    <Box display="flex" justifyContent="center"> 
                        <Button
                            bg="black"
                            color="white" 
                            _hover={{ color: 'black', bg: 'gray.200' }}
                            boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'                           
                            size="lg"
                            mt={4}
                            onClick={() => changeQuestion(currentQuestion - 1)}
                            disabled={currentQuestion === 0}
                            mr={2} 
                            display={showResult ? 'none' : 'inline-block'}
                        >
                            Prev
                        </Button>
                        <Button
                            bg="black"
                            color="white" 
                            _hover={{ color: 'black', bg: 'gray.200' }} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
                            
                            size="lg"
                            mt={4}
                            onClick={() => changeQuestion(currentQuestion + 1)}
                            disabled={clickedOptions[currentQuestion] === 0}
                            display={showResult ? 'none' : 'inline-block'}
                        >
                            Next   
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    </Container>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Time's Up!</ModalHeader>
            <ModalBody>
                Sorry, time's up! Your quiz session has ended.
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={resetAll}>
                    Restart Quiz
                </Button>
                <Button colorScheme="green" onClick={() => {onClose(); setShowResult(true);}}>
                    Submit
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
</Box>
    );
};

export default Quiz;