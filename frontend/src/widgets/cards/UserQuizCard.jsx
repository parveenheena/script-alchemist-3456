import React from 'react'
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Avatar,
    Typography,
    Tooltip,
    Button,
  } from "@material-tailwind/react";

  
export const UserQuizCard = () => {
  return (
    <Card color="transparent" shadow={false}>
    <CardHeader
      floated={false}
      color="gray"
      className="mx-0 mt-0 mb-4 h-64 xl:h-40"
    >
      {/* <CircularProgress size="lg" determinate value={7}>
        <Typography>{7}%</Typography>
      </CircularProgress> */}
    </CardHeader>
    <CardBody className="py-0 px-1">
      <Typography
        variant="small"
        className="font-normal text-blue-gray-500"
      >
        score
      </Typography>
      <Typography
        variant="h5"
        color="blue-gray"
        className="mt-1 mb-2"
      >
        JavaScript
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
        <Button variant="outlined" size="sm">
          view project
        </Button>
      {/* </Link> */}
    </CardFooter>
  </Card>
  )
}
