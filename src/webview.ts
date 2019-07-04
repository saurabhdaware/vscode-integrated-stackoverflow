const html = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Integrated Stackoverflow Search</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/saurabhdaware/vscode-integrated-stackoverflow/ui/style.css">
    </head>
    <body>
        <div style="padding:20px;">
            <label for="search" style="color:#09f;">Search</label>
            <div style="display:flex;">
                <input id="search" style="display:inline-block;width:75%;padding:6px;flex:1;" type="search">
                <button class="search-button blue-button">Search</button>
            </div>
            <div id="answers" style="margin-top:20px;">

            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/gh/saurabhdaware/vscode-integrated-stackoverflow/ui/so.js"></script>
    </body>
</html>
`;


export function getHtmlContent() {
    console.log(html);
    return html;
}