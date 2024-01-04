export default function HomePage() {
  return (
    <>
      <h1>Welcome to home 🏠 page</h1>
      <p>
        <span>Token:</span> {sessionStorage.getItem("auth_token")}
      </p>
    </>
  );
}
