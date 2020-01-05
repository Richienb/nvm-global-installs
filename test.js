import test from "ava"
import is from "@sindresorhus/is"
import ngi from "."

test("main", async (t) => {
    t.true(is.plainObject(await ngi()))
})
