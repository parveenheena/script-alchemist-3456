import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import axios from "axios";
import {QuizCard} from "@/widgets/cards/QuizCard";
import Lottie from "lottie-react";
import animated from "../../assets/animationDashboard.json"

export function Home() {
  const [quizzes, setQuizzes] = useState([])
  useEffect(()=> {
   axios.get('http://localhost:8000/quizzes').then(res=>setQuizzes(res.data.quiz)).catch(err=>console.log(err))
  },[]);

  return (
    <div className="mt-12">
    <div className="relative my-12 h-32 flex w-full overflow-hidden rounded-xl bg-black">

    <div className="relative h-32 w-full overflow-hidden rounded-xl flex items-center justify-end text-white text-center font-bold">
      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl">BYTE</span>
    </div>
  
     <div className="relative h-32 w-full overflow-hidden rounded-xl ">
       <Lottie animationData={animated} style={{ width: '100%', height: '100%'}}/>
     </div>
  

     <div className="relative h-32 w-full overflow-hidden rounded-xl flex items-center justify-start text-white text-center font-bold">
       <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl">BLITZ</span>
      </div>
    </div>

    <div className="m-2 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
      {quizzes.map((item,index)=><QuizCard key={index} obj={item}/>)}
     
      </div>
    </div>
  );
}

export default Home;
