import {NextResponse} from "next/server";
import {server} from "config";

export async function POST(request) {
  const body = await request.json();
  const res = await fetch(`${server}/data/users.json`);
  const users = await res.json();
  const user = users.find(
    (u) => u.name === body.username && u.password === body.password
  );
  if (!user)
    return NextResponse.json(
      {error: "Invalid username or password"},
      {status: 400}
    );
  return NextResponse.json({user}, {status: 200});
}
