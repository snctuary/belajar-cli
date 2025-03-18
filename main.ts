import { TextLineStream } from "@std/streams/text-line-stream";

const input = Deno.stdin.readable.pipeThrough(new TextDecoderStream())
  .pipeThrough(new TextLineStream());

console.log('Welcome!! Let\'s start with "hello"\n  Type: "bye" to exit\n');
await Deno.stdout.write(new TextEncoder().encode("> "));

for await (const line of input) {
  switch (line) {
    case "hello": {
      console.log("HIIII!!! ^o^");
      break;
    }
    case "bye": {
      console.log("Goodbye!");
      Deno.exit(0);
    }
  }
  await Deno.stdout.write(new TextEncoder().encode("> "));
}
