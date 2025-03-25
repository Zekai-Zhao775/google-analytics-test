import type { Metadata } from "next";
import DonateForm from "./DonateForm";

export const metadata: Metadata = {
    title: "Support Our Cause",
};

export default function Donate() {
    return <DonateForm />;
} 