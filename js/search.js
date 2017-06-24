
    function dosearch(){
    var search = instantsearch({
      appId: '4UTC2BOCJR',
      apiKey: '2efa2d4ef4151a036d904016d45ec5e9',
      indexName: 'IE_search'
    });
    search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-box',
        autofocus: false,
        placeholder: 'What are you looking for'
      })
    );
    search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits-container',
        templates: {
          empty: 'No results',
          item: '{{ title }} <br/> in: {{ layout }}<br/><a class="button" href="{{ url }}">Read More</a>'
        },
        hitsPerPage: 10
      })
    );
    search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination'
  })
);
    search.start();
    };  
