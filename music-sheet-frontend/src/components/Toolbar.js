import React from "react";

const Toolbar = ({ onAddNote }) => {
  const handleAddNote = (duration) => {
    const note = new Vex.Flow.StaveNote({
      keys: ["c/4"],
      duration: duration,
    });
    onAddNote(note);
  };

  return (
    <div>
      <button onClick={() => handleAddNote("q")}>Add Quarter Note</button>
      <button onClick={() => handleAddNote("h")}>Add Half Note</button>
      <button onClick={() => handleAddNote("w")}>Add Whole Note</button>
      {/* Add more buttons for different note durations */}
    </div>
  );
};

export default Toolbar;
