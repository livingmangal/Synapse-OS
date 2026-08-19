files = [
    'e:/Sanjeevni-OS/frontend/src/app/cookie-policy/page.tsx',
    'e:/Sanjeevni-OS/frontend/src/app/legal-notice/page.tsx',
    'e:/Sanjeevni-OS/frontend/src/app/privacy-policy/page.tsx'
]
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace('style="opacity: 1 !important" ', '')
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
