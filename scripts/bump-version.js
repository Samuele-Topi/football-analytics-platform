const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const filePaths = [
  path.join(__dirname, '../package.json'),
  path.join(__dirname, '../client/package.json'),
  path.join(__dirname, '../server/pyproject.toml')
];

function updateVersion(filePath, newVersion) {
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: ${filePath} not found.`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  const ext = path.extname(filePath);

  if (ext === '.json') {
    const json = JSON.parse(content);
    console.log(`Updating ${path.basename(filePath)}: ${json.version} -> ${newVersion}`);
    json.version = newVersion;
    content = JSON.stringify(json, null, 2) + '\n';
  } else if (ext === '.toml') {
    console.log(`Updating ${path.basename(filePath)}...`);
    // Simple regex for TOML version replacement in [tool.poetry] section
    // detailed logic might be needed for robust TOML parsing, but this suffices for standard poetry files
    const versionRegex = /(version\s*=\s*\")([^\"]+)(\")/; 
    const match = content.match(versionRegex);
    if (match) {
        console.log(`Updating ${path.basename(filePath)}: ${match[2]} -> ${newVersion}`);
        content = content.replace(versionRegex, `$1${newVersion}$3`);
    } else {
        console.warn(`Could not find version string in ${filePath}`);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

rl.question('Enter new version (e.g., 1.4.0): ', (version) => {
  if (!version) {
    console.error('Version is required.');
    rl.close();
    process.exit(1);
  }

  console.log(`\nBumping version to ${version}...\n`);
  
  filePaths.forEach(fp => updateVersion(fp, version));

  console.log('\nVersion bump complete. Don\'t forget to commit!');
  rl.close();
});
