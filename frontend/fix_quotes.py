import re

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
        
    c = c.replace("\\'next\\'", "'next'")
    c = c.replace("\\'@/components/home/UniversalFooter\\'", "'@/components/home/UniversalFooter'")
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(c)
