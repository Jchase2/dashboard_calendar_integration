import React from "react";
import PropTypes from "prop-types";

export default function Event({ event }) {
  return (
    <span>
      <strong>{event.title}</strong>
      {event.desc && ":  " + event.desc}
    </span>
  );
}

Event.propTypes = {
  event: PropTypes.object,
};
