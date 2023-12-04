export default function HeaderText({h1,h2}) {
  return (
    <div className="flex flex-col gap-5 mt-40 ">
      <h1 className="font-extrabold text-5xl ">
        {h1}
      </h1>
      <h2 className="font-bold text-xl  text-white">
        {h2}
      </h2>
    </div>
  );
}
