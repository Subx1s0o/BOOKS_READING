import Register from "@/components/Register";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books Sign-Up",
  description:
    "Start your journey to reading success! Sign up now to get personalized recommendations and a convenient tool to plan your reading. Stay ahead of the game!",
};

export default async function RegisterPage() {
  return <Register />;
}
