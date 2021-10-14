import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import events from "./events";
import Event from "../../components/Calendar/Event";
import EventAgenda from "../../components/Calendar/Event";

const localizer = momentLocalizer(moment);

export default function CalendarPage() {
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        components={{
          event: Event,
          agenda: {
            event: EventAgenda,
          },
        }}
      />
    </div>
  );
}
