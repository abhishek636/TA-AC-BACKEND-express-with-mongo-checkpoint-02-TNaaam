var express = require("express");
var router = express.Router();
var Event = require("../models/event");
var Remark = require("../models/remark");


//fetch the event
router.get("/", (req, res, next) => {
  Event.find({}, (err, events) => {
    if (err) return next(err);
    res.render("events.ejs", { events: events });
  });
});

//Saving data
router.post("/", (req, res, next) => {
  Event.create(req.body, (err, createdevent) => {
    if (err) return next(err);
    res.redirect("/events");
  });
});

//fetch only one event
router.get("/:id", (req, res, next) => {
  var id = req.params.id;
  Event.findById(id)
    .populate("remarks")
    .exec((err, event) => {
      if (err) return next(err);
      console.log(event);
      res.render("eventDetails", { event });
    });
});

//updating event form
router.get("/:id/edit", (req, res, next) => {
  var id = req.params.id;
  Event.findById(id, (err, event) => {
    if (err) return next(err);
    res.render("updateEvent", { event: event });
  });
});

//post update event
router.post("/:id", (req, res, next) => {
  var id = req.params.id;
  console.log(req.body)
  Event.findByIdAndUpdate(id, req.body, (err, updatedevent) => {
    if (err) return next(err);
    res.redirect("/events/" + id);
  });
});

//delete event
router.get("/:id/delete", (req, res, next) => {
  var id = req.params.id;
  Event.findByIdAndDelete(id, (err, event) => {
    if (err) return next(err);
    Remark.deleteMany({ eventId: event.id }, (err, info) => {
      if (err) return next(err);
      Remark.remove({ eventId: event.id }, (err) => {
        if (err) return next(err);
        res.redirect("/events");
      });
    });
  });
});

//increment likes
router.get("/:id/inc", (req, res, next) => {
  var id = req.params.id;
  Event.findByIdAndUpdate(id, { $inc: { likes: 1 } }, (err, event) => {
    if (err) return next(err);
    res.redirect("/events/" + id);
  });
});

//adding remarks
router.post("/:id/remarks", (req, res, next) => {
  var id = req.params.id;
  req.body.eventId = id;
  Remark.create(req.body, (err, remark) => {
    if (err) return next(err);
    Event.findByIdAndUpdate(
      id,
      { $push: { remarks: remark._id } },
      (err, updatedevent) => {
        if (err) return next(err);
        res.redirect("/events/" + id);
      }
    );
  });
});



module.exports = router;