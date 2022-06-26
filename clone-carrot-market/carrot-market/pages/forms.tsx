import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onValid = (data: LoginForm) => {
    console.log("I'm valid");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required.",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("password", {
          required: "Password is requried.",
        })}
        type="password"
        placeholder="Password"
      />
      <input
        {...register("email", {
          required: "Email is required.",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") ? "" : "Gmail is not allowed.",
          },
        })}
        type="email"
        placeholder="Email"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
