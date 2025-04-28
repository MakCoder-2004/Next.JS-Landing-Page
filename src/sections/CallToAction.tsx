export default function CallToAction() {
  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <div className=" flex flex-none gap-16 text-7xl md:text-8xl font-meduim">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <span className="text-lime-400 text-7xl">&#10038;</span>
              <span>Try it for free</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
