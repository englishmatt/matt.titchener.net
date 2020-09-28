export async function get(req, res, next) {
    let background = req.query.background;
    let foreground = req.query.foreground;

    if (!background) {
        background = "#ffe600";
    }

    if (!foreground) {
        foreground = "rgba(0, 0, 0, 0.7)";
    }

    res.setHeader('Content-Type', 'image/svg+xml');
    res.end(`<svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" fill="none"><defs/><path fill="${background}" d="M65.03 57.33a3.22 3.22 0 01-2.96 3.45l-53.4 4.16a3.23 3.23 0 01-3.46-2.96L1 8.62a3.22 3.22 0 012.95-3.45L57.36 1a3.23 3.23 0 013.47 2.95l4.2 53.37z"/><path fill="${foreground}" d="M11 14h44v6H11v-6zM36 51V35l-8 13h-3l-8-13-.03 16H11V24h5.26L26.5 40.78 36.7 24H42v27h-6z"/></svg>`)
}