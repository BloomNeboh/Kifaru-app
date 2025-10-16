const express = require('express');
const router = express.Router();
const { calculatePrice } = require('../utils/dynamicPricing');
const { getParkFee } = require('../utils/safariFeesAPI');

// POST /api/pricing/calculate
router.post('/calculate', async (req, res) => {
  try {
    const { basePrice, demandFactor, seasonMultiplier, parks=[] } = req.body;
    let total = calculatePrice({ basePrice, demandFactor, seasonMultiplier });
    // add park fees
    for(const p of parks){
      const fee = await getParkFee(p);
      total += fee;
    }
    res.json({ total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
