
const checkFullName = (req, res, next) => {
    if(req.body.fullName){
        return next()
    } else {
        res.status(400).json({ error: "Name is required" })
    }
}

const checkEmail = (req, res, next) => {
    if(req.body.email){
        return next()
    } else {
        res.status(400).json({ error: "Email is required"})
    }
}

const checkGuests = (req, res, next) => {
    if(req.body.guests){
        return next()
    } else {
        res.status(400).json({ error: "Number of guests is required"})
    }
}


module.exports = { checkFullName,
                   checkEmail,
                   checkGuests
                
                 }