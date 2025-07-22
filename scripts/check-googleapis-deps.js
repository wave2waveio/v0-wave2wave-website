const fs = require("fs")
const path = require("path")

try {
  console.log("🔍 Checking for googleapis dependencies...")

  // Check package.json
  const packageJsonPath = path.join(process.cwd(), "package.json")
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))

    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
      ...packageJson.peerDependencies,
      ...packageJson.optionalDependencies,
    }

    const googleDeps = Object.keys(allDeps).filter((dep) => dep.includes("google") || dep.includes("googleapis"))

    if (googleDeps.length > 0) {
      console.log("❌ Found googleapis dependencies in package.json:")
      googleDeps.forEach((dep) => console.log(`  - ${dep}: ${allDeps[dep]}`))
    } else {
      console.log("✅ No googleapis dependencies found in package.json")
    }
  }

  // Check if pnpm-lock.yaml exists and contains googleapis
  const lockfilePath = path.join(process.cwd(), "pnpm-lock.yaml")
  if (fs.existsSync(lockfilePath)) {
    const lockfileContent = fs.readFileSync(lockfilePath, "utf8")

    if (lockfileContent.includes("googleapis")) {
      console.log("❌ Found googleapis references in pnpm-lock.yaml")
      console.log("   Run the update-lockfile script to clean this up")
    } else {
      console.log("✅ No googleapis references found in pnpm-lock.yaml")
    }
  } else {
    console.log("ℹ️  No pnpm-lock.yaml file found")
  }

  console.log("\n📋 Current dependencies in package.json:")
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"))
  Object.keys(packageJson.dependencies || {}).forEach((dep) => {
    console.log(`  - ${dep}`)
  })
} catch (error) {
  console.error("Error checking dependencies:", error.message)
}
