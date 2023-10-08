const fs = require('fs');
const path = require('path');

const main = () => {
  const filePath = path.join(__dirname,'../../index.d.ts');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const leftBracket = fileContent.indexOf('[');
  const rightBracket = fileContent.indexOf(']');
  const materialIcons = fileContent
  .substring(leftBracket + 1, rightBracket)
  .replaceAll(' ', '')
  .replaceAll('\n', '')
  .replaceAll('"', '')
  .split(',');

  const lines = [];
  const formattedIcons = materialIcons.map(icon => `  "${icon}" = "${icon}"`);

  // type = list of all icons/sybmols
  lines.push(`export declare enum MaterialSymbols {`);
  lines.push(formattedIcons.join(',\n'));
  lines.push('}');
  lines.push('');

  lines.push('');
  const finalLines = lines.join('\n');

  fs.writeFile(filePath, finalLines, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written successfully');
  });
}

main()
