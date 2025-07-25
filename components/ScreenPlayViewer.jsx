import React from 'react';


const screenplayFont = {
  fontFamily: '"Courier Prime", monospace',
};

const ScreenplayViewer = ({ screenplay }) => {
  if (!screenplay) {
    return null; 
  }

  const renderLine = (line, index) => {
    // Trim and clean <center> tags
    let trimmedLine = line.trim();

    if (trimmedLine.startsWith('<center>') && trimmedLine.endsWith('</center>')) {
      trimmedLine = trimmedLine.replace('<center>', '').replace('</center>', '').trim();
    }

    // SCENE HEADINGS (e.g., INT. BAKER STREET - NIGHT)
    if (trimmedLine.startsWith('INT.') || trimmedLine.startsWith('EXT.')) {
      return (
        <p key={index} className="uppercase font-bold mt-6 mb-4">
          {trimmedLine}
        </p>
      );
    }

    // CHARACTER NAMES
    const isCharacter =
      trimmedLine.length > 0 &&
      trimmedLine === trimmedLine.toUpperCase() &&
      !trimmedLine.startsWith('(') &&
      !trimmedLine.startsWith('[');

    if (isCharacter) {
      return (
        <p key={index} className="uppercase pl-32 mt-4">
          {trimmedLine}
        </p>
      );
    }

    // PARENTHETICALS
    if (trimmedLine.startsWith('(') && trimmedLine.endsWith(')')) {
      return (
        <p key={index} className="pl-24 pr-32 text-gray-600">
          {trimmedLine}
        </p>
      );
    }

    // TRANSITIONS (e.g., FADE OUT.)
    if (trimmedLine.endsWith('.')) {
      const isTransition = ['FADE IN:', 'FADE OUT.', 'CUT TO:', 'DISSOLVE TO:'].some(t =>
        trimmedLine.toUpperCase().startsWith(t)
      );
      if (isTransition) {
        return (
          <p key={index} className="uppercase pl-64 mt-4 mb-4">
            {trimmedLine}
          </p>
        );
      }
    }

    // DIALOGUE & ACTION
    if (trimmedLine.length > 0) {
      return (
        <p key={index} className="pl-12 pr-12 mb-4">
          {trimmedLine}
        </p>
      );
    }

    // Empty line to preserve spacing
    return <p key={index}>&nbsp;</p>;
  };

  return (
    <div
      style={screenplayFont}
      className="bg-white text-black p-4 sm:p-8 md:p-12 rounded-md shadow-lg max-w-4xl mx-auto"
    >
      {screenplay.split('\n').map(renderLine)}
    </div>
  );
};

export default ScreenplayViewer;
