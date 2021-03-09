mkdir src
mv App.tsx src

cd src
mkdir assets
cd assets
mkdir fonts
mkdir images
cd ..
mkdir components
cd components
mkdir atoms
mkdir molecules
mkdir organisms
cd ..
mkdir navigations
cd navigations
touch auth-navigator.tsx
touch app-navigator.tsx
touch index.tsx
cd ..
mkdir scenes
mkdir services
mkdir styles
mkdir utils

yarn add @react-navigation/native
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
yarn add @react-navigation/stack
yarn add -D babel-plugin-module-resolver 

