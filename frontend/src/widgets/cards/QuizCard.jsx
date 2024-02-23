import React, { useState } from 'react'
import {
    Typography,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";

function QuizCard({obj}) {
  const [logo,setLogo] = useState(`https://skillicons.dev/icons?i=${obj.language.toLowerCase()}&theme=dark`);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const startQuiz = (language)=> {
    handleOpen();
    console.log(language)
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
    <Card className="w-64 max-w-[26rem] shadow-lg">

    <CardHeader floated={false}
      shadow={false}
      color="transparent"
      className="m-0 flex items-center justify-between p-4">
      <img
        src= {logo}
        alt="ui/ux review check"
        className="w-24 m-auto"


      />

   
    </CardHeader>
    <CardBody>
      <div className="mb-3 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray" className="font-medium">
          {obj.language}
        </Typography>
        <Typography
          color="blue-gray"
          className="flex items-center gap-1.5 font-normal"
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="-mt-0.5 h-5 w-5 text-black-700"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>

          {obj.duration}
        </Typography>
      </div>
      <Typography color="gray">
       {obj.description}
      </Typography>
      <Typography color="gray" variant="gray" className="mt-3" style={{ fontSize: "14px" }}>
      Total Questions : {obj.number_of_questions}
      </Typography>
      
    </CardBody>
    <CardFooter className="pt-2">
      <Button size="lg" onClick={handleOpen} fullWidth={true}>
        Attempt Quiz
      </Button>

    </CardFooter>
  </Card>
  </>
  )
}

export default QuizCard