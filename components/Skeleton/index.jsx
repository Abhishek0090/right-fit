export default function Skeleton() {
  return [...Array(6)].map((_, idx) => (
    <div className="p-4 m-4 h-[500px] w-full   sm:w-[350px] shimmer rounded-lg" key={idx}></div>
  ));
}
