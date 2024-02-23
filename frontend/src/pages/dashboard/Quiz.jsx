import React, { useState, useEffect } from 'react';
// import { QuestionData } from './Questions';
import QuizResult from './Quizresult';
import { Box, Button, Container, Text, Progress, Badge, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Card, CardBody } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Typography } from '@material-tailwind/react';
import { useSelector } from 'react-redux';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const QuestionData = useSelector(state=>state.user.question)
    const [clickedOptions, setClickedOptions] = useState(Array(QuestionData.length).fill(0));
    const [showResult, setShowResult] = useState(false);
    const [timeLeft, setTimeLeft] = useState(15); // 5 seconds for testing purpose
    const [isTimeUp, setIsTimeUp] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate(); // Initialize useNavigate hook
    
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
        if (clickedOptions[currentQuestion] === QuestionData[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOptions(Array(QuestionData.length).fill(0));
        setScore(0);
        setTimeLeft(15); // Reset time to 5 minutes
        setIsTimeUp(false);
        onClose(); // Close the modal
    };

    const handleOptionClick = (optionIndex) => {
        const newClickedOptions = [...clickedOptions];
        newClickedOptions[currentQuestion] = optionIndex + 1;
        setClickedOptions(newClickedOptions);
    };

    const progress = ((currentQuestion + 1) / QuestionData.length) * 100;

    const goToDashboard = () => {
        navigate('/dashboard'); // Navigate to the dashboard route
    };

    return (
        // <div className="mt-12">
        // <div className="relative mt-8 h-32 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        //   <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
        // </div>
        // <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        //   <CardBody className="p-4">
        //     <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        //       <div>
        //         <Typography variant="h5" color="blue-gray" className="mb-1">
        //           Username
        //         </Typography>
        //         <Typography
        //           variant="small"
        //           className="font-normal text-blue-gray-600"
        //         >
        //           User
        //         </Typography>
        //       </div>
        //     </div>
        //   </CardBody>
        // </Card>
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
        <Box position="absolute" top={2} right={2}>
            <Badge colorScheme="yellow" fontSize="lg">
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </Badge>
        </Box>
        <Progress value={progress} mb={4} />
        <Box>
            {showResult ? (
                <QuizResult score={score} totalScore={QuestionData.length} tryAgain={resetAll} />
            ) : (
                <>
                    <Box mb={6}>
                        <Text fontSize={["md", "xl"]} fontWeight="bold">
                            {currentQuestion + 1}. {QuestionData[currentQuestion].question}
                        </Text>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        {QuestionData[currentQuestion].options.map((option, i) => (
                            <Button
                                key={i}
                                variant={clickedOptions[currentQuestion] === i + 1 ? 'solid' : 'outline'}
                                colorScheme={clickedOptions[currentQuestion] === i + 1 ? 'blue' : 'gray'}
                                size="lg"
                                width="100%"
                                mb={2}
                                fontSize={["sm", "md", "lg", "xl"]}
                                onClick={() => handleOptionClick(i)}
                            >
                                {option}
                            </Button>
                        ))}
                    </Box>
                    <Box display="flex" justifyContent="center"> {/* Center align the buttons */}
                        <Button
                            bg='#00FFFF' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
                            color="black"
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
                            bg='#00FFFF' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
                            color="black"
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

        // </div>
    );
};

export default Quiz;
