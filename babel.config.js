module.exports = function(api) {
    api.cache(true);
    return {
        presents: ['babel-preset-expo'],
        plugins: [
            "nativewind/babel",
            "react-native-reanimated/plugin"
        ]
    
    }
}