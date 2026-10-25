#!/usr/bin/env node
// Every future clinical case must have verified FBT question-and-answer navigation.
const fs=require('node:fs'),path=require('node:path');
const html=fs.readFileSync(path.resolve(__dirname,'../index.html'),'utf8');
function read(name){
  const at=html.indexOf('const '+name+'=');
  if(at<0)throw Error('Missing '+name);
  const begin=at+('const '+name+'=').length;
  const end=html.indexOf(';\n',begin);
  if(end<0)throw Error('Missing delimiter in '+name);
  return JSON.parse(html.slice(begin,end));
}
const bank=read('FBT_BANK'),cases=read('FBT_CASES'),related=read('FBT_RELATED');
const part=html.split('const DATA=')[1]?.split('const SOURCES=')[0];
if(!part)throw Error('DATA clinical case array unavailable');
const ids=[...part.matchAll(/\bid\s*:\s*'([^']+)'|"id"\s*:\s*"([^"]+)"/g)].map(m=>m[1]||m[2]);
const errors=[];
if(new Set(ids).size!==ids.length)errors.push('Duplicate clinical case IDs');
for(const id of ids){
  const ns=cases[id];
  if(!Array.isArray(ns)||!ns.length){errors.push('No original FBT match for clinical case '+id);continue;}
  for(const n of ns){
    const b=bank[n];
    if(!b){errors.push(id+': FBT #'+n+' not in bank');continue;}
    if(b.n!==Number(n)||!b.q||!Number.isInteger(b.page)||!b.teaching)errors.push('Incomplete source/teaching FBT #'+n);
    if(b.hasAnswer!==Boolean(b.original))errors.push('Source answer / hasAnswer mismatch #'+n);
  }
  const rel=related[id]||[];
  if(rel.some(n=>!ns.includes(n)))errors.push('Related FBT must also be mapped: '+id);
}
for(const id of Object.keys(cases))if(!ids.includes(id))errors.push('Orphan FBT mapping '+id);
if(!html.includes('window.openFbtNote=function')||!html.includes('class="fbt-ref-row"'))errors.push('Clickable FBT modal/navigation missing');
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log('FBT LINKS PASS: '+ids.length+' clinical cases, '+Object.keys(bank).length+' original source Q&A cards, '+Object.values(cases).reduce((n,a)=>n+a.length,0)+' case references.');
