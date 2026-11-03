#!/usr/bin/env node
// Auditoria de sintaxe das fichas importadas pelo catálogo.
// Execute: node scripts/verificar-sintaxe-fichas.mjs
import { readFileSync, existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = resolve(root, 'dados/orquideas/index.js');
const index = readFileSync(indexPath, 'utf8');
const names = [...index.matchAll(/from\s+["']\.\/([^"']+\.js)["']/g)].map(m => m[1]);
const unique = [...new Set(names)];
let failures = 0;
if (unique.length !== names.length) {
  console.error('ERRO: imports de fichas duplicados no index.js');
  failures++;
}
for (const name of unique) {
  const file = resolve(root, 'dados/orquideas', name);
  if (!existsSync(file)) {
    console.error('ARQUIVO AUSENTE:', name);
    failures++;
    continue;
  }
  const result = spawnSync(process.execPath, ['--check', '--input-type=module'], {
    input: readFileSync(file),
    encoding: 'utf8',
  });
  if (result.status !== 0) {
    console.error('ERRO DE SINTAXE:', name);
    console.error(result.stderr || result.stdout);
    failures++;
  }
}
console.log(`Fichas verificadas: ${unique.length}. Erros: ${failures}.`);
process.exitCode = failures ? 1 : 0;
