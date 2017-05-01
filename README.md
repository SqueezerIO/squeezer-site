Squeezer.IO SITE
================

### Generate a new site

Site it's generated with the help of [Jekyll](https://jekyllrb.com/) and 
it's generated from the site source which it's stored on the `src/` directory. 

The website it's stored on GitHub pages via `docs` directory therefore new website gets 
automatically deployed when new files to `docs` directory are pushed.

In order to generate a new site please follow the instructions : 

    $ sudo gem install jekyll jekyll-paginate-v2 jekyll-feed
    $ npm install 
    $ npm start # it will start a browser sync instance in a new browser
    $ npm run build # will save new generated static files to docs directory
    
    
### Run tests

#### Eslint ( JS code syntax checker )
    $ npm run eslint
    
#### JS inspect ( JS code duplicate checker )
    $ npm run jsinspect    