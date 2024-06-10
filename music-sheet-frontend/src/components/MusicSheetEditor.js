import React, { useEffect, useRef } from "react";
import Vex from "vexflow";

const { Renderer, Stave, StaveNote } = Vex.Flow;

const MusicSheetEditor = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const renderer = new Renderer(containerRef.current, Renderer.Backends.SVG);
    renderer.resize(500, 200);
    const context = renderer.getContext();
    const stave = new Stave(10, 40, 400);
    stave.addClef("treble").setContext(context).draw();

    const notes = [
      new StaveNote({
        keys: ["c/4"],
        duration: "q",
      }),
      new StaveNote({
        keys: ["d/4"],
        duration: "q",
      }),
      new StaveNote({
        keys: ["e/4"],
        duration: "q",
      }),
      new StaveNote({
        keys: ["f/4"],
        duration: "q",
      }),
    ];

    Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
  }, []);

  return <div ref={containerRef}></div>;
};

export default MusicSheetEditor;
