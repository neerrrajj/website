"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "./db";
import { redirect } from "next/navigation";

export async function addProject(formData: FormData) {
  const { isAuthenticated, getUser } = getKindeServerSession();

  const name = formData.get("project-name") as string;
  const description = formData.get("project-description") as string;
  const labels = formData.get("project-labels") as string;
  const liveUrl = formData.get("project-live-url") as string;
  const codeUrl = formData.get("project-code-url") as string;

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const user = await getUser();
  if (!user || user.id != process.env.ALLOWED_USER_ID) {
    redirect("/gotyou");
  }

  await prisma.project.create({
    data: {
      name,
      description,
      labels,
      liveUrl,
      codeUrl,
    },
  });
}
