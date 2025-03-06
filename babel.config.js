module.exports = {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root: ['./'],
                alias: {
                    '~': './src',
                    assets: './assets',
                    application: './src/application',
                    interface: './src/interface',
                    domain: './src/domain',
                    infrastructure: './src/infrastructure',
                    navigation: './src/navigation',
                    shared: './src/shared',
                },
            },
        ],
    ],
};
