import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//1. Create Entry component (the repeating part of the dictionary)
//2. Create props to replace the hard coded data
//3a. Import the emojipedia const
//3b. Map through the emojipedia array and render entry components.

// {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// }

function createEntry(emojiTerm) {
  //Creates a single entry from the emojipedia
  return (
    <Entry
      key={emojiTerm.id} //React also expects a key prop so it can render the components
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
