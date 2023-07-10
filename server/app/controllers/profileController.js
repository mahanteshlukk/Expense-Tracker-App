const Image = require("../models/image.js")

profileController = {}

profileController.create = (req, res) => {
  const body = { image: req.file.filename, userId: req.user._id }
  const image = new Image(body)
  image
    .save()
    .then((image) => {
      res.json(image)
    })
    .catch((err) => {
      res.json(err)
    })
}

profileController.show = (req, res) => {
  Image.find({ userId: req.user._id })
    .then((Image) => {
      res.json(Image)
    })
    .catch((err) => {
      res.json(err)
    })
}

profileController.update = (req, res) => {
  if (req.file) {
    const id = req.params.id
    const body = { image: req.file.filename, userId: req.user._id }
    Image.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      { $set: body },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((image) => {
        res.json(image)
      })
      .catch((err) => {
        res.json(err)
      })
  } else {
    res.json({ error: "something went wrong" })
  }
}

module.exports = profileController 