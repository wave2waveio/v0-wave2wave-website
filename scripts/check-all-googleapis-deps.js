const fs = require("fs")
const path = require("path")

function checkFile(filePath, fileName) {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8")
      const lines = content.split("\n")
      const googleLines = []

      lines.forEach((line, index) => {
        if (
          line.toLowerCase().includes("google") &&
          (line.includes("import") || line.includes("require") || line.includes("from"))
        ) {
          googleLines.push(`  Line ${index + 1}: ${line.trim()}`)
        }
      })

      if (googleLines.length > 0) {
        console.log(`\n📄 ${fileName}:`)
        googleLines.forEach((line) => console.log(line))
      }
    }
  } catch (error) {
    console.log(`Error reading ${fileName}: ${error.message}`)
  }
}

console.log("🔍 Checking for googleapis imports/requires in all files...")

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
    console.log("\n❌ Found googleapis dependencies in package.json:")
    googleDeps.forEach((dep) => console.log(`  - ${dep}: ${allDeps[dep]}`))
  } else {
    console.log("\n✅ No googleapis dependencies in package.json")
  }
}

// Check specific files that might have googleapis imports
const filesToCheck = [
  { path: "app/contact/actions.ts", name: "Contact Actions" },
  { path: "app/contact/page.tsx", name: "Contact Page" },
  { path: "app/contact/google-integration.ts", name: "Google Integration" },
  { path: "app/layout.tsx", name: "Root Layout" },
  { path: "next.config.mjs", name: "Next Config" },
  { path: "next.config.js", name: "Next Config (JS)" },
]

filesToCheck.forEach((file) => {
  checkFile(file.path, file.name)
})

// Check if there are any other TypeScript/JavaScript files with google imports
function scanDirectory(dir, depth = 0) {
  if (depth > 3) return // Limit recursion depth

  try {
    const items = fs.readdirSync(dir)

    items.forEach((item) => {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory() && !item.startsWith(".") && item !== "node_modules") {
        scanDirectory(fullPath, depth + 1)
      } else if (
        stat.isFile() &&
        (item.endsWith(".ts") || item.endsWith(".tsx") || item.endsWith(".js") || item.endsWith(".jsx"))
      ) {
        const content = fs.readFileSync(fullPath, "utf8")
        if (content.includes("googleapis") || content.includes("google.auth") || content.includes("@google")) {
          console.log(`\n📄 Found googleapis reference in: ${fullPath}`)
          const lines = content.split("\n")
          lines.forEach((line, index) => {
            if (line.includes("googleapis") || line.includes("google.auth") || line.includes("@google")) {
              console.log(`  Line ${index + 1}: ${line.trim()}`)
            }
          })
        }
      }
    })
  } catch (error) {
    // Ignore permission errors
  }
}

console.log("\n🔍 Scanning all TypeScript/JavaScript files for googleapis references...")
scanDirectory(".")

// Check pnpm-lock.yaml
const lockfilePath = path.join(process.cwd(), "pnpm-lock.yaml")
if (fs.existsSync(lockfilePath)) {
  const lockfileContent = fs.readFileSync(lockfilePath, "utf8")

  if (lockfileContent.includes("googleapis")) {
    console.log("\n❌ Found googleapis references in pnpm-lock.yaml")
    const lines = lockfileContent.split("\n")
    lines.forEach((line, index) => {
      if (line.includes("googleapis")) {
        console.log(`  Line ${index + 1}: ${line.trim()}`)
      }
    })
  } else {
    console.log("\n✅ No googleapis references in pnpm-lock.yaml")
  }
} else {
  console.log("\nℹ️  No pnpm-lock.yaml file found")
}

console.log("\n🔍 Checking for any dynamic imports or requires...")
// Check for dynamic imports that might be causing issues
const dynamicImportFiles = ["app/contact/actions.ts"]

dynamicImportFiles.forEach((filePath) => {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8")
    if (content.includes("import(") || content.includes("require(")) {
      console.log(`\n📄 Dynamic imports found in ${filePath}:`)
      const lines = content.split("\n")
      lines.forEach((line, index) => {
        if (line.includes("import(") || line.includes("require(")) {
          console.log(`  Line ${index + 1}: ${line.trim()}`)
        }
      })
    }
  }
})

console.log("\n✅ Scan complete!")
