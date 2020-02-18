$(document).ready(() => {

    var sombre = true;
    var lightmap = "https://api.mapbox.com/styles/v1/cgobbo/ck6qkg6du0sc61ipgfmunfy2a/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2dvYmJvIiwiYSI6ImNrNmh3cnN4ZTA3aXozbWxvaGM3dGJzdWIifQ.xkLbDd0BUUKWQbAyUVrRew";
    var darkmap = 'https://api.mapbox.com/styles/v1/cgobbo/ck6qiop5d3l131iofj94j7jpl/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2dvYmJvIiwiYSI6ImNrNmh3cnN4ZTA3aXozbWxvaGM3dGJzdWIifQ.xkLbDd0BUUKWQbAyUVrRew';


    var mymap = L.map('macarte').setView([43.9277552, 2.147899], 10);
    
    if(sombre){
        L.tileLayer(darkmap, {
            maxZoom: 18
        }).addTo(mymap);
    }else{
        L.tileLayer(lightmap, {
            maxZoom: 18
        }).addTo(mymap);
    }


    $('.theme-toggler').click(() => {
        if (sombre) {
            L.tileLayer(lightmap, {
                maxZoom: 18
            }).addTo(mymap);
            sombre = !sombre;
        } else {
            L.tileLayer(darkmap, {
                maxZoom: 18
            }).addTo(mymap);
            sombre = !sombre;
        }

    });





    var marker = L.marker([43.9277552, 2.147899]);

    marker.addTo(mymap);
    var marker = L.marker([44.0277552, 2.147899]);

    marker.addTo(mymap);
    var marker = L.marker([45.5277552, 2.147899]);

    marker.addTo(mymap);

    console.log(mymap.getBounds());



})