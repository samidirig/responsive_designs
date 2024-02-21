"use client";

// @ --> it means ./src/

import { useEffect, useState } from "react";

import * as Yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useBoolean } from "./use-boolean"; // it is a hook function that returns a boolean value

import { IconButton, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import backgroundVideo1 from "video1Src";
import backgroundVideo2 from "video2Src";
import backgroundVideo3 from "video3Src";

export default function LoginView() {
  const passwordShow = useBoolean();
  const [videoSrc, setVideoSrc] = useState("");


  // change background video when every window reloaded
  useEffect(() => {
    const videos = [backgroundVideo1, backgroundVideo2, backgroundVideo3]; // or necessary a video sources array
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];
    setVideoSrc(randomVideo);
  }, []);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("That is not an email"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password should be of minimum 6 characters length"),
  });

  const loginValues = {
    email: "",
    password: "",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    loginValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      console.log("DATA", data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleSignUpClick = () => {
    window.location.href = "/register"; // Change the URL directly
  };

  const renderLeft = (
    <div className="flex flex-col items-center justify-center gap-2 h-1/3 w-full lg:h-full lg: lg:w-1/3 bg-black bg-opacity-30 p-4 z-10">
      <p className="text-5xl text-white font-semibold leading-tight">
        New Here?
      </p>
      <p className="text-xl text-white text-center font-sans leading-tight p-5">
        Sign up and collect your memories now!
      </p>
      <button
        type="button"
        onClick={handleSignUpClick}
        className="text-xl text-center font-sans leading-tight pb-1 w-1/4 lg:w-1/2 h-12 bg-white rounded-full shadow-xl shadow-black/20 transition duration-150 ease-in-out 
        hover:bg-white hover:shadow-black/30 
          focus:outline-none
          active:bg-success-700 active:translate-y-0.5 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]"
      >
        Sign Up
      </button>
    </div>
  );

  const renderRight = (
    <div className="flex flex-col items-center justify-start pt-20 lg:justify-center lg:pt-0 auto gap-5 h-2/3 w-full lg:h-full lg:w-2/3 bg-transparent z-10">
      <div className="bg-white bg-opacity-30 p-14 rounded-2xl flex flex-col items-center justify-center gap-10 backdrop-filter backdrop-blur-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <p className="text-3xl font-semibold leading-tight">
          Login to Your Account
        </p>
        
        <div className="h-px bg-gray-700 w-3/4" />
        <FormProvider methods={methods} onSubmit={onSubmit}>
          <Stack
            spacing={2.5}
            alignItems="flex-end"
            sx={{ width: "350px", alignItems: "center" }}
          >
            <TextField
              fullWidth
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    // borderRadius: "20px",
                    borderColor: "#fff",
                    color: "#fff",
                    // boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.2)",
                  },
                },
              }}
              label="Email Adress"
              type="text"
              {...methods.register("email")}
              error={Boolean(methods.formState.errors.email)}
              helperText={methods.formState.errors.email?.message}
            />
            <TextField
              fullWidth
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    // borderRadius: "20px",
                    borderColor: "#fff",
                    color: "#fff",
                    // boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.2)",
                  },
                },
              }}
              label="Password"
              type="password"
              {...methods.register("password")}
              error={Boolean(methods.formState.errors.password)}
              helperText={methods.formState.errors.password?.message}
              InputProps={{
                endAdornment: (
                  <IconButton
                    edge="end"
                    onClick={passwordShow.onToggle}
                    onMouseDown={(e) => e.preventDefault()}
                    tabIndex={-1}
                  >
                    {passwordShow.value ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />

            <button
              type="button"
              //href="/"
              onClick={() => {
                window.location.href = "/";
              }}
              className="text-xl text-center font-sans leading-tight pb-1 w-3/4 h-10 
              bg-gradient-to-r from-green-200 to-cyan-100 rounded-full shadow-xl shadow-black/20 transition duration-150 ease-in-out 
            hover:bg-white hover:shadow-black/30 
              focus:outline-none
              active:bg-success-700 active:translate-y-0.5 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]"
            >
              Login
            </button>
          </Stack>
        </FormProvider>

        <a
          href="/reset-password"
          className="text-lg text-center font-sans leading-tight p-3 hover:underline"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row h-full">
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={videoSrc}
        ></video>
      </div>
      {renderLeft}
      {renderRight}
    </div>
  );
}
