const admin = require("firebase-admin");;

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nexa-trust-bank-default-rtdb.firebaseio.com"
});

const adminUid = process.env.ADMIN_UID;

// Set custom claim for admin role
const setAdminCustomClaim = async (uid) => {
  try {
    await admin.auth().setCustomUserClaims(uid, { admin: true });
    console.log("Admin custom claim set successfully");
    
    await admin.database().ref(`users/${uid}/role`).set('admin');
    console.log("User role set to admin successfully in the database");
  } catch (error) {
    console.error("Error setting admin custom claim:", error);
  }
};

setAdminCustomClaim(adminUid);
