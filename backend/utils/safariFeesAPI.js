/**
 * Stub safari fees API. Replace with real external integration if needed.
 */
const FEES = {
  'Serengeti': 60,
  'Ngorongoro': 70,
  'Tarangire': 25,
  'Lake Manyara': 20
};
async function getParkFee(parkName){
  return FEES[parkName] || 30;
}
module.exports = { getParkFee };
