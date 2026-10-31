import type { Metadata } from "next";
import { LoremSite } from "@/components/sites/lorem/LoremSite";

export const metadata: Metadata = {
  title: "portofolio 1",
  description: "loremipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export default function Home() {
  return <LoremSite />;
}
