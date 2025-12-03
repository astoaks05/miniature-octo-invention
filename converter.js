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
  kilometer: 1000,       // TODO: How many meters in 1 kilometer?
  nauticalMiles: 1852
};

const METERS_TO_IMPERIAL = {
  inch: 39.3701,         // 1 meter = 39.3701 inches
  foot: 3.28084,         // TODO: How many feet in 1 meter?
  yard: 1.09361,         // 1 meter = 1.09361 yards
  mile: 0.000621371,
  eagles: 0.48614487117      
};

// ============================================
// STEP 2: CONVERSION FUNCTION
// ============================================
// This function takes a value and units, and returns the converted value.

function convertLength(value, fromUnit, toUnit) {
  // First, convert the input value to meters
  if (fromUnit in METRIC_TO_METERS) {
    meters = value * METRIC_TO_METERS[fromUnit];
  } else if (fromUnit in METERS_TO_IMPERIAL) {
    meters = value * METERS_TO_IMPERIAL[fromUnit];
  } else {
    throw new Error(`Invalid from unit: ${fromUnit}`);
  }
  
  // Convert from meters to the target imperial unit
  if (toUnit in METERS_TO_IMPERIAL) {
    result = meters * METERS_TO_IMPERIAL[toUnit];
  } else if (toUnit in METRIC_TO_METERS) {
    result = meters * METRIC_TO_METERS[toUnit];
  } else {
    throw new Error(`Invalid to unit: ${toUnit}`);
  }

  // Round to 4 decimal places for cleaner display
  return Math.round(result * 10000) / 10000;
}

// ============================================
// STEP 3: HISTORY TRACKING
// ============================================
// Keep track of past conversions so users can see what they've converted

let conversionHistory = [];
function saveHistoryToStorage() {
  localStorage.setItem('conversionHistory', JSON.stringify(conversionHistory));
}

function loadHistoryFromStorage() {

  const savedHistory = localStorage.getItem('conversionHistory');

  if (savedHistory) {
    conversionHistory = JSON.parse(savedHistory);
  } else {
    conversionHistory = [];
  }

  displayHistory();
}

function addToHistory(value, fromUnit, toUnit, result) {
  
  const conversion = {
    value: value,        
    fromUnit: fromUnit,  
    toUnit: toUnit,     
    result: result      
  };

  conversionHistory.push(conversion);
  saveHistoryToStorage();

  displayHistory();
}

// ============================================
// STEP 4: DISPLAY FUNCTIONS
// ============================================
// These functions update what the user sees on the page

function displayResult(value, fromUnit, toUnit, result) {
  // Get the HTML elements we need to update
  const resultDiv = document.getElementById('result');
  const resultText = document.getElementById('result-text');

  const message = `${value} ${fromUnit} = ${result} ${toUnit}`; 

  // Update the page
  resultText.textContent = message;
  resultDiv.style.display = 'block';
}

function displayHistory() {
  const historyList = document.getElementById('history-list');

  if (conversionHistory.length === 0) { 
    historyList.innerHTML = '<p class="text-muted mb-0">No conversions yet. Try one above!</p>';
    return;
  }

  const reversedHistory = conversionHistory.slice().reverse();

  const historyHTML = `<div class="list-group">${
    reversedHistory.map(function(conversion) {
      return `<div class="list-group-item">${conversion.value} ${conversion.fromUnit} = ${conversion.result} ${conversion.toUnit}</div>`;
    }).join('')
  }</div>`;

  historyList.innerHTML = historyHTML;
}

// ============================================
// STEP 5: FORM HANDLING
// ============================================
// This code runs when the user submits the form

// Get the form element
const form = document.getElementById('converter-form');

form.addEventListener('submit', function(event) {
  // Prevent the page from reloading
  event.preventDefault();

  const value = Number(document.getElementById('value').value); 
  const fromUnit = document.getElementById('from-unit').value; 
  const toUnit = document.getElementById('to-unit').value; 

  if (value <= 0 || fromUnit === '' || toUnit === '') { 
    alert('Please fill in all fields with valid values!');
    return;
  }

  const result = convertLength(value, fromUnit, toUnit);
  displayResult(value, fromUnit, toUnit, result);
  addToHistory(value, fromUnit, toUnit, result);
});

const clearHistoryButton = document.getElementById('clear-history');
clearHistoryButton.addEventListener('click', function(event){
  event.preventDefault();
  conversionHistory = [];

  localStorage.removeItem('conversionHistory');
  displayHistory();
})

loadHistoryFromStorage();
