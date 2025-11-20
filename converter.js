// ============================================
// UNIT CONVERTER - BEGINNER JAVASCRIPT PROJECT
// ============================================
// This file contains the logic for converting metric lengths to imperial lengths.
// Read the comments carefully and fill in the TODOs to make the converter work!

// ============================================
// STEP 1: CONVERSION FACTORS
// ============================================
// These are the numbers we need to convert between different units.
// All conversions go through meters first, then to the target unit.

// TODO: Fill in the missing conversion factors
// HINT: 1 meter = 100 centimeters, 1 meter = 1000 millimeters, etc.

const METRIC_TO_METERS = {
  millimeter: 0.001,     // 1 millimeter = 0.001 meters
  centimeter: 0.01,      // 1 centimeter = 0.01 meters
  meter: 1,              // 1 meter = 1 meter (base unit)
  kilometer: 1000        // TODO: How many meters in 1 kilometer?
};

const METERS_TO_IMPERIAL = {
  inch: 39.3701,         // 1 meter = 39.3701 inches
  foot: 3.28084,         // TODO: How many feet in 1 meter?
  yard: 1.09361,         // 1 meter = 1.09361 yards
  mile: 0.000621371      // TODO: How many miles in 1 meter?
};

// ============================================
// STEP 2: CONVERSION FUNCTION
// ============================================
// This function takes a value and units, and returns the converted value.

function convertLength(value, fromUnit, toUnit) {
  // TODO: First, convert the input value to meters
  // HINT: Multiply the value by the conversion factor from METRIC_TO_METERS
  // Example: If value is 5 and fromUnit is "centimeter"
  //          then meters = 5 * 0.01 = 0.05

  const meters = 0; // TODO: Replace 0 with the correct calculation

  // TODO: Next, convert from meters to the target imperial unit
  // HINT: Multiply meters by the conversion factor from METERS_TO_IMPERIAL

  const result = 0; // TODO: Replace 0 with the correct calculation

  // Round to 4 decimal places for cleaner display
  return Math.round(result * 10000) / 10000;
}

// ============================================
// STEP 3: HISTORY TRACKING
// ============================================
// Keep track of past conversions so users can see what they've converted

let conversionHistory = [];

function addToHistory(value, fromUnit, toUnit, result) {
  // TODO: Create an object that stores the conversion details
  // HINT: It should have properties for value, fromUnit, toUnit, and result

  const conversion = {
    // TODO: Fill in the properties
    // value: ???,
    // fromUnit: ???,
    // toUnit: ???,
    // result: ???
  };

  // TODO: Add the conversion object to the conversionHistory array
  // HINT: Use the .push() method to add to an array

  // TODO: Call displayHistory() to update the display
}

// ============================================
// STEP 4: DISPLAY FUNCTIONS
// ============================================
// These functions update what the user sees on the page

function displayResult(value, fromUnit, toUnit, result) {
  // Get the HTML elements we need to update
  const resultDiv = document.getElementById('result');
  const resultText = document.getElementById('result-text');

  // TODO: Create a message to show the user
  // Example: "5 centimeters = 1.9685 inches"
  // HINT: Use template literals with backticks: `text ${variable} text`

  const message = ''; // TODO: Replace with your message

  // Update the page
  resultText.textContent = message;
  resultDiv.classList.add('show');
}

function displayHistory() {
  const historyList = document.getElementById('history-list');

  // TODO: Check if history is empty
  // HINT: Use conversionHistory.length to check
  if (true) { // TODO: Replace true with the actual check
    historyList.innerHTML = '<p style="color: #888;">No conversions yet. Try one above!</p>';
    return;
  }

  // TODO: Create HTML for each conversion in history
  // HINT: Use .map() to convert each item into HTML, then .join() to combine them
  // HINT: You can reverse the array first with .slice().reverse() to show newest first

  let historyHTML = ''; // TODO: Generate the history HTML

  // Example of what one history item might look like:
  // <div class="history-item">5 cm = 1.9685 in</div>

  historyList.innerHTML = historyHTML;
}

// ============================================
// STEP 5: FORM HANDLING
// ============================================
// This code runs when the user submits the form

// Get the form element
const form = document.getElementById('converter-form');

// TODO: Add an event listener for the "submit" event
// HINT: Use addEventListener('submit', function)

form.addEventListener('submit', function(event) {
  // Prevent the page from reloading
  event.preventDefault();

  // TODO: Get the values from the form inputs
  // HINT: Use document.getElementById() to get each input
  // HINT: For input elements, use .value to get the value
  // HINT: For the number input, convert to a number with Number() or parseFloat()

  const value = 0; // TODO: Get the value from the "value" input
  const fromUnit = ''; // TODO: Get the value from the "from-unit" select
  const toUnit = ''; // TODO: Get the value from the "to-unit" select

  // TODO: Validate that all fields are filled
  // HINT: Check if value is greater than 0 and units aren't empty
  if (false) { // TODO: Add validation check
    alert('Please fill in all fields with valid values!');
    return;
  }

  // TODO: Call the convertLength function
  const result = 0; // TODO: Call convertLength with the right parameters

  // TODO: Display the result
  // HINT: Call displayResult() with all the parameters

  // TODO: Add to history
  // HINT: Call addToHistory() with all the parameters
});

// ============================================
// BONUS CHALLENGES (Optional)
// ============================================
// Once you've completed all the TODOs above, try these:
//
// 1. Add a "Clear History" button that empties the conversion history
// 2. Save history to localStorage so it persists when the page reloads
// 3. Add input validation to show helpful error messages
// 4. Add a "Swap Units" button to quickly reverse the conversion
// 5. Add more unit types (e.g., nautical miles, hands, fathoms)
// 6. Add reverse conversion (Imperial to Metric)
// 7. Show the conversion formula used (e.g., "cm × 0.39 = in")
// 8. Add a comparison visual (e.g., "That's about as long as X soccer fields!")
//
// Remember: Start small! Get the basic converter working first,
// then add features one at a time. Test after each change!
