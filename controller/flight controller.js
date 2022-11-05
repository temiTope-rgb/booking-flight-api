const flight =require("..model/flight");


exports.getflight = async (req, res) => {
    try {
    const flight = Flight
    res.status (200). json(flight);
    } catch (err) {
        res.status(500).json({message: err});
    }

}   