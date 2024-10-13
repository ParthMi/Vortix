import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Coconut Shell Active Carbon",
        path: "/products/Coconut-Shell-Active-Carbon",
        newTab: false,
      },
      {
        id: 42,
        title: "Coal Activated Carbon",
        path: "/products/Coal-Activated-Carbon",
        newTab: false,
      },
      {
        id: 43,
        title: "Wood Activated Carbon",
        path: "/products/Wood-Activated-Carbon",
        newTab: false,
      },
      {
        id: 44,
        title: "Powdered Activated Carbon",
        path: "/products/Powdered-Activated-Carbon",
        newTab: false,
      },
      {
        id: 45,
        title: "Pellets Activated Carbon",
        path: "/products/Pellets-Activated-Carbon",
        newTab: false,
      },
    ],
  },
  {
    id: 33,
    title: "Applications",
    path: "/applications",
    newTab: false,
  },
  {
    id: 33,
    title: "Blogs",
    path: "/blog",
    newTab: false,
  },
];
export default menuData;
