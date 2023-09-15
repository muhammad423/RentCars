import React from "react";
import { useAuth, UserButton } from "@clerk/nextjs";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import { CustomBtn } from ".";

const AuthLogin = () => {
  const { userId } = useAuth();
  return (
    <div>
      {!userId ? (
        <div className="flex justify-center items-center gap-5">
          <Link href="/sign-in">
            <CustomBtn
              customCls="px-3 py-2 bg-[#3E977C] hover:bg-[#2B7257] text-white text-base font-medium rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
              title="Sign In"
              BsArrow={<BsArrowRightShort />}
            />
          </Link>
          <Link href="/sign-up">
            <CustomBtn
              customCls="px-3 py-2 bg-[#3E977C] hover:bg-[#2B7257] text-white text-base font-medium rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
              title="Sign Up"
              BsArrow={<BsArrowRightShort />}
            />
          </Link>
        </div>
      ) : (
        <UserButton afterSignOutUrl="/" />
      )}
    </div>
  );
};

export default AuthLogin;
