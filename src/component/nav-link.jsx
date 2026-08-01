import { NavLink } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";

export default function NavlinkMobile() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Fashion", path: "fashion" },
    { name: "Sneakers", path: "sneakers" },
    { name: "Tech", path: "tech" },
    { name: "Beauty", path: "beauty" },
  ];

  return (
    <div className="navlinkMobile">
      {links.map((link) => (
        <Dialog.Close asChild key={link.path}>
          <NavLink
            to={link.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {link.name}
          </NavLink>
        </Dialog.Close>
      ))}
    </div>
  );
}
