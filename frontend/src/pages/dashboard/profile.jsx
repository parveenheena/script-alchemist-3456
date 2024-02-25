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
  Textarea,
} from "@material-tailwind/react";

import animated from "../../assets/animationProfile.json"
// import { Link } from "react-router-dom";
import { ProfileInfoCard } from "@/widgets/cards";
import { PencilIcon } from "@heroicons/react/24/solid";
// import { conversationsData, projectsData } from "@/data";
import { UserQuizCard } from "@/widgets/cards/UserQuizCard";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import axios from "axios";


export function Profile() {

  let userData = JSON.parse(localStorage.getItem("userData"));
  let userInfo = userData.userDetails;
  // console.log(userData.token); 

  const [open, setOpen] = useState(false);
  const [bio, setBio] = useState("👋 Hi there,");
  const [quizData, setQuizData] = useState([]);
  const handleOpen = () => setOpen((cur) => !cur);
  const updateBio = async () => {
    handleOpen();
    axios.patch()
  }
  useEffect(()=> {
     axios.get(`http://localhost:8000/Users/${userInfo._id}`,{
      headers:{
        Authorization : `Bearer ${userData.token}`
      }
     }).then(res=>setQuizData(res.data.quizInfo)).catch(err=>console.log(err))
  },[])
  return (
    <>
      <div className="relative mt-8 h-32 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/bruce-mars.jpeg"
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {userInfo.username}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  {userInfo.fullName}
                </Typography>
              </div>
            </div>

          </div>
          <div className="gird-cols-2 mb-12 grid items-center gap-12 px-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {/* profileInfo */}
            <ProfileInfoCard
              title="Profile Information"
              description={bio}
              details={{
                "Full name": `${userInfo.fullName}`,
                mobile: `${userInfo.mobileNo}`,
                email: `${userInfo.email}`,
                location: `${userInfo.country}`,
                social: (
                  <div className="flex items-center gap-4">
                    <i className="fa-brands fa-facebook text-blue-700" />
                    <i className="fa-brands fa-twitter text-blue-400" />
                    <i className="fa-brands fa-instagram text-purple-500" />
                  </div>
                ),
              }}
              action={
                <Tooltip content="Edit Profile">
                  <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" onClick={handleOpen} />
                </Tooltip>
              }
            />
            <Dialog
              size="xs"
              open={open}
              handler={handleOpen}
              className="bg-transparent shadow-none"
            >
              <Card className="mx-auto w-full max-w-[24rem]">
                <CardBody className="flex flex-col gap-4">
                  <Typography variant="h4" color="blue-gray" className="flex gap-2 items-center">
                    Bio
                    <PencilIcon className="h-4 w-4 text-blue-gray-500" />
                  </Typography>
                  <Textarea label="Write something about yourself..." size="lg" onChange={(e) => { setBio(e.target.value) }} />
                </CardBody>
                <CardFooter className="pt-0">
                  <Button variant="gradient" onClick={updateBio} fullWidth>
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Dialog>
            <Lottie animationData={animated} />

          </div>
          <div className="px-8 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Attempted Quiz
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
             Results
            </Typography>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              {quizData.map((item, index) => <UserQuizCard key={index} obj={item} />)}

            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
