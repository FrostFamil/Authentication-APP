const admin = require('firebase-admin');


module.exports = function(req, res) {

  // Verify the user provided a phone
  if (!req.body.phone){
    return res.status(422).send({ error: 'Bad Input' });
  }

  // Format phone number to remove dashes and parens
  //const phone = String(req.body.phone).replace(/[^\d]/g, "");
  const phone = String(req.body.phone);

  // Create new user Account based on that phone number
  admin.auth().createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err }));


  //Respond to user request, saying account was made
}
