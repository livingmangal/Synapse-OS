const fs = require('fs'); const html = fs.readFileSync('e:/normalisboring.es/frontend/scratch_html.html', 'utf8'); const start = html.indexOf('<div class="modal modal--contact'); const end = html.indexOf('</div>
			</div>
		</div>', start) + 24; console.log(html.substring(start, end));
