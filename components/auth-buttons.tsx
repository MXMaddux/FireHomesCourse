"use client";

import { useAuth } from "@/context/auth";
import Link from "next/link";

const AuthButtons = () => {
  const auth = useAuth();

  return (
    <div>
      {!!auth?.currentUser && (
        <>
          <div>{auth.currentUser.email}</div>
          <div
            onClick={() => {
              auth.logout();
            }}
          >
            LogOut
          </div>
        </>
      )}
      {!auth?.currentUser && (
        <div className="flex gap-2 items-center">
          <Link
            href="/login"
            className="uppercase tracking-widest hover:underline"
          >
            LogIn
          </Link>
          <div className="h-8 w-[1px] bg-white/50" />
          <Link
            href="/register"
            className="uppercase tracking-widest hover:underline"
          >
            SignUp
          </Link>
        </div>
      )}
    </div>
  );
};
export default AuthButtons;
