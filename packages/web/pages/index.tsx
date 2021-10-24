import useConfetti from "../utils/useConfetti";

export default function Home() {
  useConfetti();

  return <div className="text-4xl m-8">Hello World</div>;
}
