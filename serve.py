#!/usr/bin/env python3
"""SPA static server for BOYZ N THE HOOD offline clone."""
import http.server, socketserver, os, mimetypes, sys, webbrowser

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
ROOT = os.path.dirname(os.path.abspath(__file__))

class SPAHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_GET(self):
        path = self.path.split("?", 1)[0].split("#", 1)[0]
        fs = os.path.join(ROOT, path.lstrip("/").replace("/", os.sep))
        if os.path.isdir(fs):
            fs = os.path.join(fs, "index.html")
        if not os.path.isfile(fs):
            # SPA fallback for client routes
            ext = os.path.splitext(path)[1]
            if not ext or ext == ".html":
                fs = os.path.join(ROOT, "index.html")
            else:
                self.send_error(404)
                return
        ctype = mimetypes.guess_type(fs)[0] or "application/octet-stream"
        if fs.endswith(".js"):
            ctype = "text/javascript"
        elif fs.endswith(".css"):
            ctype = "text/css"
        elif fs.endswith(".woff2"):
            ctype = "font/woff2"
        with open(fs, "rb") as f:
            data = f.read()
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        self.wfile.write(data)

    def log_message(self, fmt, *args):
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))

print(f"Serving {ROOT} at http://localhost:{PORT}/")
print("Pages: /  /characters  /places  /explore  /media  /gang")
webbrowser.open(f"http://localhost:{PORT}/")
with socketserver.TCPServer(("", PORT), SPAHandler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")