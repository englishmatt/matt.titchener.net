export async function get(req, res, next) {
    let background = req.query.background || "#ffe600";

    res.setHeader('Content-Type', 'image/svg+xml');
    res.end(`<svg xmlns="http://www.w3.org/2000/svg" width="65" height="64" fill="none">
    <path fill="${background}" fill-rule="evenodd" d="M64.03 56.33a3.22 3.22 0 01-2.96 3.45l-53.4 4.16a3.23 3.23 0 01-3.46-2.96L0 7.62a3.22 3.22 0 012.95-3.45L56.36 0a3.23 3.23 0 013.47 2.95l4.2 53.37zM10 13h44v6H10v-6zm25 21v16h6V23h-5.3L25.5 39.78 15.26 23H10v27h5.97L16 34l8 13h3l8-13z" clip-rule="evenodd"/>
    </svg>`)
}