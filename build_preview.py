"""Gera a prévia autocontida e o ZIP de publicação, sem dependências."""
from pathlib import Path
import base64
import re
from zipfile import ZipFile, ZIP_DEFLATED

ROOT = Path(__file__).resolve().parent
html = (ROOT / 'index.html').read_text()
html = html.replace('<link rel="stylesheet" href="styles.css">', '<style>\n' + (ROOT / 'styles.css').read_text() + '\n</style>')
for name in ('config.js', 'booking.js', 'script.js'):
    html = html.replace(f'<script src="{name}" defer></script>', '')
html = html.replace('</body>', '<script>\n' + (ROOT / 'config.js').read_text() + '\n' + (ROOT / 'booking.js').read_text() + '\n' + (ROOT / 'script.js').read_text() + '\n</script></body>')
for asset in (ROOT / 'assets').iterdir():
    if not asset.is_file():
        continue
    mime = {'.svg': 'image/svg+xml', '.webp': 'image/webp'}.get(asset.suffix)
    if mime:
        uri = f'data:{mime};base64,' + base64.b64encode(asset.read_bytes()).decode()
        html = html.replace('assets/' + asset.name, uri)
assert not re.search(r'(?:src|href|data-image)="(?:assets/|styles.css|config.js|booking.js|script.js)', html)
assert 'assets/' not in html
(ROOT / 'visualizar.html').write_text(html)
archive = ROOT.with_suffix('.zip')
with ZipFile(archive, 'w', ZIP_DEFLATED) as output:
    for file in sorted(ROOT.rglob('*')):
        relative = file.relative_to(ROOT)
        if not file.is_file() or '.agents' in relative.parts or '__pycache__' in relative.parts:
            continue
        output.write(file, Path(ROOT.name) / relative)
with ZipFile(archive) as output:
    assert output.testzip() is None
print(f'Prévia autocontida: {ROOT / "visualizar.html"} ({len(html.encode()):,} bytes)')
print(f'ZIP íntegro: {archive} ({archive.stat().st_size:,} bytes)')
