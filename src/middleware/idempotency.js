const db = require('../config/db');

const idempotencyCheck = async (req, res, next) => {
const idempotencyKey = req.headers['idempotency-key'];
if (!idempotencyKey) {
 return next(); 
}

   const ownerId = req.user.userId;

   try {


    await db.query(
    'INSERT INTO idempotency_keys (id, ownerId, responseStatus) VALUES (?, ?, ?)',
     [idempotencyKey, ownerId, 409] 
 );


    req.idempotencyKey = idempotencyKey;
    console.log(`[Idempotency] Key: ${idempotencyKey} (ใหม่) -> จองสำเร็จ`);
     return next();

   } catch (error) {

      if (error.code === 'ER_DUP_ENTRY') {
       console.log(`[Idempotency] Key: ${idempotencyKey} (ซ้ำ) -> ER_DUP_ENTRY`);

    try {
    const [rows] = await db.query(
    'SELECT * FROM idempotency_keys WHERE id = ? AND ownerId = ?',
      [idempotencyKey, ownerId]
    );

       if (rows.length === 0) {
      return next(error); 
       }

      const storedResponse = rows[0];


      if (storedResponse.responseStatus === 409) {
        console.log(`[Idempotency] Key: ${idempotencyKey} (ซ้ำ) -> กำลังประมวลผล`);
        return res.status(409).json({ error: 'Conflict: Request in progress' });
      }


        console.log(`[Idempotency] Key: ${idempotencyKey} (ซ้ำ) -> ส่ง Response เก่า`);
        return res.status(storedResponse.responseStatus)
                 .json(JSON.parse(storedResponse.responseBody));

 } catch (selectError) {
 return next(selectError);
}
 }

 return next(error);
 }
};

module.exports = { idempotencyCheck };