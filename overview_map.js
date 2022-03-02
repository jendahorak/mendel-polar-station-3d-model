window.onload = function () {
    let overviewMap = document.getElementById('overview_map');
    let toggleOverview = document.getElementById('toggle_overview')

    toggleOverview.onclick = function() {
        if(overviewMap.className == 'open'){
            overviewMap.className = ""
        } else {
            overviewMap.className = "open"
        }
    }

}