import os, re

files = [
    'e:/Sanjeevni-OS/frontend/src/app/about-us/page.tsx',
    'e:/Sanjeevni-OS/frontend/src/app/cookie-policy/page.tsx',
    'e:/Sanjeevni-OS/frontend/src/app/legal-notice/page.tsx',
    'e:/Sanjeevni-OS/frontend/src/app/privacy-policy/page.tsx',
    'e:/Sanjeevni-OS/frontend/src/app/projects/page.tsx'
]

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the last <section class=\"mod-footer...
    idx = content.rfind('<section class=\"mod-footer')
    if idx == -1:
        print(f'No footer found in {file}')
        continue

    # Find the closing </section> after idx
    end_idx = content.find('</section>', idx) + len('</section>')
    
    html_before = content[:idx]
    html_after = content[end_idx:]

    new_content = html_before + '\n' + html_after

    new_content = re.sub(r'import type \{ Metadata \} from \'next\';', 
                         r'import type { Metadata } from \'next\';\nimport { UniversalFooter } from \'@/components/home/UniversalFooter\';', 
                         new_content)

    new_content = re.sub(r'return \(\s*<div suppressHydrationWarning dangerouslySetInnerHTML=\{\{ __html: `',
                         r'return (\n    <>\n      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `',
                         new_content)
                         
    new_content = re.sub(r'` \}\} />\s*\);',
                         r'` }} />\n      <UniversalFooter />\n    </>\n  );',
                         new_content)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f'Updated {file}')
