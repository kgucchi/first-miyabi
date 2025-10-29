/**
 * First Miyabi Project
 * Autonomous development powered by Agentic OS
 */

console.log('Hello from Miyabi Agentic OS!');

export function main() {
  console.log('First Miyabi is running...');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
