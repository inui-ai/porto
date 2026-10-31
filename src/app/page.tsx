import type { Metadata } from "next";
import { LoremSite } from "@/components/sites/lorem/LoremSite";

export const metadata: Metadata = {
  title: "Blokke - Design Agency Framer Template",
  description:
    "Blokke® is a design agency that doesn't follow trends, we build things that outlast them. Brand, digital, print, and motion design.",
};

export default function Home() {
  return <LoremSite />;
}
