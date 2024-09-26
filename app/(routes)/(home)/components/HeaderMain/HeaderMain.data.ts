import { Folder, KeyRound } from "lucide-react";
import { DataHeaderMainItemsProps } from "./HeaderMain.types";

export const dataHeaderMain: DataHeaderMainItemsProps[] = [
  {
    icon: KeyRound,
    text: "Elemento",
    typeElement: "password",
  },
  {
    icon: Folder,
    text: "Carpeta",
    typeElement: "folder",
  },
];
