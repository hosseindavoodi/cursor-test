"use client";

import Image from "next/image";
import { LoginForm } from "./_components/login.form";
import { ForgetPasswordForm } from "./_components/forget.password.form";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);
  return (
    <>
      <div className="flex w-full">
        <div className="flex items-center justify-center w-1/2">
          <AnimatePresence mode="wait">
            {isLoginView ? (
              <motion.div
                className="w-[480px]"
                key="login"
                initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
                animate={{ opacity: 1, x: 0 }} // Slide in to position
                exit={{ opacity: 0, x: 100 }} // Slide out to the right
                transition={{ duration: 0.3 }} // Animation duration
              >
                <LoginForm setIsLoginView={setIsLoginView} />
              </motion.div>
            ) : (
              <motion.div
                className="w-[480px]"
                key="forget-password"
                initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
                animate={{ opacity: 1, x: 0 }} // Slide in to position
                exit={{ opacity: 0, x: -100 }} // Slide out to the left
                transition={{ duration: 0.3 }} // Animation duration
              >
                <ForgetPasswordForm setIsLoginView={setIsLoginView} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative w-1/2 h-screen">
          <Image
            src={"/login.png"}
            fill={true}
            objectFit="cover"
            alt="login"
          />
        </div>
      </div>
    </>
  );
}

export default AuthPage;
