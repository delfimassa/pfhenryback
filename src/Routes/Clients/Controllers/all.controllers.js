const { createClient } = require('./create.Clients')
const { deleteClient } = require('./delete.Clients')
const { getClient, getClientById } = require('./get.Client')
const { updateClient, addFav } = require('./update.Clients')

module.exports = {
    createClient,
    deleteClient,
    getClientById,
    getClient,
    updateClient,
    addFav
};