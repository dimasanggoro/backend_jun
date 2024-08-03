const db = require("../config/db");

const Event = {
  create: (eventData, callback) => {
    const sql = "INSERT INTO events (user_id, name, date, location) VALUES (?, ?, ?, ?)";
    db.query(sql, [eventData.user_id, eventData.name, eventData.date, eventData.location], callback);
  },
  findByUserId: (userId, callback) => {
    const sql = "SELECT * FROM events WHERE user_id = ?";
    db.query(sql, [userId], callback);
  },
  update: (id, eventData, callback) => {
    const sql = "UPDATE events SET name = ?, date = ?, location = ? WHERE id = ?";
    db.query(sql, [eventData.name, eventData.date, eventData.location, id], callback);
  },
  delete: (id, callback) => {
    const sql = "DELETE FROM events WHERE id = ?";
    db.query(sql, [id], callback);
  },
};

module.exports = Event;
