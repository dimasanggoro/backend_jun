const Event = require("../models/eventModel");

exports.createEvent = (req, res) => {
  const { name, date, location } = req.body;
  const user_id = req.userId;
  Event.create({ user_id, name, date, location }, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Event created successfully." });
  });
};

exports.getEvents = (req, res) => {
  const user_id = req.userId;
  Event.findByUserId(user_id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json(results);
  });
};

exports.updateEvent = (req, res) => {
  const { id } = req.params;
  const { name, date, location } = req.body;
  Event.update(id, { name, date, location }, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "Event updated successfully." });
  });
};

exports.deleteEvent = (req, res) => {
  const { id } = req.params;
  Event.delete(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: "Event deleted successfully." });
  });
};
