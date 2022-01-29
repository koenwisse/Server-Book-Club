const { Router } = require("express");
const auth = require("../auth/middleware");
const User = require("../models").user;
const Club = require("../models").club;
const UserClub = require("../models").userClub;

const router = new Router();

// Get all clubs
router.get("/", async (req, res) => {
  try {
    const clubs = await Club.findAll({ include: User });
    console.log(clubs);
    res.status(200).send({ message: "ok", clubs });
  } catch (e) {
    console.log(e.message);
  }
});

//post request to create the club
router.post("/", auth, async (req, res) => {
  try {
    //const userId = req.body.userId;
    const userId = req.user.id;
    console.log("userId", userId);

    const { name, joinCode } = req.body;
    if (!name || !joinCode || !userId) {
      return res.status(400).send("Please provide the details");
    }

    const createdClub = await Club.create({
      name,
      joinCode,
      userId: userId,
    });

    const clubId = createdClub.id;
    console.log("clubId", clubId);

    const userClubPromise = await UserClub.create({
      userId,
      clubId,
    });
    res.status(201).send({ message: "New Club Created", club: createdClub });
  } catch (e) {
    console.log("Error", e);
  }
});

//user can edit the club
router.patch("/:id", auth, async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const club = await Club.findByPk(id);
  if (!club.userId === req.user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this club" });
  }
  if (!club) {
    return res.status(404).send("Club not found");
  }
  const { name, joinCode } = req.body;

  await club.update({ name, joinCode });

  return res.status(200).send({ club });
});

//user can delete the club
router.delete("/:clubId", auth, async (req, res, next) => {
  try {
    const { clubId } = req.params;
    console.log(clubId);
    const club = await Club.findByPk(clubId);
    if (!club) {
      return res.status(404).send("Club not found");
    }
    // Check if this user is the owner of the club
    if (!club.userId === req.user.id) {
      return res.status(401).send("You're not authorized to delete this club");
    }
    await club.destroy();
    res.send({ message: "ok", clubId });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
