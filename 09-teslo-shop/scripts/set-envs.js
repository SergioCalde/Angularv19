const { writeFileSync, mkdirSync } = require('fs');
const dotenv = require('dotenv');

require('dotenv').config();
const path = require('path');

// Carga manual del archivo .env
const envConfig = dotenv.parse(require('fs').readFileSync('.env', 'utf8'));

const targetPath = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

// Generar el contenido TypeScript
const envFileContent = `
// ⚠️ Auto-generated file. Do not edit manually.
export const environment = {
${Object.entries(envConfig)
  .map(([key, value]) => `  ${key}: "${value.replace(/"/g, '\\"')}"`)
  .join(',\n')}
};
`;


mkdirSync('./src/environments', { recursive: true });
writeFileSync(targetPath, envFileContent);
writeFileSync(targetPathDev, envFileContent);

console.log('✅ Environment files generated successfully!');