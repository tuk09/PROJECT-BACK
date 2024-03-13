const db = require('../models/db')
const {Status} =require('@prisma/client')

exports.getByUser = async (req, res, next) => {
  try {
    const movies = await db.movie.findMany({
      where : { userId : req.user.id}
    })
    res.json({movies})
  } catch (err) {
    next(err)
  }
}

exports.createMovie = async (req, res, next) => {
  const data = req.body

  try {
    const rs = await db.movie.create({
      data: { ...data, userId: req.user.id }
    })
    res.json({ msg: 'Create OK', result: rs })
  } catch (err) {
    next(err)
    console.log(data)
  }
}


exports.updateMovie = async (req, res, next) => {
  const {id} = req.params
  const data = req.body
  try {
    const rs = await db.movie.update({
      data :  {...data},
      where: { id : +id , userId : req.user.id} 
    })
    res.json({msg: 'Update ok', result: rs})
  }catch(err){
    next(err)
  }
}

exports.deleteMovie = async (req, res, next) => {
  const {id} = req.params
  try {
    const rs = await db.movie.delete({ where : {id : +id, userId: req.user.id}})
    res.json({msg: 'Delete ok', result : rs})
  }catch(err) {
    next(err)
  }
}

exports.getAllStatus = async (req, res, next) => {
  res.json({status: Object.values(Status)})
}