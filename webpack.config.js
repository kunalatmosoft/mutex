const path = require('path');

module.exports = {
    entry: './src/mutex.js',
    output: {
        filename: 'mutex.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'mutex',
        libraryTarget: 'umd',
    },
    mode: 'production',
};