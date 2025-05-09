import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200">
      <h1 className="text-4xl font-bold text-yellow-500 mb-8">Hello, Sun!</h1>
      <Image
        src="/sun_clouds.svg"
        alt="Beach scene with sun and clouds"
        width={400}
        height={200}
      />
    </div>
  );
}
