export default function HeaderText({h1,h2}) {
  return (
    <div className="flex flex-col gap-5 mt-40 ">
      <h1 className="font-extrabold text-5xl sm:text-lg">
        {h1}
      </h1>
      <h2 className="font-bold text-3xl sm:text-base text-white">
        {h2}
      </h2>
    </div>
  );
}
