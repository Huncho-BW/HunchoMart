import React from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import LeftDashbord from "./LeftDashbord";
import * as Dialog from "@radix-ui/react-dialog";
export default function UserDashbord() {
  return (
    <>
      <div className="dashboard-mobile-header">
        <Dialog.Root>
          <Dialog.Trigger>
            <Menu size={24} />
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />

            <Dialog.Content className="mobile-drawer">
              <LeftDashbord />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <h1>My Account</h1>
      </div>

      <div className="user-dashboard">
        <section className="dashboard-sidebar">
          <LeftDashbord />
        </section>

        <section>
          <Outlet />
        </section>
      </div>
    </>
  );
}
