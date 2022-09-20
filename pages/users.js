import UserRanking from "../components/UserRanking";

export default function UsersPage() {
  return (
    <>
      <h1 className="header">Top users</h1>
      <UserRanking top={10} />
    </>
  );
}