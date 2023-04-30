import { NextResponse } from "next/server";
import { supabase } from "../supabaseClient";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  if (!searchParams.keys().next().done) {
    return new Response("Return 404 error when calling parameters", {
      status: 404,
    });
  }

  let { data: users, error } = await supabase
    .from("users")
    .select(`vscode_project, vscode_file`);

  if (error) {
    console.error(error);
    return NextResponse.error();
  }

  return NextResponse.json({ project: users });
}

export async function POST(request: Request) {
  const res = await request.json();
  const { error } = await supabase
    .from("users")
    .update({ vscode_project: res.project, vscode_file: res.file })
    .eq("id", 1);

  if (error) {
    console.error(error);
    return NextResponse.error();
  }

  console.log(`POST request succeeded.`);

  return NextResponse.json({ state: "success" });
}
