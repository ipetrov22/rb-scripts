from mitmproxy import http

def request(flow: http.HTTPFlow) -> None:
    if flow.request.pretty_url == "https://p-p.redbull.com/rb-red-bullrain-master-4p-prod/frontend/all-terrain@0.1.93.js":
        print("[*] Intercepted Red Bull JS, rerouting to local server")
        flow.request.url = "http://127.0.0.1:5500/all-terrain@0.1.93.js"
