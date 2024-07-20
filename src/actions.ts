"use server";

export async function addProject(formData: FormData) {
  const name = formData.get("project-name");
  const description = formData.get("project-description");
  console.log(name);
  console.log(description);
}
