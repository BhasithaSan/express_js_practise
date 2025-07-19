
const {db} =require("../Config/db.js");


async function getUserById(userId) {
  
    const [rows] = await db.query("SELECT * FROM  app_user WHERE id = ?",[userId])

  console.log(`Fetching user with ID: ${userId}`);
  return rows[0] || null;
}

async function createUser(user){
const [result] = await db.query(
      "INSERT INTO app_user (id, name, email, city) VALUES (?, ?, ?, ?)",
      [user.id, user.name, user.email, user.city]
    );

    if (result.affectedRows === 1) {
      console.log("User created successfully.");
      return { success: true, userId: user.id };
    } else {
      throw new Error("Insert failed, no rows affected.");
    }
}


module.exports = {getUserById,createUser};