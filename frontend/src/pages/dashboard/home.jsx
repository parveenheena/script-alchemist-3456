import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button
} from "@material-tailwind/react";
import axios from "axios";
import QuizCard from "@/widgets/cards/QuizCard";

export function Home() {
  const [quizzes, setQuizzes] = useState([])
  useEffect(()=> {
   axios.get('http://localhost:8000/quizzes').then(res=>setQuizzes(res.data.quiz)).catch(err=>console.log(err))
  },[]);

  return (
    <div className="mt-12">
      <div className="relative mt-8 h-32 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <Typography variant="h5" color="blue-gray" className="mb-1">
                Username
              </Typography>
              <Typography
                variant="small"
                className="font-normal text-blue-gray-600"
              >
                User
              </Typography>
            </div>
          </div>
        </CardBody>
      </Card>

    <div className="m-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
      {quizzes.map((item,index)=><QuizCard key={index} obj={item}/>)}
     
      </div>
    </div>
  );
}

export default Home;
