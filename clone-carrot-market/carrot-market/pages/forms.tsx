import { useForm } from "react-hook-form";

export default function Forms() {
  const { register } = useForm();
  console.log(register("banana"));
  return (
    <form>
      <input
        {...register("username")}
        type="text"
        placeholder="Username"
        required
      />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="submit" value="Create Account" />
    </form>
  );
}
