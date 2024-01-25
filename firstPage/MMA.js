$(document).ready(async function() {
    const API_KEY = "w9pxw25ns8rm9waq8ecb4gnf";
    const API_KEY_TWO = "3g2et8uynyeu8sdufrbatnbq";
    const RANKINGS_ENDPOINT = `http://localhost:3000/rankings`;

    const fetchRankings = async () => {
        const response = await fetch(RANKINGS_ENDPOINT);
        const data = await response.json();
        return data;
    };
    const fetchedData = await fetchRankings();
    buildMarquee = "";
    console.log(fetchedData);
    for(var i = 0; i <fetchedData.rankings.length; i++) {
        buildMarquee+="### "+fetchedData.rankings[i].name;
        for(var m = 0; m < fetchedData.rankings[i].competitor_rankings.length; m++) {
            buildMarquee+=" "+fetchedData.rankings[i].competitor_rankings[m].rank+" : "+fetchedData.rankings[i].competitor_rankings[m].competitor.name+" >>";
        }
    }
    $("#marquee").html(buildMarquee);
    
    $('#marquee').marquee({
        duration: 5000
    });


});