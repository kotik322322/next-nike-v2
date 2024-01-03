import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  mainImg: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
    index: true
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  newPrice: {
    type: Number,
    required: false,
  },
  isNew: {
    type: Boolean,
    required: false,
  },
  sizes: {
    type: Array,
    required: true,
  }
})

const Item = mongoose.models.Item || mongoose.model("Item", itemSchema)

export default Item
