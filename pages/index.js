import Head from "next/head";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-800">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20">
        <SearchBar title="Search Bar" />
      </main>
    </div>
  );
}
