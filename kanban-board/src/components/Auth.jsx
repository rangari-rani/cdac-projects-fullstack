import React, { useState } from "react";

import { Button } from "@mui/material";


import Signup from "./Signup";
import Login from "./Login";
import "./Auth.css";

const Auth = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="loginContainer">
      <div className="box h-[36rem] w-[28rem]">
        <div className="minContainer login">
          <div className="loginBox w-full px-10 space-y-2">
            {active ? <Signup /> : <Login />}
            <div>
              <span className="text-white">Already have account?</span>
              <Button
                className="text-white"
                variant="secondary"
                onClick={() => setActive(!active)}
              >
                {active ? "signin" : "signup"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
