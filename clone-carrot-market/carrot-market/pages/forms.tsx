export default function Forms() {
  return (
    <form>
      <input type="text" placeholder="Username" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="submit" value="Create Account" />
    </form>
  );
}
