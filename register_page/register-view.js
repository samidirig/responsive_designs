"use client";

// @ it means --> ./src/

import * as Yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useBoolean } from "./use-boolean";

import { IconButton, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function LoginView() {
  const passwordShow = useBoolean();

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
    username: "",
    name: "",
    surname: "",
    password: "",
    phone: "",
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

  return (
    <div className="flex flex-col items-center justify-center lg:pt-0 auto gap-5 w-full h-full bg-white">
      <div className="w-1/4 h-1/4 flex flex-row items-center justify-center">
        <img
          src="https://media.istockphoto.com/id/1457128336/vector/man-and-woman-are-sitting-embracing.jpg?s=612x612&w=0&k=20&c=v5D1Ln51f3MYN6kLCwGwfZnljO_vQw5J70vlUS0Vm-Y="
          alt="register couple image"
          className="w-auto h-auto md:h-full"
        />
      </div>

      <p className="text-3xl font-sans leading-tight">Create a new Account</p>

      <div className="h-px bg-gray-300 w-3/4" />

      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack
          spacing={2.5}
          alignItems="flex-end"
          sx={{ width: "350px", alignItems: "center" }}
        >
          <TextField
            fullWidth
            size="small"
            label="Email Adress"
            type="text"
            {...methods.register("email")}
            error={Boolean(methods.formState.errors.email)}
            helperText={methods.formState.errors.email?.message}
          />
          <TextField
            fullWidth
            size="small"
            label="User Name"
            type="text"
            {...methods.register("username")}
            error={Boolean(methods.formState.errors.email)}
            helperText={methods.formState.errors.email?.message}
          />
          <TextField
            fullWidth
            size="small"
            label="Name"
            type="text"
            {...methods.register("name")}
            error={Boolean(methods.formState.errors.email)}
            helperText={methods.formState.errors.email?.message}
          />
          <TextField
            fullWidth
            size="small"
            label="Surname"
            type="text"
            {...methods.register("surname")}
            error={Boolean(methods.formState.errors.email)}
            helperText={methods.formState.errors.email?.message}
          />
          <TextField
            fullWidth
            size="small"
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
            type="submit"
            onClick={() => {
              window.location.href = "/login";
            }}
            className="text-xl text-center font-sans leading-tight pb-1 w-3/4 h-10 
              bg-gradient-to-r from-green-200 to-cyan-100 rounded-full shadow-xl shadow-black/20 transition duration-150 ease-in-out 
            hover:bg-white hover:shadow-black/30 
              focus:outline-none
              active:bg-success-700 active:translate-y-0.5 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]"
          >
            Sign Up
          </button>
        </Stack>
      </FormProvider>

      <div className="flex flex-row gap-2 p-5">
        <p className="text-lg text-center font-sans leading-tight">
          Already have an account?{" "}
        </p>
        <a
          href="/login"
          className="text-green-700 text-lg text-center font-sans leading-tight hover:underline"
        >
          Login to Your Account
        </a>
      </div>
    </div>
  );
}
