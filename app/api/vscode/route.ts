import { NextResponse } from "next/server";
import { supabase } from "../supabaseClient";

export async function GET() {
  let { data: users, error } = await supabase
    .from("users")
    .select(`vscode_project, vscode_file`);

  if (error) {
    console.error(error);
    NextResponse.error();
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
    NextResponse.error();
  }

  console.log(`POST request succeeded.`);

  return NextResponse.json({ state: "success" });
}
