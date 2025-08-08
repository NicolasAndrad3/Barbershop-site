import { useState, useRef, useEffect } from "react";
import Schedule from "./Schedule";

const Calendar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendar]);

  return (
    <section
      id="calendar"
      className="relative w-full min-h-screen bg-[#111827] text-white flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24"
    >
      {!showCalendar && (
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-[48px] sm:text-[120px] font-graffiti text-yellow-400 drop-shadow-[0_0_8px_rgba(255,255,0,0.5)] leading-none">
            Book your appointment
          </h2>

          <p className="text-base sm:text-lg text-red-300 max-w-xs sm:max-w-xl mx-auto">
            Pick a day that works for you and we’ll take care of your style.
          </p>

          <button
            onClick={() => setShowCalendar(true)}
            className="px-6 sm:px-10 py-2 sm:py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition text-sm sm:text-base"
          >
            Check availability
          </button>
        </div>
      )}

      {showCalendar && (
        <div
          ref={calendarRef}
          className="w-full max-w-7xl flex flex-col items-center z-50"
        >
          <Schedule />
        </div>
      )}
    </section>
  );
};

export default Calendar;
