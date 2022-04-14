const ghpages = require('gh-pages');

ghpages.publish('ie-app/dist', (error) => {
    console.error(error);
});
