"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

for (let i = 0; i < rawData.length; i++) {
  const line = rawData[i];

  try {
    debugger; // put a breakpoint here in VS Code to step and watch variables

    const parsed = JSON.parse(line);

    if (!("user" in parsed) || !("age" in parsed)) {
      const missing = [];
      if (!("user" in parsed)) missing.push("user");
      if (!("age" in parsed)) missing.push("age");
      throw new Error("Missing key(s): " + missing.join(", "));
    }

    const ageNumber = Number(parsed.age);
    if (isNaN(ageNumber)) {
      throw new Error("Invalid age value (not a number)");
    }

    parsed.age = ageNumber;

    cleanData.push(parsed);

  } catch (err) {
    const errorRecord = {
      line: i + 1,
      raw: line,
      message: err.message
    };
    errors.push(errorRecord);
    console.log(`Error on line ${errorRecord.line}: ${errorRecord.message}`);
  }
}

const adults = cleanData.filter(person => person.age >= 18);

console.log("\n=== Results ===");
console.log("Valid entries (cleanData):", cleanData);
console.log("Adults (age >= 18):", adults);
console.log("Parsing errors:", errors);
console.log(`\nSummary: ${cleanData.length} valid, ${errors.length} failed.`);
