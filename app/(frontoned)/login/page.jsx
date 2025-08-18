import React from "react";

import Signin from "@/components/auth/Signin";
import InnerBanner from "@/components/InnerBanner/InnerBanner";

const SignIn = async () => {
  return (
    <>
      {/* source:https://codepen.io/owaiswiz/pen/jOPvEPB */}
      <div className="">
        <InnerBanner pageName={"Login"} />
        <div className="min-h-[500px]   text-gray-900 flex justify-center ">
          <div className="max-w-screen-xl m-0 sm:m-10 shadow sm:rounded-lg flex justify-center flex-1">
            <div className="flex-1 bg-indigo-100 text-center hidden lg:flex " style={{
              backgroundImage:
                'url("/LOGIN 9.jpg")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover', // or 'contain' based on your needs
              backgroundPosition: 'center' // Adjust as needed
            }}>
            </div>
            <Signin />
          </div>
        </div>
      </div>

    </>
  );
};

export default SignIn;
