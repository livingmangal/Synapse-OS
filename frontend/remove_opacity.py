import os

files = [
    'e:/Sanjeevni-OS/frontend/src/app/about-us/page.tsx',
    'e:/Sanjeevni-OS/frontend/src/app/projects/page.tsx'
]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        c = f.read()
        
    c = c.replace('<main style="opacity: 1 !important" data-id=', '<main data-id=')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(c)
