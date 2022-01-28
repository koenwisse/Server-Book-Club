const { Router } = require("express");
const auth = require("../auth/middleware");
const User = require("../models").user;
const Club = require("../models").club;
const UserClub = require("../models").userClub;

const router = new Router();

// Get all categories
router.get("/", async (req, res) => {
  try {
    const clubs = await Club.findAll();
    console.log(clubs);
    res.status(200).send({ message: "ok", clubs });
  } catch (e) {
    console.log(e.message);
  }
});

//post request to create thye club
router.post("/", auth, async (req, res) => {
  try {
    const userId = req.body.userId;
    //const userId = req.user.id;
    console.log("userId", userId);

    const { name, joinCode } = req.body;
    if (!name || !joinCode || !userId) {
      return res.status(400).send("Please provide the details");
    }

    const createdClub = await Club.create({
      name,
      joinCode,
      userId,
    });

    const clubId = createdClub.id;
    console.log("clubId", clubId);

    const userClubPromise = await UserClub.create({
      userId,
      clubId,
    });

    /* const resolvedPromises = await Promise.all(userClubPromise);
    console.log("resolved", resolvedPromises); */

    res.status(201).send({ message: "New Club Created", club: createdClub });
  } catch (e) {
    console.log("Error", e);
  }
});

module.exports = router;
