# SDV503-W12
Node.js readline

# Key ideas
- `readline.createInterface({ input, output })` wires the module to the terminal.
- `rl.question(text, callback)` prints `text`, waits for Enter, then calls `callback(answer)`.
- `rl.close()` releases the terminal so the program can exit.