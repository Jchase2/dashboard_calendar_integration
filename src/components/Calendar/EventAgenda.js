import React from "react";
import PropTypes from "prop-types";

export default function EventAgenda({ event }) {
  return (
    <span>
      {event.title}
      <p>{event.desc}</p>
    </span>
  );
}

EventAgenda.propTypes = {
  event: PropTypes.object,
};
