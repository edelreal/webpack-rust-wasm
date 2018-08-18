# wepback-rust-wasm
Short starter project using Webpack 4, Rust, and Wasm, based on the example at https://github.com/yamafaktory/rust-wasm-webpack and documentation at https://github.com/dflemstr/rust-native-wasm-loader

# Setup
## Install Node
See https://github.com/creationix/nvm#installation

## Install Rust
```
curl https://sh.rustup.rs -sSf | sh
source $HOME/.cargo/env
```

## Add support for WebAssembly cross-compilation
```
rustup toolchain install nightly
rustup default nightly
rustup update nightly
rustup target add wasm32-unknown-unknown --toolchain nightly
cargo install --force --git https://github.com/alexcrichton/wasm-gc
```

## Run a build
Run a development build, and start webpack-dev-server:
```
npm install
npm start
```

Alternatively, run a production build:
```
npm build
```

The output will be in the `dist` directory.

