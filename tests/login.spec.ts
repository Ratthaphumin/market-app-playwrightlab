import { test, expect } from '@playwright/test';
test('TC04 ใส่เบอร์น้อยกว่า 10 หลัก', async ({ page }) => {
// 1. เปิดหน้า Login
await page.goto('http://localhost:5173/');
// 2. กรอกหมายเลขโทรศัพท์
await page
.getByLabel('หมายเลขโทรศัพท์มือถือ')
.fill('080000000');
// 3. กรอกรหัสผ่าน
await page
.getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
.fill('uCrwVaBW39o_0G0Q5QwAVrqr');
// 4. กดปุ่มเข้าสู่ระบบ
await page
.getByRole('button', { name: 'เข้าสู่ระบบ' })
.click();

const phoneInput = page.getByLabel('หมายเลขโทรศัพท์มือถือ');
// 5. ดึงค่า validationMessage ออกมา
const isTooShort = await phoneInput.evaluate((el: HTMLInputElement) => el.validity.patternMismatch);
  expect(isTooShort).toBe(true);
})

test('TC05 Login เบอร์ไม่ขึ้นต้นด้วย 0', async ({ page }) => {
// 1. เปิดหน้า Login
await page.goto('http://localhost:5173/');
// 2. กรอกหมายเลขโทรศัพท์
await page
.getByLabel('หมายเลขโทรศัพท์มือถือ')
.fill('1800000000');
// 3. กรอกรหัสผ่าน
await page
.getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
.fill('uCrwVaBW39o_0G0Q5QwAVrqr');
// 4. กดปุ่มเข้าสู่ระบบ
await page
.getByRole('button', { name: 'เข้าสู่ระบบ' })
.click();
const phoneInput = page.getByLabel('หมายเลขโทรศัพท์มือถือ');
// 5. ดึงค่า validationMessage ออกมา
const isTooShort = await phoneInput.evaluate((el: HTMLInputElement) => el.validity.patternMismatch);
  expect(isTooShort).toBe(true);
})

test('TC06 Login ใส่ pws ตำกว่า 8 ตัว', async ({ page }) => {
// 1. เปิดหน้า Login
await page.goto('http://localhost:5173/');
// 2. กรอกหมายเลขโทรศัพท์
await page
.getByLabel('หมายเลขโทรศัพท์มือถือ')
.fill('0800000002');
// 3. กรอกรหัสผ่าน
await page
.getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
.fill('1234567');
// 4. กดปุ่มเข้าสู่ระบบ
await page
.getByRole('button', { name: 'เข้าสู่ระบบ' })
.click();

const passInput = page.getByPlaceholder('อย่างน้อย 8 ตัวอักษร');
// 5. ดึงค่า validationMessage ออกมา
const isTooShort = await passInput.evaluate((el: HTMLInputElement) => el.validity.tooShort);
  expect(isTooShort).toBe(true);
})