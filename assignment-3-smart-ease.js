//Smart-ease - Back to the basics!
//NOnoN0nOYes (Note taking app)
//Exe-01_Save a note
const notes = [];

function saveNote(content, id) {
  notes.push({ content: content, id: id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);
// Output:

//Exe-02_Get a note

function getNote(id) {
  if (id === undefined || typeof id !== "number") {
    console.log("Error: Please provide a valid number ID.");
    return;
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote);

getNote();
getNote("1");

//End:

//Exe-03_Log out notes

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text:${notes[i].content}`,
    );
  }
}

logOutNotesFormatted();

//Exe-04_Unique feature
function searchNotes(keyword) {
  const reconciledNotes = [];

  const lowerCaseKeyword = keyword.toLowerCase();

  for (let i = 0; i < notes.length; i++) {
    const noteContent = notes[i].content.toLowerCase();

    if (noteContent.includes(lowerCaseKeyword)) {
      reconciledNotes.push(notes[i]);
    }
  }

  return reconciledNotes;
}

saveNote("Buy groceries for next 4 days", 3);
const groceryNotes = searchNotes("groceries");
console.log(groceryNotes);
//This feature makes your search case-insensitive so users find their notes regardless of CAPITAL letters.
//It ensures a flexible, human-friendly search that matches partial words and ignore typing mistakes.
// Output:

//cactusIO-interactive (Smart phone usage app) optional
//Exe-05_Adding an activity,Exe-06_Show my status,& Exe-06_Usage limit

const activities = [];

function addActivity(date, activity, duration) {
  activities.push({
    date: date,
    activity: activity,
    duration: duration,
  });
}

addActivity("23/7-18", "Youtube", 30);

console.log(activities);

let usageLimit = 500;

function showStatus(activities) {
  if (activities.length === 0) {
    console.log("Add some activities before calling showStatus");
    return;
  }

  let totalDuration = 0;

  for (let i = 0; i < activities.length; i++) {
    totalDuration += activities[i].duration;
  }

  const count = activities.length;

  if (totalDuration > usageLimit) {
    console.log("You have reached your limit, no more smartphoning for you!");
  }

  return `You have added ${count} activities. They amount to ${totalDuration} min. of usage`;
}

showStatus(activities);

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Instagram", 20);
addActivity("23/7-18", "Twitter", 28);

console.log(showStatus(activities));

// Output:Exe-05_Adding an activity,Exe-06_Show my status,& Exe-06_Usage limit

//Exe-08_Extra Feature
//Choose getAppBreakdown to instantly see a clear, organized summary of your total time spent on each specific app.

function getAppBreakdown() {
  if (activities.length === 0) {
    console.log("No activities recorded yet.");
    return;
  }

  const breakdown = {};

  for (let i = 0; i < activities.length; i++) {
    const appName = activities[i].activity;
    const duration = activities[i].duration;

    if (breakdown[appName]) {
      breakdown[appName] += duration;
    } else {
      breakdown[appName] = duration;
    }
  }

  console.log("=== App Usage Breakdown ===");
  for (const app in breakdown) {
    console.log(`${app}: ${breakdown[app]} min.`);
  }
}

addActivity("Youtube", 30);
addActivity("Instagram", 45);
addActivity("Youtube", 20);
addActivity("Facebook", 60);

getAppBreakdown();
// Output:
