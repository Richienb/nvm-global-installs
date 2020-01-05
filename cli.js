#!/usr/bin/env node

"use strict"

const ora = require("ora")
const meow = require("meow")
const { asTree: treeify } = require("treeify")
const _ = require("lodash")
const chalk = require("chalk")

const nodeVersion = require("./lib/node-version")
const ngi = require(".")

const { input: args } = meow(`
    Usage
      $ ngi <version?>
`)

const spinner = ora("Traversing dependencies").start()

module.exports = (async () => {
    const versions = await ngi(args.length === 0 ? undefined : args)
    const nv = await nodeVersion()
    console.log(_
        .chain(versions)
        .mapKeys((_, version) => {
            if (version === nv) return chalk.bold(version)
            return version
        })
        .thru(treeify)
        .thru((value) => "\n" + value)
        .value())
    spinner.stop()
})()

