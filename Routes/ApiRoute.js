const route = require("express").Router();
const { controllerdata } = require('../database/Models');
const controller = require('../Controller/Apicontroller');

route.get("/Address",  controller.getAddressData);
route.get("/Contactinfo",  controller.getContactinfoData);
route.get("/Nexttokin",  controller.GetNexttokinData);
route.get("/Patients",  controller.GetPatientsData);


module.exports = route;