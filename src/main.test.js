import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./main.js";

test("capitalize should make first letter uppercase",() => {
    expect(capitalize("max")).toBe("Max")
})

test("capitalize should make first letter uppercase",() => {
    expect(capitalize("batMax")).toBe("BatMax")
})

test("capitalize should throw error if input is not a string or input is empty",() => {
    expect(() => capitalize()).toThrow(new Error("A word is needed to enter or it must be string"));
})

test("reverseString should reverse the string",() => {
    expect(reverseString("max")).toBe("xam")
})

test("reverseString should reverse the string",() => {
    expect(reverseString("batMax")).toBe("xaMtab")
})

test("reverseString should throw error if input is not a string or input is empty",() => {
    expect(() => reverseString()).toThrow(new Error("A word is needed to enter or it must be string"));
})

test("calculator should answer correctly ",() => {
    expect(calculator.add(5,5)).toBe(10)
})

test("calculator should answer correctly ",() => {
    expect(calculator.subtract(5,5)).toBe(0)
})

test("calculator should answer correctly ",() => {
    expect(calculator.divide(5,5)).toBe(1)
})

test("calculator should answer correctly ",() => {
    expect(calculator.multiply(5,5)).toBe(25)
})

test("calculator should throw error if input isn't number or empty",() => {
    expect(() => calculator.add()).toThrow(new Error("input is empty or is not a num"))
    expect(() => calculator.subtract()).toThrow(new Error("input is empty or is not a num"))
    expect(() => calculator.divide()).toThrow(new Error("input is empty or is not a num"))
    expect(() => calculator.multiply()).toThrow(new Error("input is empty or is not a num"))
})

test("caesarCipher should encrypt the string",()=> {
    expect(caesarCipher("xyz",3)).toBe("abc")
})

test("caesarCipher should encrypt the string",()=> {
    expect(caesarCipher("HeLLo",3)).toBe("KhOOr")
})

test("caesarCipher should encrypt the string",()=> {
    expect(caesarCipher("Hello, World!",3)).toBe("Khoor, Zruog!")
})

test("caesarCipher should throw error if input is not a string or input is empty",() => {
    expect(() => caesarCipher()).toThrow(new Error("A word is needed to enter or it must be string"));
})

test("analyzeArray should give an obj of min max avg and length",()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
   average: 4,
   min: 1,
   max: 8,
   length: 6
})
})