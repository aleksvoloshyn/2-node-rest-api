const contacts = require('../services/contactsServices')
const HttpError = require('../helpers/HttpError')
const ctrlWrapper = require('../helpers/ctrlWrapper')

const getAllContacts = async (req, res) => {
  const result = await contacts.listContacts()
  res.json(result)
}

const getOneContact = async (req, res) => {
  const { id } = req.params
  const result = await contacts.getContactById(id)
  if (!result) {
    throw HttpError(404, 'Not found')
  }
  res.json(result)
}

const deleteContact = async (req, res) => {
  const { id } = req.params
  const result = await contacts.removeContact(id)
  if (!result) {
    throw HttpError(404, 'Not found')
  }
  res.json({
    message: 'Delete success',
  })
}
const createContact = async (req, res) => {
  const result = await contacts.addContact(req.body)
  res.status(201).json(result)
}

const updateContact = async (req, res) => {
  const { id } = req.params
  const result = await contacts.updateById(id, req.body)
  if (!result) {
    throw HttpError(404, 'Not found')
  }
  res.json(result)
}

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
}
