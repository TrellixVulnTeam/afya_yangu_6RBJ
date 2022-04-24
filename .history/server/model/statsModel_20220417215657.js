const mongoose = require('mongoose');

const statsSchema = mongoose.Schema(
    {
    pulseRate: {
        type: number,
    },
    bloodPressure: [{
        systolicRate: number,
        diastolicRate: number,
    }],
    bloodSugar: 
    
    }
);

module.exports = mongoose.model('Stats', statsSchema)