// const Contacts = require("./api/contacts");
// const Users = require("./api/users");

// const express = require("express");
// const router = express.Router();

const { router } = require("./../index");
const ctrlContacts = require("../../controllers/database/contacts");

// router.post("/", ctrlContacts.create);
//
// router.put("/:id", ctrlContacts.update);
//
// router.patch("/:id", ctrlContacts.patchData);
//
// router.delete("/:id", ctrlContacts.remove);
//
// router.post("/signup", ctrlContacts.create);
// router.post("/login", ctrlContacts.login);
// router.get("/logout", ctrlContacts.jwtAuth, ctrlContacts.logout);
// router.get("/current", ctrlContacts.jwtAuth, ctrlContacts.current);

router.get("/", ctrlContacts.get);

router.get("/:id", ctrlContacts.getById);

router.post("/", ctrlContacts.create);

router.put("/:id", ctrlContacts.update);

router.patch("/:id", ctrlContacts.patchData);

router.delete("/:id", ctrlContacts.remove);

module.exports = router;

// module.exports = {
//   router,
// }
