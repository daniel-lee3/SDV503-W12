# SDV503-W12
Node.js readline practice

## Key ideas
- `readline.createInterface({ input, output })` wires the module to the terminal.
- `rl.question(text, callback)` prints `text`, waits for Enter, then calls `callback(answer)`.
- `rl.close()` releases the terminal so the program can exit.

- Anything the user types is a **string**. Use `number(...)` (or `parseInt`,`parseFloat`) to turn it into a number.
- `Number.isNaN(value) is the safe way to check that a conversion worked.

- Callbacks need to be **nested** so each question waits for the previous one. This pattern is sometimes called "callback hell".
- Example 10 shows how `async/await` makes this much cleaner.

- `fs.createReadStream(path)` opens a file as a stream - data flows in chunks instead of being loaded all at once.
- `crlfDelay: Infinity` correctly handles Widnows line endings (\r\n).
- `rl.on('line', cb)` is the standard event-driven way to consume lines.
- `rl.on('close', cb)` runs when the file has been fully read