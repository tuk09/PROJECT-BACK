const db = require('../models/db')


exports.getByUser = async (req, res, next) => {
  try {
    const bookings = await db.booking.findMany({
      where : { userId : req.user.id}
    })
    res.json({bookings})
  } catch (err) {
    next(err)
  }
}

exports.createBooking = async (req, res, next) => {
  const data = req.body;
  try {
    
    data.numberoftickets = parseInt(data.numberoftickets);
    data.bookingdate =  dateTime(data.bookingdate);
    data.price = parseInt(data.price);

    const rs = await db.booking.create({
      data: { ...data, userId: req.user.id }
    });
    res.json({ msg: 'Create OK', result: rs });
  } catch (err) {
    next(err);
  }
}

exports.updateBooking = async (req, res, next) => {
  const {id} = req.params
  const data = req.body
  try {
    const rs = await db.booking.update({
      data :  {...data},
      where: { id : +id , userId : req.user.id} 
    })
    res.json({msg: 'Update ok', result: rs})
  }catch(err){
    next(err)
  }
}

exports.deleteBooking = async (req, res, next) => {
  const {id} = req.params
  try {
    const rs = await db.booking.delete({ where : {id : +id, userId: req.user.id}})
    res.json({msg: 'Delete ok', result : rs})
  }catch(err) {
    next(err)
  }
}

exports.getAllStatus = async (req, res, next) => {
  res.json({status: Object.values(Status)})
}