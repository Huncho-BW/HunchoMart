import { NavLink } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight } from "lucide-react";
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
        <div className="">
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "nav-text active flex mb-[20px] items-center justify-between mobileNav-text"
                : "nav-text flex mb-[20px] items-center justify-between mobileNav-text "
            }
          >
            <Dialog.Close asChild key={link.path}>
              <h1 className="">{link.name}</h1>
            </Dialog.Close>

            <div>
              {" "}
              <ArrowRight />
            </div>
          </NavLink>

          <span className="divider mt-[20px] mb-[4px]"></span>
        </div>
      ))}
    </div>
  );
}
