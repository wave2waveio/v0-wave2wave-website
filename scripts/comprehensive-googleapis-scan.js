const fs = require("fs")
const path = require("path")

console.log("=== COMPREHENSIVE GOOGLEAPIS DEPENDENCY SCAN ===\n")

// Function to recursively scan directories
function scanDirectory(dir, results = []) {
  try {
    const items = fs.readdirSync(dir)

    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)

      // Skip node_modules, .next, .git directories
      if (stat.isDirectory() && !["node_modules", ".next", ".git", "dist", "build"].includes(item)) {
        scanDirectory(fullPath, results)
      } else if (stat.isFile()) {
        // Check specific file types
        const ext = path.extname(item).toLowerCase()
        if ([".js", ".jsx", ".ts", ".tsx", ".json", ".mjs", ".cjs"].includes(ext)) {
          results.push(fullPath)
        }
      }
    }
  } catch (error) {
    console.log(`Error scanning directory ${dir}: ${error.message}`)
  }

  return results
}

// Get all relevant files
const filesToScan = scanDirectory(process.cwd())

console.log(`Scanning ${filesToScan.length} files for googleapis dependencies...\n`)

let foundIssues = false
const issuesByFile = {}

// Scan each file
filesToScan.forEach((filePath) => {
  try {
    const content = fs.readFileSync(filePath, "utf8")
    const relativePath = path.relative(process.cwd(), filePath)
    const issues = []

    // Check for various googleapis patterns
    const patterns = [
      { pattern: /googleapis/gi, description: "googleapis reference" },
      { pattern: /google-auth/gi, description: "google-auth reference" },
      { pattern: /from\s+['"]googleapis['"]|require$$['"]googleapis['"]$$/gi, description: "googleapis import" },
      {
        pattern: /from\s+['"]google-auth-library['"]|require$$['"]google-auth-library['"]$$/gi,
        description: "google-auth-library import",
      },
      { pattern: /google\.auth\./gi, description: "google.auth usage" },
      { pattern: /google\.sheets\./gi, description: "google.sheets usage" },
      { pattern: /google\.drive\./gi, description: "google.drive usage" },
      { pattern: /GoogleAuth/gi, description: "GoogleAuth class usage" },
      { pattern: /@google-cloud/gi, description: "Google Cloud SDK reference" },
      { pattern: /gapi\./gi, description: "Google API client library usage" },
    ]

    patterns.forEach(({ pattern, description }) => {
      const matches = content.match(pattern)
      if (matches) {
        issues.push({
          description,
          count: matches.length,
          matches: matches.slice(0, 3), // Show first 3 matches
        })
      }
    })

    // Check for commented out googleapis code
    const commentedMatches = content.match(/\/\*[\s\S]*?googleapis[\s\S]*?\*\/|\/\/.*googleapis/gi)
    if (commentedMatches) {
      issues.push({
        description: "commented googleapis code",
        count: commentedMatches.length,
        matches: commentedMatches.slice(0, 2),
      })
    }

    if (issues.length > 0) {
      foundIssues = true
      issuesByFile[relativePath] = issues
    }
  } catch (error) {
    console.log(`Error reading ${filePath}: ${error.message}`)
  }
})

// Report results
if (foundIssues) {
  console.log("❌ GOOGLEAPIS DEPENDENCIES FOUND:\n")

  Object.entries(issuesByFile).forEach(([file, issues]) => {
    console.log(`📁 ${file}:`)
    issues.forEach((issue) => {
      console.log(`   - ${issue.description} (${issue.count} occurrences)`)
      if (issue.matches.length > 0) {
        issue.matches.forEach((match) => {
          console.log(`     "${match.trim()}"`)
        })
      }
    })
    console.log()
  })

  console.log("RECOMMENDATIONS:")
  console.log("1. Remove or comment out all googleapis imports")
  console.log("2. Remove googleapis from package.json dependencies")
  console.log("3. Update pnpm-lock.yaml by running: rm pnpm-lock.yaml && pnpm install")
  console.log("4. Check for dynamic imports that might still reference googleapis")
} else {
  console.log("✅ NO GOOGLEAPIS DEPENDENCIES FOUND")
  console.log("The codebase appears to be clean of googleapis references.")
}

// Additional checks
console.log("\n=== ADDITIONAL CHECKS ===")

// Check package.json specifically
try {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"))
  const allDeps = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
    ...packageJson.peerDependencies,
    ...packageJson.optionalDependencies,
  }

  const googleDeps = Object.keys(allDeps).filter(
    (dep) => dep.includes("google") || dep.includes("gapi") || dep.includes("auth"),
  )

  if (googleDeps.length > 0) {
    console.log("📦 Package.json dependencies with 'google' or 'auth':")
    googleDeps.forEach((dep) => console.log(`   - ${dep}: ${allDeps[dep]}`))
  } else {
    console.log("📦 No Google-related dependencies in package.json")
  }
} catch (error) {
  console.log("📦 Error reading package.json:", error.message)
}

// Check lock file
try {
  if (fs.existsSync("pnpm-lock.yaml")) {
    const lockContent = fs.readFileSync("pnpm-lock.yaml", "utf8")
    const googleMatches = lockContent.match(/googleapis|google-auth|@google/gi)

    if (googleMatches) {
      console.log(`🔒 pnpm-lock.yaml contains ${googleMatches.length} Google API references`)
      console.log("   Run: rm pnpm-lock.yaml && pnpm install")
    } else {
      console.log("🔒 pnpm-lock.yaml is clean of Google API references")
    }
  } else {
    console.log("🔒 No pnpm-lock.yaml found")
  }
} catch (error) {
  console.log("🔒 Error reading pnpm-lock.yaml:", error.message)
}

console.log("\n=== SCAN COMPLETE ===")
