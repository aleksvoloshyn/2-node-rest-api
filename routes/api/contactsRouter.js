const express = require('express')
// import {
//   getAllContacts,
//   getOneContact,
//   deleteContact,
//   createContact,
//   updateContact,
// } from '../controllers/contactsControllers.js'

const contacts = require('../../services/contactsServices')

const contactsRouter = express.Router()

contactsRouter.get('/', async (req, res) => {
  const result = await contacts.listContacts()
  res.json(result)
})

// contactsRouter.get('/:id', getOneContact)

// contactsRouter.delete('/:id', deleteContact)

// contactsRouter.post('/', createContact)

// contactsRouter.put('/:id', updateContact)

module.exports = contactsRouter
