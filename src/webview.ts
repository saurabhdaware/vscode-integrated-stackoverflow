// I've only included HTML in this and CSS and JS files are linked externally
// If you are here to contribute to the UI just edit the files in /ui folder and test it from index.html and then create a pull request
// I will take the files from ui folder and will host it over cdn
const html = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Integrated Stackoverflow Search</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://apps.saurabhdaware.in/scripts/integrated-stackoverflow/style.css">
        <link rel="shortcut icon" href="https://cdn.jsdelivr.net/gh/saurabhdaware/vscode-integrated-stackoverflow@latest/ui/logo-192.png" type="image/x-icon">
        <style>
        body{
            background-color:#ddd !important;
        }
        </style>
    </head>
    <body>
        <div style="padding:20px;">
            <label for="search" style="color:#111;font-weight:bold;">Search</label>
            <div style="display:flex;">
                <input id="search" style="display:inline-block;width:75%;padding:6px;flex:1;" type="search">
                <button class="search-button blue-button">Search</button>
            </div>
            <div id="answers" style="margin-top:20px;">

            </div>
        </div>
        <script src="https://apps.saurabhdaware.in/scripts/integrated-stackoverflow/so.js"></script>
    </body>
</html>
`;


export function getHtmlContent() {
    console.log(html);
    return html;
}