import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-4xl font-bold">Welcome to the Eurovision Voting App</h1>
          <p className="mt-4">
            This is a simple app to vote for your favorite Eurovision performances. You can also add new performances, contests, users, and votes.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Image
            src="/eurovision.jpg"
            alt="Eurovision"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
      </div>
    </main>
  );
}
