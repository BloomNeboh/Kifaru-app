/**
 * Simple dynamic pricing example:
 * - basePrice from itinerary
 * - increases by 10% when demand factor > 1
 * - applies seasonal multiplier
 */
function calculatePrice({ basePrice=0, demandFactor=1, seasonMultiplier=1 }){
  let price = basePrice * seasonMultiplier;
  if(demandFactor > 1) price *= (1 + Math.min(demandFactor - 1, 1) * 0.1);
  return Math.round(price);
}
module.exports = { calculatePrice };
