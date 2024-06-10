import React, { useEffect, useRef, useState } from "react";
import Vex from "vexflow";
import Toolbar from "./Toolbar";

const { Renderer, Stave, StaveNote } = Vex.Flow;

const MusicSheetEditor = () => {
  const containerRef = useRef(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const renderer = new Renderer(containerRef.current, Renderer.Backends.SVG);
    renderer.resize(500, 200);
    const context = renderer.getContext();
    const stave = new Stave(10, 40, 400);
    stave.addClef("treble").setContext(context).draw();
    drawNotes(context, stave, notes);
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const drawNotes = (context, stave, notes) => {
    context.clearRect(0, 0, 500, 200);
    stave.setContext(context).draw();
    Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
  };

  return (
    <div>
      <Toolbar onAddNote={addNote} />
      <div ref={containerRef}></div>
    </div>
  );
};

export default MusicSheetEditor;
