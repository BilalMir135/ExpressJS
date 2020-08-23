const express = require('express');
const members = require('../../members');
const uuid = require('uuid');
const router = express.Router();

//Get All members
router.get('/', (req, res) => res.send(members));

//Get single member
router.get('/:id', (req, res) => {
  const found = members.some((member) => member.id === Number(req.params.id));
  if (found) {
    res.send(members.filter((member) => member.id === Number(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with id ${req.params.id}` });
  }
});

//create a member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    age: req.body.age,
    skill: req.body.skill,
  };

  if (!newMember.name && !newMember.age && !newMember.skill) {
    return res
      .status(400)
      .json({ msg: 'Please include a name , age and skill' });
  }

  members.push(newMember);
  //res.json(members);
  res.redirect('/');
});

//update member
router.put('/:id', (req, res) => {
  const found = members.some((member) => member.id === Number(req.params.id));

  if (found) {
    const updateMember = req.body;
    const requireMember = members.filter(
      (member) => member.id === Number(req.params.id)
    )[0];
    requireMember.name = updateMember.name
      ? updateMember.name
      : requireMember.name;
    requireMember.age = updateMember.age ? updateMember.age : requireMember.age;
    requireMember.skill = updateMember.skill
      ? updateMember.skill
      : requireMember.skill;

    res.json({ msg: 'Member Updated', requireMember });
  } else {
    res.status(400).json({ msg: `No member is found with ${req.params.id}` });
  }
});

//delete member
router.delete('/:id', (req, res) => {
  const found = members.some((member) => member.id === Number(req.params.id));

  if (found) {
    res.json({
      msg: `Member with id = ${req.params.id} is deleted`,
      members: members.filter((member) => member.id !== Number(req.params.id)),
    });
  } else {
    res.status(400).json({ msg: `No member is found with ${req.params.id}` });
  }
});

module.exports = router;
