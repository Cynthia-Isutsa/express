//@desc Get all Contacts
//@route GET api/contacts
//@access public

const getContacts = (req, res) =>{
    res.status(200).json({message: 'Get all contacts'})
  }

//@desc Get one contact
//@route GET api/contacts/:id
//@access public

const getContact = (req, res) =>{
    res.status(200).json({message:`Get contact for ${req.params.id}`})
  }

//@desc create new Contact
//@route POST api/contacts
//@access public

const createContact = (req, res) =>{
    res.status(201).json({message: 'Create contact'})
  }

//@desc update contact
//@route PUT api/contacts/:id
//@access public

const updateContact = (req, res) =>{
    res.status(200).json({message: `Update contact for ${req.params.id}`})
  }

//@desc Delete Contact
//@route DELETE api/contacts/:id
//@access public

const deleteContact = (req, res) =>{
    res.status(200).json({message: `Delete contact for ${req.params.id}`})
  }




  module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}