export default function Skeleton() {
  return [...Array(6)].map(() => (
    <div className="p-4 m-4 h-[500px] shimmer rounded-lg"></div>
  ));
}
