const router = require("express").Router();

let Booking = require("../models/Booking");

//add returns
router.route("/add").post((req,res)=> {
    
    const roomId = req.body.roomId;
    const checkIn = req.body.checkIn;
    const checkOut = req.body.checkOut;
    const name = req.body.name;
    const email = req.body.email;
    const phone = Number(req.body.phone);
    const nic = Number(req.body.nic);
    const remarks = req.body.remarks;

    const newBooking = new Booking({

        roomId,
        checkIn,
        checkOut,
        name,
        email,
        phone,
        nic,
        remarks
    })

    newBooking.save().then(()=>{
        res.json("Booking Added")
    }).catch((err)=>{
        alert("Error Occured")
    })

})

router.route("/").get((req,res)=>{
    Booking.find().then((booking)=>{
        res.json(booking)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
router.route("/update/:id").put(async (req, res)=> {
    let userId = req.params.id;
    //destructre..
    const {roomId,checkIn,checkOut,name,email,phone,nic,remarks} = req.body;
    
    const updateBooking = {
        roomId,
        checkIn,
        checkOut,
        name,
        email,
        phone,
        nic,
        remarks
    }

    const update = await Booking.findByIdAndUpdate(userId, updateBooking).then(() =>{
        res.status(200).send({status: "User Updates"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message})//send error msg to frontend
    })
})

//delete
router.route("/delete/:id").delete(async (req,res)=> {
    let userId = req.params.id;

    await Booking.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleted user", error: err.message});
    })
})

router.route("/get/:id").get(async (req,res) =>{
    let userId = req.params.id;
    const user = await Booking.findById(userId).then(() =>{
        res.status(200).send({status: "User feteched", user: user})
    }).catch(() =>{
        console.log(err.message);
        res.status(500).send({status: "Error with getting user", error: err.message})
    })
})

module.exports = router;