import re

with open('e:/Sanjeevni-OS/frontend/src/app/projects/page.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    
html_lines = lines[108:407]
html_content = ''.join(html_lines)

# Fix class to className
html_content = html_content.replace('class=', 'className=')
html_content = html_content.replace('<!--', '{/*')
html_content = html_content.replace('-->', '*/}')

# Fix styles (very naive approach for specific cases seen)
html_content = html_content.replace('style="background-color: #0b0f19;"', "style={{ backgroundColor: '#0b0f19' }}")
html_content = html_content.replace('style="color: #818cf8;"', "style={{ color: '#818cf8' }}")
html_content = html_content.replace('style="color: #cbd5e1;"', "style={{ color: '#cbd5e1' }}")
html_content = html_content.replace('style="color: #ffffff;"', "style={{ color: '#ffffff' }}")

# Add missing tags closing
html_content = re.sub(r'<img(.*?)(?<!/)>', r'<img\1/>', html_content)


output = f"""import React from 'react';

export function ProjectsSection() {{
  return (
    <>
{html_content}
    </>
  );
}}
"""

with open('e:/Sanjeevni-OS/frontend/src/components/home/ProjectsSection.tsx', 'w', encoding='utf-8') as f:
    f.write(output)
