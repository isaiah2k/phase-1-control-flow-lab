// Function to return a greeting message based on the ride distance in feet
function scuberGreetingForFeet(ride) {
  // Checks if the ride distance is less than or equal to 400 feet
  if (ride <= 400) {
    // Free ride for a distance <= 400 feet
    return 'This one is on me!' 
  } 
  // Checks if the ride distance is less than or equal to 2000 feet
  else if (ride <= 2000) {
    //$20 for distances above 400 but less than 2000 feet
    return 'That will be twenty bucks.' 
  } 
  // Checks if the ride distance is less than or equal to 2500 feet
  else if (ride <= 2500) {
    // $30 for distances between 2001 and 2500 feet
    return 'I will gladly take your thirty bucks.' 
  } 
  // For distances greater than 2500 feet
  else {
    // Returns no service for distances greater than 2500 feet
    return 'No can do.' 
  }
}
// Function to return a response based on the city using a ternary operator
function ternaryCheckCity(city) {
  // Returns 'Ok, sounds good.' if city is NYC Otherwise, return 'No go.'
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}
// Function to return a response based on the tip amount using a switch statement
function switchOnCharmFromTip(tip) {
  let response
  // Uses a switch statement to determine the response based on tip
  switch (tip) {
    case 'generous':
      // Response for generous tips
      response = 'Thank you so much.' 
      break
      // Response for not as generous tips
    case 'not as generous':
      response = 'Thank you.' 
      break
      // Default response for any other tip values
    default:
      response = 'Bye.'
      break
  }
  // Returns the determined response
  return response 
}
