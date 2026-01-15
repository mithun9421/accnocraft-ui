/**
 * ANNOCRAFT UI — CLI ADD COMMAND
 *
 * Adds components to user's project (copy-paste model)
 *
 * Usage:
 *   npx annocraft-ui add button
 *   npx annocraft-ui add button dialog input
 */

import * as fs from "fs";
import * as path from "path";

export interface AddCommandOptions {
  components: string[];
  destination?: string;
  dryRun?: boolean;
  verbose?: boolean;
}

interface ComponentFile {
  path: string;
  content: string;
  type: "component" | "meta" | "styles" | "examples";
}

const COMPONENT_MAP: Record<string, string[]> = {
  button: [
    "components/button/button.tsx",
    "components/button/button.meta.ts",
    "components/button/button.styles.ts",
    "components/button/button.examples.tsx",
  ],
  dialog: [
    "components/dialog/dialog.tsx",
    "components/dialog/dialog.meta.ts",
  ],
  input: [
    "components/input/input.tsx",
    "components/input/input.meta.ts",
    "components/input/input.styles.ts",
  ],
};

export async function addCommand(options: AddCommandOptions): Promise<void> {
  const { components, destination = "./components", dryRun = false, verbose = false } = options;

  console.log("🎨 Annocraft UI — Add Components\n");

  // Validate components
  const invalidComponents = components.filter((comp) => !COMPONENT_MAP[comp]);
  if (invalidComponents.length > 0) {
    console.error(`❌ Invalid components: ${invalidComponents.join(", ")}`);
    console.log(`Available: ${Object.keys(COMPONENT_MAP).join(", ")}`);
    process.exit(1);
  }

  // Collect all files to copy
  const filesToCopy: ComponentFile[] = [];

  for (const component of components) {
    const files = COMPONENT_MAP[component];

    for (const file of files) {
      const sourcePath = path.join(__dirname, "..", file);
      const destPath = path.join(destination, path.basename(path.dirname(file)), path.basename(file));

      // Read file content (in real implementation, this would read from package)
      const content = `// ${file}\n// This would contain the actual component code`;

      filesToCopy.push({
        path: destPath,
        content,
        type: file.includes("meta") ? "meta" :
              file.includes("styles") ? "styles" :
              file.includes("examples") ? "examples" : "component",
      });
    }
  }

  // Display plan
  console.log(`📦 Components to add: ${components.join(", ")}\n`);

  if (verbose) {
    console.log("Files:");
    filesToCopy.forEach((file) => {
      console.log(`  ${file.type.padEnd(10)} → ${file.path}`);
    });
    console.log();
  }

  if (dryRun) {
    console.log("🔍 Dry run — no files written");
    return;
  }

  // Copy files
  let successCount = 0;
  let skipCount = 0;

  for (const file of filesToCopy) {
    const dir = path.dirname(file.path);

    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Check if file already exists
    if (fs.existsSync(file.path)) {
      console.log(`⏭️  Skip (exists): ${file.path}`);
      skipCount++;
      continue;
    }

    // Write file
    fs.writeFileSync(file.path, file.content, "utf-8");
    console.log(`✅ Added: ${file.path}`);
    successCount++;
  }

  console.log(`\n✨ Done! Added ${successCount} files (${skipCount} skipped)\n`);

  // Post-install instructions
  console.log("📝 Next steps:");
  console.log("  1. Review the copied files");
  console.log("  2. Install required dependencies:");
  console.log("     npm install @radix-ui/react-dialog class-variance-authority");
  console.log("  3. Configure Tailwind CSS (see docs)\n");
}

/**
 * Parse CLI arguments
 */
export function parseAddArgs(args: string[]): AddCommandOptions {
  const options: AddCommandOptions = {
    components: [],
    dryRun: false,
    verbose: false,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--verbose" || arg === "-v") {
      options.verbose = true;
    } else if (arg === "--dest" || arg === "-d") {
      options.destination = args[++i];
    } else if (!arg.startsWith("-")) {
      options.components.push(arg.toLowerCase());
    }
  }

  return options;
}
