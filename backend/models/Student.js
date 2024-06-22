const mongoose = require("mongoose")

const StudentSchema = new mongoose.Schema({
    studentName: String,
    rollNo: String,
    degree: String,
    score: Number,
    aptitude: Number,
    english: Number,
    quantitative: Number,
    analytical: Number,
    domain: Number,
    computerFundamental: Number,
    coding: Number,
    personality: String,
  });

const StudentModel = mongoose.model("student",StudentSchema)
module.exports = StudentModel

