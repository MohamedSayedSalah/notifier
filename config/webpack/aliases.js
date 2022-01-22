const path = require('path')
module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '..', '..', 'app/javascript'),
            '@contexts': path.resolve(
                __dirname,
                '..',
                '..',
                'app/javascript/src/contexts'
            ),
            '@hooks': path.resolve(__dirname, '..', '..', 'app/javascript/src/hooks'),
            '@images': path.resolve(__dirname, '..', '..', 'app/javascript/images'),
            '@src': path.resolve(__dirname, '..', '..', 'app/javascript/src'),
            '@apps': path.resolve(__dirname, '..', '..', 'app/javascript/src/apps'),
            '@components': path.resolve(
                __dirname,
                '..',
                '..',
                'app/javascript/src/components'
            ),

            '@forms': path.resolve(__dirname, '..', '..', 'app/javascript/src/forms'),
            '@containers': path.resolve(
                __dirname,
                '..',
                '..',
                'app/javascript/src/containers'
            ),
            '@helpers': path.resolve(
                __dirname,
                '..',
                '..',
                'app/javascript/src/helpers'
            ),
            '@stylesheets': path.resolve(
                __dirname,
                '..',
                '..',
                'app/javascript/stylesheets'
            ),
            '@json': path.resolve(__dirname, '..', '..', 'app/javascript/src/json'),
        },
    },
}
