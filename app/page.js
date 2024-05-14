import Image from "next/image";
import FinancialPlanning from "@/app/Componet/FinancialPlanning";
import FAQ from "./Componet/FAQ";
import Slider from "@/app/Componet/Slider";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FinancialPlanning />
      <FAQ />
      <Slider />
    </main>
  );
}
