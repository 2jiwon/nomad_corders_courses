import type { NextPage } from "next";
import { FieldErrors, useForm } from "react-hook-form";
import Input from "../components/input";
import { useRouter } from "next/router";
import { useState } from "react";

interface SelectForm {
  signin?: string;
  signup?: string;
}

const Enter: NextPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // sing-in인지 sign-up인지 선택
  const [method, setMethod] = useState<"signin" | "signup">("signin");
  const onSingUp = () => {
    reset();
    setMethod("signup");
  };

  const router = useRouter();
  const onValid = async (data) => {
    console.log(data);
    const result = await (
      await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
    console.log(result);
    if (result.ok) {
      router.push("/");
    } else if (!result.user) {
      alert("Your account doesn't exist. Please sign up first.");
      reset();
      setMethod("signup");
    } else if (!result.password) {
      alert("Wrong password. Please try again.");
      router.push("/enter");
    }
  };

  const onInvalid = (errors: FieldErrors) => {
    console.log("invalid");
  };
  return (
    <>
      {method === "signin" ? (
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          <Input
            register={register("username", {
              required: "Username is required",
              minLength: {
                message: "The username should be longer than 5 chars.",
                value: 5,
              },
            })}
            name="username"
            type="text"
            label="Username"
            required
          />
          {errors.username?.message}
          <Input
            register={register("password", {
              required: "Password is required",
            })}
            name="password"
            type="password"
            label="Password"
            required
          />
          {errors.password?.message}
          <br />
          <button type="submit">Sign In</button>
          <button onClick={onSingUp}>Go to Sign Up</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          <Input
            register={register("username", {
              required: "Username is required",
              minLength: {
                message: "The username should be longer than 5 chars.",
                value: 5,
              },
            })}
            name="username"
            type="text"
            label="Username"
            required
          />
          {errors.username?.message}
          <Input
            register={register("email", {
              required: "Email is required",
            })}
            name="email"
            type="text"
            label="Email"
            required
          />
          {errors.email?.message}
          <Input
            register={register("password", {
              required: "Password is required",
            })}
            name="password"
            type="password"
            label="Password"
            required
          />
          {errors.password?.message}
          <br />
          <button type="submit">Sign Up</button>
        </form>
      )}
    </>
  );
};

export default Enter;
