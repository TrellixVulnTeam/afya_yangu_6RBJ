// @desc Get stats
// @route GET/api/stats
// @access
const getStats = (req, res) => {
    res.status(200).json({message: 'Get stats'})
};

module.exports = {
    getStats,
};