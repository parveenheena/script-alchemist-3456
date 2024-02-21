import React from "react";
import {
  Typography,
  Card,
  CardBody
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
    </div>
  );
}

export default Home;
