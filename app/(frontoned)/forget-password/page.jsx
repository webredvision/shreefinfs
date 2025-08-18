import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/next-auth";
import { redirect } from "next/navigation";
import ForgetPassword from "@/components/auth/ForgetPassword";
import InnerBanner from "@/components/InnerBanner/InnerBanner";

const SignIn = async () => {
  return (
    <>
      {/* source:https://codepen.io/owaiswiz/pen/jOPvEPB */}
           <InnerBanner pageName={"Forget Password"}/>
      <div className="min-h-[600px]  text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10  shadow sm:rounded-lg flex justify-center flex-1">
          <ForgetPassword />
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex " style={{
                backgroundImage:
                  'url("/forgot-password.jpg")',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover', // or 'contain' based on your needs
                  backgroundPosition: 'center' // Adjust as needed
              }}>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default SignIn;
