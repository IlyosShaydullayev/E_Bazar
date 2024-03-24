import React,{useContext} from "react";
import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Context } from "../Context/Context";
import { Language } from "@/Localization/Localization";

function UserPopover() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    setOpen(e);
  };

  const {lang} = useContext(Context)
  return (
    <div>
      <DropdownMenu onOpenChange={handleOpen}>
        <DropdownMenuTrigger asChild>
          <div className="bg-blue-500 flex items-center justify-center rounded-full w-[30px] h-[30px]">
            <User className="text-white" />
          </div>
        </DropdownMenuTrigger>
        {open && (
          <div className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"></div>
        )}
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link to='/profile'>{Language[lang].Profile.mypro}</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to={"/create-product"} className="text-blue-500">{Language[lang].Profile.mySotuv}</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserPopover;

/* 

*/
