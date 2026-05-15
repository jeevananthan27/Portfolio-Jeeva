const fs = require('fs');
const path = require('path');
const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // text-white -> text-slate-900 dark:text-white
  content = content.replace(/\btext-white\b(?!(\/|\w))/g, 'text-slate-900 dark:text-white');
  
  // text-white/XX -> text-slate-900/XX dark:text-white/XX
  content = content.replace(/\btext-white\/(\d+)\b/g, 'text-slate-900/$1 dark:text-white/$1');
  
  // text-gray-400 -> text-slate-600 dark:text-gray-400
  content = content.replace(/\btext-gray-400\b/g, 'text-slate-600 dark:text-gray-400');
  
  // text-gray-300 -> text-slate-700 dark:text-gray-300
  content = content.replace(/\btext-gray-300\b/g, 'text-slate-700 dark:text-gray-300');
  
  // text-gray-500 -> text-slate-500 dark:text-gray-500
  content = content.replace(/\btext-gray-500\b/g, 'text-slate-500 dark:text-gray-500');

  // border-white/XX -> border-slate-900/XX dark:border-white/XX
  content = content.replace(/\bborder-white\/(\d+)\b/g, 'border-slate-900/$1 dark:border-white/$1');
  
  // border-white -> border-slate-900 dark:border-white
  content = content.replace(/\bborder-white\b(?!(\/|\w))/g, 'border-slate-900 dark:border-white');

  // Optional: bg-black/XX -> bg-slate-200/XX dark:bg-black/XX
  content = content.replace(/\bbg-black\/(\d+)\b/g, 'bg-slate-200/$1 dark:bg-black/$1');

  // Clean up any double dark: dark:
  content = content.replace(/dark:(text|bg|border)-[a-z0-9-]+\s+dark:\1-[a-z0-9-]+/g, match => {
     return match.split(/\s+/)[1];
  });
  
  // Also fix text-slate-900 text-slate-900
  content = content.replace(/text-slate-900 dark:text-white dark:text-white/g, 'text-slate-900 dark:text-white');

  fs.writeFileSync(filePath, content);
  console.log(`Processed ${file}`);
});
