const { execSync } = require("child_process")

try {
  console.log("Removing googleapis from pnpm-lock.yaml...")

  // Remove the lock file to force a clean install
  try {
    execSync("rm -f pnpm-lock.yaml", { stdio: "inherit" })
    console.log("Removed existing pnpm-lock.yaml")
  } catch (error) {
    console.log("No existing pnpm-lock.yaml found")
  }

  // Reinstall dependencies to generate new lock file
  console.log("Running pnpm install to generate new lock file...")
  execSync("pnpm install", { stdio: "inherit" })

  console.log("✅ Successfully updated pnpm-lock.yaml without googleapis!")
  console.log("The lock file now reflects only the dependencies currently in package.json")
} catch (error) {
  console.error("Error updating lock file:", error.message)
  process.exit(1)
}
