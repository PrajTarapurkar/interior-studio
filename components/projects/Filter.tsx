"use client";

type Props = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

export default function Filter({
  activeFilter,
  setActiveFilter,
}: Props) {
  return (
    <div className="flex justify-center mb-14 px-6">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {["All", "Residential", "Commercial"].map((item) => (
          <button
            key={item}
            onClick={() => setActiveFilter(item)}
            className={`
              px-6
              py-3
              rounded-full
              border
              transition-all
              duration-300
              text-sm
              tracking-wide
              ${
                activeFilter === item
                  ? "bg-[#d6b98c] text-black border-[#d6b98c]"
                  : "border-[#d6b98c]/30 text-white hover:border-[#d6b98c]"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}