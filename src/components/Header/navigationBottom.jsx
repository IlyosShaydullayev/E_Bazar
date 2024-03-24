import { useContext } from "react";
import { Language } from "@/Localization/Navigat";
import { Heart, Home, TextSearch, UserRound } from "lucide-react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { Context } from "../Context/Context";

function NavigationBottom() {

    const {lang} = useContext(Context)
  return (
    <div className="fixed inline-flex md:hidden bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex items-center w-full justify-between h-full max-w-lg mx-auto font-medium">
            <Button variant='secondary' className=" bg-transparent checked:bg-transparent px-5 hover:bg-gray-50 h-[60px] dark:hover:bg-gray-800 group">
                <Link className="inline-flex flex-col items-center justify-center" to="/">
                    <Home className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"/>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{Language[lang].NavigatButton.Home}</span>
                </Link>
            </Button>
            <Button  className=" bg-transparent checked:bg-transparent px-5 hover:bg-gray-50 h-[60px] dark:hover:bg-gray-800 group">
                <Link className="inline-flex flex-col items-center justify-center" to="/">
                    <TextSearch className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"/>
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{Language[lang].NavigatButton.Menu}</span>
                </Link>
            </Button>
            <Button  className=" bg-transparent checked:bg-transparent px-5 hover:bg-gray-50 h-[60px] dark:hover:bg-gray-800 group">
                <Link className="inline-flex flex-col items-center justify-center" to='/'>
                    <Heart fill="currentColor" className="w-5 h-5 mb-2  text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"/>  
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{Language[lang].NavigatButton.Liked}</span>
                </Link>
            </Button>
            <Button  className=" bg-transparent checked:bg-transparent px-5 hover:bg-gray-50 h-[60px] dark:hover:bg-gray-800 group">
                <Link className="inline-flex flex-col items-center justify-center" to='/profile'>
                    <UserRound className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"/>  
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{Language[lang].NavigatButton.Profile}</span>
                </Link>
            </Button>
        </div>
    </div>

  )
}

export default NavigationBottom