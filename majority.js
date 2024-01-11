/**
 * Proposition de solution pour la résolution du kata "Majorité"
 */

const majority = (numbers) => {
	let nbOdd = 0, nbEven = 0;
  let occurences = {};
  
  for ( const number of numbers ) {
  	if (occurences[number] === undefined) {
  		occurences[number] = 1
  	}
    else {
	  	occurences[number] += 1    
    }
  	if ( number % 2 === 0) {
    	nbEven++
    }
    else {
    	nbOdd++
    }
  }
  
  const highestPeak = {occ: 0, number: null};
  for ( const prop in occurences ) {
	  if (occurences[prop] > 1 && occurences[prop] > highestPeak.occ) {
    	highestPeak.occ = occurences[prop]
			highestPeak.number = prop
		}
  }
  
  if (highestPeak.number !== null) {
	  return highestPeak.number
  }
  
  if ( nbEven === nbOdd ) {
  	return "Pas de majorité"
  }
  
  if ( nbEven > nbOdd ) {
	  return 'Majorité de nombres pairs pour le tableau: ' + numbers
  }
  
  return "Majorité de nombres impairs pour le tableau: " + numbers
}

console.log(majority([3,1,4,1])) // Should return "1"
console.log(majority([33,44,55,66,77])) // Should return "Majorité de nombres impairs"
console.log(majority([44,66,77])) // Should return "Majorité de nombres pairs"
console.log(majority([1,2,3,4])) // Should return "Pas de majorité"
