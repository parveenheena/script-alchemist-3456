import React, { useEffect, useState } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tooltip,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setQuizQuestion } from '@/redux/userActionAndReducer/actions';


export const UserQuizCard = ({obj}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
const dispatch = useDispatch();
const navigate = useNavigate();
  const startQuiz = async (language)=> {
    try{
      console.log(language);
      const res = await axios.post(`http://localhost:8000/questions`,{language})
      dispatch(setQuizQuestion(res.data.questions));
      navigate('/quiz');
    } catch(err){
      console.log(err);
    }
   
  }
  return (
    <> 
    <Dialog open={open} handler={handleOpen}>
    <DialogHeader>ByteBlitz Quiz.</DialogHeader>
    <DialogBody>
      <Typography>1. Follow guidelines closely, meet deadlines, communicate progress proactively.</Typography>
      <Typography>2. Read questions carefully, avoid rushing, ensure accuracy in responses.</Typography>
      <Typography>3. Select the most suitable answer, eliminate obvious incorrect options.</Typography>
      <Typography>4. Submit answers following provided instructions, adhere to submission format.</Typography>
      <Typography>5. Each question carries one mark.</Typography>
    </DialogBody>
    <DialogFooter>
      <Button
        variant="text"
        color="black"
        onClick={handleOpen}
        className="mr-1"
      >
        <span>Cancel</span>
      </Button>
      <Button variant="gradient" color="black" onClick={()=>startQuiz(obj.language)}>
        <span>Confirm</span>
      </Button>
    </DialogFooter>
  </Dialog>
    <Card color="transparent" shadow={false} className='border border-black p-2 flex justify-center items-center'>
      <CardHeader
        floated={false}
        // color="gray"
        shadow={false}
        className="mx-0 mt-1 mb-0 h-44 xl:h-32"
      >
        <CircularProgress value={obj.score*10} color='black' size={"80%"}  thickness='11px' className='pl-5'>
          <CircularProgressLabel fontSize={"lg"}>{obj.score / 0.10}%</CircularProgressLabel>
        </CircularProgress>
      </CardHeader>
      <CardBody className="py-0 px-1 flex flex-col justify-evenly items-center">
        <Typography
          variant="small"
          className="font-normal text-blue-gray-500"
        >
          Scores: {obj.score}/10
        </Typography>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mt-1 mb-2"
        >
          {obj.language}
        </Typography>
        <Typography
          variant="small"
          className="font-normal text-blue-gray-500"
        >
          description
        </Typography>
      </CardBody>
      <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
        {/* <Link > */}
        <Button variant="black" size="sm" onClick={handleOpen}>
          Re-Attemp Quiz
        </Button>
        {/* </Link> */}
      </CardFooter>
    </Card>
    </>
  )
}
