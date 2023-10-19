"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  HomeIcon,
  LayoutPanelLeft,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
  const { status, data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };

  return (
    <Card className="flex items-center justify-between rounded-none p-8">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-4 flex flex-col items-center gap-2">
            {status === "authenticated" && data?.user && (
              <div className="w-full">
                <div className="mb-4 flex w-full  items-center justify-start gap-2">
                  <div className="flex items-center">
                    <Avatar>
                      <div className="flex flex-col items-center justify-start">
                        <AvatarFallback>
                          {data.user.name?.[0].toUpperCase()}
                        </AvatarFallback>
                      </div>
                      {data.user.image && (
                        <AvatarImage
                          className="w-10 rounded-full  "
                          src={data.user.image}
                        />
                      )}
                    </Avatar>
                  </div>

                  <p className="text-sm text-slate-200">{data.user.name}</p>
                </div>

                <div className="my-4 h-[1px] w-full bg-zinc-900" />
              </div>
            )}

            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full justify-start gap-4"
              >
                <LogInIcon size={16} />
                Fazer Login
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className="w-full justify-start gap-4"
              >
                <LogOutIcon size={16} />
                Sair
              </Button>
            )}

            <Button variant="outline" className="w-full justify-start gap-4">
              <HomeIcon size={16} />
              Início
            </Button>

            <Button variant="outline" className="w-full justify-start gap-4">
              <PercentIcon size={16} />
              Ofertas
            </Button>

            <Button variant="outline" className="w-full justify-start gap-4">
              <LayoutPanelLeft size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
