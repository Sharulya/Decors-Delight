// routes.js
const express = require('express');
const router = express.Router();
const control = require('../controllers/pagesController');
//const script = require("../public/js/script")


  
  // Apply the middleware to all routes
  //router.use(control.checkSession);

  // Apply the middleware to all routes
 // router.use(control.setCacheControlHeaders);

router.post('/register', control.signup);

router.post('/login', control.signin);

router.get('/about', control.about);

router.get('/reviews', control.reviews);

router.post('/reviews/submit-review', control.submitReview);

router.get('/events', control.events);

router.get('/events/book', control.dform);

router.post('/events/submit-booking', control.upload.array('attachments'), control.submitBooking);

router.get('/gifts', control.gifts)

router.get('/gifts/wall', control.wall);

router.get('/gifts/wall/dreamcatcher', control.dream);

router.get('/gifts/wall/painting', control.painting);

router.get('/gifts/wall/led', control.led);

router.get('/gifts/frames', control.frames);

router.get('/gifts/frames/portrait', control.portrait);

router.get('/gifts/frames/resin', control.resin);

router.get('/gifts/frames/mini', control.mini);

router.get('/gifts/hampers', control.hampers);

router.get('/gifts/hampers/combo1', control.combo1);

router.get('/gifts/hampers/combo2', control.combo2);

router.get('/gifts/hampers/combo3', control.combo3);

router.get('/gifts/boards', control.boards);

router.get('/gifts/boards/nameboard', control.nameboard);

router.get('/gifts/boards/quoteboard', control.quoteboard);

router.get('/gifts/poems', control.poems);

router.get('/gifts/poems/customized', control.customized);

router.get('/gifts/poems/magazine', control.magazine);

router.get('/gifts/order', control.gform);

router.post('/gifts/submit-order', control.upload.array('attachments'), control.submitOrder);

router.get('/logout', control.logout);

router.get('/gifts/order-history', control.orderHistoryRoute);

router.get('/events/booking-history', control.bookingHistoryRoute);
  
module.exports = router