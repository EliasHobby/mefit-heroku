const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000; app.use(express.static(publicPath));

if (process.env.NODE_ENV === 'production') {

    app.use((req, res, next) => {
        if (req.header('x-forwarded-proto') !== 'https')
            res.redirect(`https://${req.header('host')}${req.url}`)
        else
            res.sendFile(path.join(publicPath, 'index.html'));
        next()
    })
}
app.get('*', (req, res) => {

});
app.listen(port, () => {
    console.log('Server is up!');
});

