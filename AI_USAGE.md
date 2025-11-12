โปรเจกต์ Mini Task API นี้ได้รับความช่วยเหลือจาก AI (Google Gemini)

## สิ่งที่ใช้ AI ช่วย 

 **การสร้างโครงสร้างโปรเจกต์เบื้องต้น:**
    * AI ช่วยในการวางโครงสร้างโฟลเดอร์และไฟล์พื้นฐาน (เช่น /src, /config, /middleware, /routes, /controllers) เพื่อเริ่มต้นโปรเจกต์

## สิ่งที่ทีมทําเองทั้งหมด 

 **การออกแบบตรรกะธุรกิจ (Business Logic):** ทีมเป็นผู้ออกแบบ Requirement ทั้งหมด (เช่น v1 vs v2, การกำหนดสิทธิ์ Admin/User, ABAC)
 **การเขียนโค้ด (Implementation):** ทีมเป็นผู้ "ลงมือ" เขียนโค้ดทั้งหมดสำหรับ Controllers, Middleware (Auth, RBAC, ABAC, Idempotency, Rate Limit), และ Logic การเชื่อมต่อ Database
 **การ Debug และ Troubleshooting:** ทีมเป็นผู้ค้นหาและแก้ไข Bug ทั้งหมด (เช่น ปัญหาการเชื่อมต่อ, Error Handling, Race Condition) ด้วยตนเอง
 **การทดสอบทุกกรณี (Testing):** ทีมเป็นผู้ "ลงมือ" ทดสอบทุก Endpoint ใน Postman ด้วยตนเอง เพื่อ "ยืนยัน" ว่าฟีเจอร์ทั้งหมดทำงานได้ถูกต้องตามที่ออกแบบไว้

