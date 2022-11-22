// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('phoneNumber function test', () => {
    expect(functions.isPhoneNumber("858-363-0088")).toBe(true);
});

test('phoneNumber function test', () => {
    expect(functions.isPhoneNumber("613-208-5547")).toBe(true);
});

test('phoneNumber function test', () => {
    expect(functions.isPhoneNumber("8585-63-0768")).toBe(false);
});

test('phoneNumber function test', () => {
    expect(functions.isPhoneNumber("8583630088")).toBe(false);
});

test('isEmail function test', () => {
    expect(functions.isEmail("pmittal@ucsd.edu")).toBe(true);
});

test('isEmail function test', () => {
    expect(functions.isEmail("care@apple.com")).toBe(true);
});

test('isEmail function test', () => {
    expect(functions.isEmail("pmittal@ucsd")).toBe(false);
});

test('isEmail function test', () => {
    expect(functions.isEmail("pmittalucsd.edu")).toBe(false);
});

test('isStrongPassword function test', () => {
    expect(functions.isStrongPassword("password_1234")).toBe(true);
});

test('isStrongPassword function test', () => {
    expect(functions.isStrongPassword("UCSanDiego")).toBe(true);
});

test('isStrongPassword function test', () => {
    expect(functions.isStrongPassword("1234password")).toBe(false);
});

test('isStrongPassword function test', () => {
    expect(functions.isStrongPassword("password@1234")).toBe(false);
});

test('isDate function test', () => {
    expect(functions.isDate("11/20/2022")).toBe(true);
});

test('isDate function test', () => {
    expect(functions.isDate("05/23/2002")).toBe(true);
});

test('isDate function test', () => {
    expect(functions.isDate("2022/20/11")).toBe(false);
});

test('isDate function test', () => {
    expect(functions.isDate("may/23/2002")).toBe(false);
});

test('isHexColor function test', () => {
    expect(functions.isHexColor("#F0F8FF")).toBe(true);
});

test('isHexColor function test', () => {
    expect(functions.isHexColor("#FF69B4")).toBe(true);
});

test('isHexColor function test', () => {
    expect(functions.isHexColor("#565656ABCD")).toBe(false);
});

test('isHexColor function test', () => {
    expect(functions.isHexColor("#FF$9B4")).toBe(false);
});
