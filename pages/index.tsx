import Image from "next/image";
import TodoApp from "@/components/TodoApp";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="styles.container">
      <section className="flex justify-center items-center h-screen">
        <TodoApp />
      </section>
    </div>
  );
}
