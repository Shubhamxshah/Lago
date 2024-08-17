"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Wallet,
  NotebookText,
  Keyboard,
  Music,
  ImageIcon,
  Calendar,
  Settings,
  Mail,
  MessageCircle,
  CreditCard,
} from "lucide-react";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <Image src="/logo.svg" alt="logo" width={75} height={75} />
        </Link>

        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="flex space-x-4 text-sm">
            {/* First Core Features Section */}
            <div className="flex flex-col space-y-2">
              <div className="text-slate-400 text-sm py-2">Core features</div>
              <div className="flex items-center gap-2 justify-center">
                <Activity className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Keyboard className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <NotebookText className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Wallet className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Music className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
            </div>

            {/* Second Core Features Section */}
            <div className="flex flex-col space-y-2">
              <div className="text-slate-400 text-sm py-2">
                Premium features
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Activity className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Keyboard className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <NotebookText className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Wallet className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Music className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
            </div>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Developers">
          {/* Second Core Features Section */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2 justify-center">
              <Activity className="h-4 w-4 text-slate-200" />
              <span className="text-sm py-2">Billing</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Keyboard className="h-4 w-4 text-slate-200" />
              <span className="text-sm py-2">Billing</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <NotebookText className="h-4 w-4 text-slate-200" />
              <span className="text-sm py-2">Billing</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Wallet className="h-4 w-4 text-slate-200" />
              <span className="text-sm py-2">Billing</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Music className="h-4 w-4 text-slate-200" />
              <span className="text-sm py-2">Billing</span>
            </div>
          </div>
        </MenuItem>

        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Pricing"
          ></MenuItem>
        </Link>

        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Customers"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="flex space-x-4 text-sm">
            {/* First Core Features Section */}
            <div className="flex flex-col space-y-2">
              <div className="text-slate-400 text-sm py-2">Core features</div>
              <div className="flex items-center gap-2 justify-center">
                <Activity className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Keyboard className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <NotebookText className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Wallet className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Music className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
            </div>

            {/* Second Core Features Section */}
            <div className="flex flex-col space-y-2">
              <div className="text-slate-400 text-sm py-2">
                Premium features
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Activity className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Keyboard className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <NotebookText className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Wallet className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Music className="h-4 w-4 text-slate-200" />
                <span className="text-sm py-2">Billing</span>
              </div>
            </div>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Resources">
          {/* Second Core Features Section */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center gap-2 justify-center">
              <Activity className="h-4 w-4 text-slate-200" />
              <span className="text-sm py-2">Billing</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Keyboard className="h-4 w-4 text-slate-200" />
              <span className="text-sm py-2">Billing</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <NotebookText className="h-4 w-4 text-slate-200" />
              <span className="text-sm py-2">Billing</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Wallet className="h-4 w-4 text-slate-200" />
              <span className="text-sm py-2">Billing</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Music className="h-4 w-4 text-slate-200" />
              <span className="text-sm py-2">Billing</span>
            </div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
