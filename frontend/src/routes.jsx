import {
  HomeIcon,
  UserCircleIcon,

} from "@heroicons/react/24/solid";
import { Home, Profile,  } from "@/pages/dashboard";
import Quiz from "./pages/dashboard/Quiz";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      }
      // ,
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: "quiz",
      //   path: "/quiz",
      //   element: <Quiz />,
      // }
    ],
  }
];

export default routes;
