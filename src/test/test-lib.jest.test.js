const { TextEncoder, TextDecoder } = require("../..")

describe("text encode/decode", () => {
  const data = Uint8Array.from([
    104,
    101,
    108,
    108,
    111,
    32,
    119,
    111,
    114,
    108,
    100,
  ])

  test("can encode text", () => {
    const bytes = new TextEncoder().encode("hello world")
    expect([...bytes]).toEqual([...data])
  })

  test("can decode text", () => {
    const text = new TextDecoder().decode(data)
    expect(text).toEqual("hello world")
  })
})
