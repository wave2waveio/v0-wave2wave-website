const { execSync } = require("child_process")

try {
  console.log("Running pnpm install...")
  execSync("pnpm install", { stdio: "inherit" })
  console.log("Dependencies installed successfully!")
} catch (error) {
  console.error("Error installing dependencies:", error.message)
  process.exit(1)
}
