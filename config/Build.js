const path = require('path');

/**
 * Creates a configuration object to be used in the build process
 */
function BuildConfig(environment) {
    'use strict';

    // Root paths
    const projectBasePath = path.resolve(__dirname, '../'),
        distBasePath = path.resolve(__dirname, '../.dist/' + environment + '/'),
        webBasePath = path.resolve(__dirname, '../src/web/'),
        webDistBasePath = path.resolve(distBasePath, 'web/'),
        apiBasePath = path.resolve(__dirname, '../src/api/'),
        apiDistBasePath = path.resolve(distBasePath, 'api/'),
        nodeModulesBasePath = path.resolve(__dirname, '../node_modules/');

    // Config
    const buildConfig = {
        'environment': environment,
        'projectBasePath': projectBasePath,
        'nodemodules': nodeModulesBasePath,
        'web': {
            'basePath': webBasePath,
            'fonts': {
                'cwd': path.resolve(webBasePath, 'fonts/'),
                'files': [
                    '**/**'
                ]
            },
            'images': {
                'cwd': path.resolve(webBasePath, 'images/'),
                'watch': '**/*.{jpg,gif,png}',
                'files': '**/*.{jpg,gif,png}'
            },
            'html': {
                'cwd': path.resolve(webBasePath, 'html/'),
                'watch': '**/*.{htm,html}',
                'files': '**/*.{htm,html}'
            },
            'rootAssets': {
                'cwd': path.resolve(webBasePath, 'root/'),
                'watch': '**/**',
                'files': '**/**'
            },
            'scripts': {
                'cwd': path.resolve(webBasePath, 'scripts/'),
                'watch': '**/*.{js,jsx,json}',
                'file': path.resolve(webBasePath, 'scripts/app.jsx')
            },
            'styles': {
                'cwd': path.resolve(webBasePath, 'styles/'),
                'watch': '**/*.{css,sass,scss}',
                'file': path.resolve(webBasePath, 'styles/app.scss')
            },
            'dist': {
                'basePath': webDistBasePath,
                'fonts': path.resolve(webDistBasePath, 'fonts/'),
                'images': path.resolve(webDistBasePath, 'images/'),
                'html': webDistBasePath,
                'rootAssets': webDistBasePath,
                'scripts': path.resolve(webDistBasePath, 'app.min.js'),
                'styles': path.resolve(webDistBasePath, 'app.min.css')
            }
        },
        'api': {
            'basePath': apiBasePath,
            'scripts': {
                'cwd': apiBasePath,
                'watch': '**/*.{js,json}'
            },
            'dist': {
                'basePath': apiDistBasePath,
            }
        }
    };

    return buildConfig;
}

module.exports = BuildConfig;