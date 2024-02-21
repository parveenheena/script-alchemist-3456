
import { Typography } from "@material-tailwind/react";


export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography variant="small" className="font-normal text-inherit">
        &copy; 2024 Coding Quiz App. All rights reserved.
        </Typography>
        
      </div>
    </footer>
  );
}



export default Footer;
