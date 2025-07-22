const fs = require("fs")
const path = require("path")

console.log("=== DETAILED PREVIEW DEBUG ===\n")

// Check if this is running in Next.js environment
console.log("Environment check:")
console.log("- Node version:", process.version)
console.log("- Platform:", process.platform)
console.log("- CWD:", process.cwd())

// Check package.json
try {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"))
  console.log("\nPackage.json check:")
  console.log("- Name:", packageJson.name)
  console.log("- Next.js version:", packageJson.dependencies?.next)
  console.log("- React version:", packageJson.dependencies?.react)

  // Check for problematic dependencies
  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies }
  const problematicDeps = Object.keys(deps).filter(
    (dep) =>
      dep.includes("googleapis") ||
      dep.includes("google-auth") ||
      dep === "fs" ||
      dep === "path" ||
      dep === "child_process",
  )

  if (problematicDeps.length > 0) {
    console.log("- ⚠️  Problematic dependencies found:", problematicDeps)
  } else {
    console.log("- ✅ No problematic dependencies found")
  }
} catch (error) {
  console.log("- ❌ Error reading package.json:", error.message)
}

// Check next.config.mjs
try {
  const nextConfig = fs.readFileSync("next.config.mjs", "utf8")
  console.log("\nNext.js config check:")
  console.log("- Config exists: ✅")
  if (nextConfig.includes("ignoreBuildErrors: true")) {
    console.log("- TypeScript errors ignored: ✅")
  }
  if (nextConfig.includes("ignoreDuringBuilds: true")) {
    console.log("- ESLint errors ignored: ✅")
  }
} catch (error) {
  console.log("\nNext.js config check:")
  console.log("- ❌ Error reading next.config.mjs:", error.message)
}

// Check key files for syntax errors
const filesToCheck = ["app/layout.tsx", "app/page.tsx", "app/contact/page.tsx", "app/contact/actions.ts"]

console.log("\nFile syntax check:")
filesToCheck.forEach((file) => {
  try {
    const content = fs.readFileSync(file, "utf8")

    // Basic syntax checks
    const issues = []

    // Check for unmatched brackets
    const openBrackets = (content.match(/\{/g) || []).length
    const closeBrackets = (content.match(/\}/g) || []).length
    if (openBrackets !== closeBrackets) {
      issues.push(`Unmatched brackets: ${openBrackets} open, ${closeBrackets} close`)
    }

    // Check for unmatched parentheses
    const openParens = (content.match(/\(/g) || []).length
    const closeParens = (content.match(/\)/g) || []).length
    if (openParens !== closeParens) {
      issues.push(`Unmatched parentheses: ${openParens} open, ${closeParens} close`)
    }

    // Check for googleapis imports
    if (content.includes("googleapis") || content.includes("google-auth")) {
      issues.push("Contains googleapis imports")
    }

    // Check for Node.js specific imports that might not work in browser
    const nodeImports = content.match(/import.*['"](?:fs|path|child_process|os|crypto)['"];?/g)
    if (nodeImports) {
      issues.push(`Node.js imports: ${nodeImports.join(", ")}`)
    }

    if (issues.length === 0) {
      console.log(`- ${file}: ✅`)
    } else {
      console.log(`- ${file}: ⚠️  ${issues.join("; ")}`)
    }
  } catch (error) {
    console.log(`- ${file}: ❌ ${error.message}`)
  }
})

// Check for lock files
console.log("\nLock file check:")
;["package-lock.json", "yarn.lock", "pnpm-lock.yaml"].forEach((lockFile) => {
  if (fs.existsSync(lockFile)) {
    console.log(`- ${lockFile}: exists`)
    if (lockFile === "pnpm-lock.yaml") {
      try {
        const content = fs.readFileSync(lockFile, "utf8")
        if (content.includes("googleapis")) {
          console.log("  ⚠️  Contains googleapis references")
        } else {
          console.log("  ✅ No googleapis references")
        }
      } catch (error) {
        console.log("  ❌ Error reading lock file")
      }
    }
  }
})

console.log("\n=== END DEBUG ===")
