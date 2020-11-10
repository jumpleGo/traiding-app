const {Router}    = require('express')
const router      = Router()
const MDeal       = require('../../models/MDeal')

router.post('/createDeal', async (req, res) => {
  try {
    const {
      trend,
      user,
      pair,
      period,
      amount,
      startDate,
      endDate,
      status,
      currentPrice,
    } = req.body

    const deal = new MDeal({
      trend,
      user,
      pair,
      period,
      amount,
      startDate,
      endDate,
      status,
      currentPrice
    })
    console.log("deal", deal)
    await deal.save()
    res.json({
      msg: "Created deal",
      status: 200
    })
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router
