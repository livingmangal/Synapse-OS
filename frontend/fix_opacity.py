import os

files = [
    'e:/Sanjeevni-OS/frontend/src/app/about-us/page.tsx',
    'e:/Sanjeevni-OS/frontend/src/app/cookie-policy/page.tsx',
    'e:/Sanjeevni-OS/frontend/src/app/legal-notice/page.tsx',
    'e:/Sanjeevni-OS/frontend/src/app/privacy-policy/page.tsx',
    'e:/Sanjeevni-OS/frontend/src/app/projects/page.tsx'
]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        c = f.read()
        
    c = c.replace('<main data-id=', '<main style="opacity: 1 !important" data-id=')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(c)
