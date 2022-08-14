import type { NextPage } from "next";
import { FieldErrors, useForm } from "react-hook-form";
import Input from "../components/input";
import { useRouter } from "next/router";

const Enter: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onValid = async (data) => {
    // console.log(data);
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
    }
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log("invalid");
  };
  return (
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
        type="email"
        label="Email"
        required
      />
      {errors.email?.message}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Enter;
