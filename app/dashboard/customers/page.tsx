import { Metadata } from "next";
import { globalMetadata } from "@/app/layout";

export default function page() {
  return <p> Customers page</p>;
}

export const metadata: Metadata = {
  ...globalMetadata,
  title: "Customers | Acme Dashboard",
  description: "Manage your customers in the Acme Dashboard.",
};
