import { motion } from "framer-motion";

const Schedule = () => {
  const getTopOffset = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    return (hours - 8) * 60 + minutes; // Start from 08:00
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4 }}
      className="relative w-full max-w-7xl mx-auto bg-white text-gray-800 rounded-xl shadow overflow-hidden min-h-[720px]"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Weekly Schedule
          </h2>
          <p className="text-sm text-gray-500">August 19–24</p>
        </div>
        <div className="text-sm text-gray-600 font-medium flex items-center gap-2">
          <span className="text-gray-500">Pick a date:</span>
          <input
            type="date"
            className="border rounded px-2 py-1 text-sm text-gray-700"
          />
        </div>
      </div>

      {/* Weekly grid */}
      <div className="grid grid-cols-6 divide-x h-[640px] relative">
        {[
          {
            day: "Mon",
            date: "19",
            events: [
              { time: "10:00", title: "Classic men's cut" },
              { time: "14:00", title: "Full beard grooming" },
            ],
          },
          {
            day: "Tue",
            date: "20",
            events: [
              { time: "09:00", title: "Skin fade" },
              { time: "11:00", title: "Cut & Beard Combo" },
            ],
          },
          {
            day: "Wed",
            date: "21",
            events: [
              { time: "11:30", title: "Eyebrow shaping" },
              { time: "13:00", title: "Bleach treatment" },
              { time: "16:00", title: "Full razor shave" },
            ],
          },
          {
            day: "Thu",
            date: "22",
            events: [],
          },
          {
            day: "Fri",
            date: "23",
            events: [
              { time: "10:00", title: "Shave & Cut package" },
              { time: "13:30", title: "Hair straightening" },
              { time: "16:00", title: "Toner & Beard" },
            ],
          },
          {
            day: "Sat",
            date: "24",
            events: [
              { time: "12:00", title: "Full styling package" },
              { time: "15:00", title: "Steam beard treatment" },
            ],
          },
        ].map((dayData, i) => (
          <div key={i} className="relative px-4 py-3 border-gray-200">
            {/* Day header */}
            <div className="mb-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {dayData.day}
              </h3>
              <p className="text-2xl font-bold text-red-500">{dayData.date}</p>
            </div>

            {/* Events */}
            <div className="relative h-[580px]">
              {dayData.events.length > 0 ? (
                dayData.events.map((event, idx) => (
                  <div
                    key={idx}
                    style={{ top: `${getTopOffset(event.time)}px` }}
                    className="absolute border-l-4 border-red-500 pl-3"
                  >
                    <p className="text-sm font-medium text-red-500">
                      {event.time}
                    </p>
                    <p className="text-sm text-gray-800">{event.title}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-400 italic mt-4">
                  No appointments
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Schedule;
