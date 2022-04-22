var app = new Vue ({
    el: "#movieApp",
    data: {
        movie: {}, /*objeto que viene del servidor*/
        searchedMovie: "", /*texto que se escribe en el buscador*/
        searching: false,
        dataSrch: false
    },

    methods: {
        
      /*lo tenemos en el button (v-on)*/  searchMovie: function() {
            var vueData = this;
            vueData.searching = true;
            fetch("https://private.omdbapi.com/?apikey=bef9c583&t=" + this.searchedMovie /*concatenar tit. buscado al link,
            el this selecciona el elemento de la data*/
            )
            .then(function (data) {
                return data.json();
            }).then(function (movie) { 
                vueData.movie = movie; 
                vueData.searching = false;
                vueData.dataSrch = true;

            });
                
            },
             /*el this me permite acceder a lo que hay en data*/

    
    },
});