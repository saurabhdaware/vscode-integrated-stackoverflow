const html = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Integrated Stackoverflow Search</title>
        <style>
        body{
            color:#ddd;
        }
        button{
            border:none;
            background-color:#999;
            color:#111;
            padding:5px 7px;
            font-weight:bold;
        }
        </style>
    </head>
    <body>
        <div style="padding:20px;">
            <label for="search">Search</label>
            <div style="display:flex;">
                <input id="search" style="display:inline-block;width:75%;padding:6px;flex:1;" type="search">
                <button class="search-button">Search</button>
            </div>
            <div id="answers" style="margin-top:20px;">

            </div>
        </div>
        <script>
        function createAnswerCard(answers,question){
            let cards = '<h2>Q:'+question.title+'</h2>'; 
            for(let answer of answers.slice(0,4)){
                cards += '<div style="padding:10px;background-color:#111;color:#ddd;">'+answer.body+'</div>';
            }
            return cards;
        }

        function createQuestionsCard(questions){
            let cards = '<h2>Other Questions</h2>';
            for(let question of questions.slice(1)){
                cards +='<div style="padding:10px;margin:20px 0px;background-color:#111;color:#ddd;"><h2>'+question.title+'</h2><a href="'+question.link+'">'+question.link+'</a></div>';
            }
            return cards;
        }

        async function searchAnswers(){
            document.getElementById("answers").innerHTML = '';
            let searchQuery = document.querySelector('input#search').value;
            searchQuery = searchQuery.trim().replace(/ /g,'+');
            let data = await fetch('https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=relevance&q='+searchQuery+'&answers=1&site=stackoverflow')
            let questions = (await data.json()).items;

            questions = questions.map(question => ({title:question.title,link:question.link,id:question.question_id}));
            console.log("answers");
            fetch('https://api.stackexchange.com/2.2/questions/'+questions[0].id+'/answers?order=desc&sort=votes&site=stackoverflow&filter=withbody')
                .then(response => response.json())
                .then(data => {
                    document.getElementById("answers").innerHTML += createAnswerCard(data.items,questions[0]);
                })
                .then(() => {
                    document.getElementById("answers").innerHTML += createQuestionsCard(questions);
                })

        }

       
        window.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                searchAnswers();
            }
        }, false);

        document.querySelector('.search-button').addEventListener('click',searchAnswers)
        </script>
    </body>
</html>
`
export function getHtmlContent() {
     return html;
}