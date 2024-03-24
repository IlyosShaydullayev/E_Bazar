import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { Language } from "@/Localization/product";
import { Context } from "../Context/Context";

function DeleteProductModal() {

  const {lang} = useContext(Context)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="rounded-full p-3">
          <Trash2 className="w-4 h-4 text-red-500" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="flex justify-center py-3">
            <p className="text-[20px]">{Language[lang].product.Uchirish}</p>
        </div>
        <DialogFooter className="flex" style={{ justifyContent: "space-around"}}>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              {Language[lang].product.Bekorqilish}
            </Button>
          </DialogClose>
          <Button type="button" className="bg-red-500 hover:bg-red-600">{Language[lang].product.Delete}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteProductModal;
