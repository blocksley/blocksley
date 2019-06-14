
Not necessary, use Yarn workspaces.
```
lerna add @blocksley/blocksley --scope=@blocksley/quasar-app-extension-blocksley
lerna add @blocksley/quasar-app-extension-blocksley --scope=@blocksley/blocksley-demo
```
Not necessary, just use Node.
```
yarn add @babel/core @babel/node @babel/preset-env --dev -W
```