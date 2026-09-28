export default function AnnouncementBar() {
  return (
    <div  id="announcement-bar"
        className=" overflow-hidden bg-red-500 py-5 text-white">
      <div className="flex w-max animate-[marquee_18s_linear_infinite] gap-10 text-[10px] font-medium uppercase tracking-[0.25em]">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index}>
            NEW DROP — FREE SHIPPING OVER $100 — LIMITED EDITION —
          </span>
        ))}
      </div>
    </div>
  );
}