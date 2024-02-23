import React from "react";
import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button
} from "@material-tailwind/react";

export function Home() {
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

    <div className="m-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
      <Card className="w-64 max-w-[26rem] shadow-lg">

        <CardHeader floated={false}
          shadow={false}
          color="transparent"
          className="m-0 flex items-center justify-between p-4">
          <img
            src= "https://skillicons.dev/icons?i=git&theme=dark"
            alt="ui/ux review check"
            className="w-24 m-auto"


          />
    
       
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              Javascript
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

              15 mins
            </Typography>
          </div>
          <Typography color="gray">
            A JavaScript quiz assesses understanding of JavaScript concepts through multiple-choice questions.
          </Typography>
          <Typography color="gray" variant="gray" className="mt-3" style={{ fontSize: "14px" }}>
          Total Questions : 20
          </Typography>
          
        </CardBody>
        <CardFooter className="pt-2">
          <Button size="lg" fullWidth={true}>

            Attempt Quiz
          </Button>

        </CardFooter>
      </Card>
      </div>
    </div>
  );
}

export default Home;
