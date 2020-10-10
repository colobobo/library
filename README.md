<div align="center">
  <img src="https://raw.githubusercontent.com/colobobo/client/master/src/assets/logo/logo-simple.png" alt="logo" width="400" />
</div>

<h4 align="center">A multiplayer mobile game with a shared gaming interface across devices</h4>

<h6 align="center">
  <img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="build with love" />
  <br/>
  <br/>
  and :
</h6>

<p align="center">
  <a href="https://www.typescriptlang.org/">TypeScript</a> •
  <a href="https://reactjs.org">React</a> •
  <a href="https://redux.js.org/">Redux</a> •
  <a href="https://phaser.io/">Phaser</a> •
  <a href="https://socket.io/">Socket.IO</a> •
  <a href="https://nodejs.org/">Node</a>
</p>

# Colobobo - Library

This repository is the library part of Colobobo project. The other parts :
- [Client](https://github.com/colobobo/client)
- [Server](https://github.com/colobobo/server) 

> To run the project locally you will need at least the client part and the server part.

## Installation

1. Set node version with [nvm](https://github.com/nvm-sh/nvm)

   ```bash
   nvm use
   ```
   
2. Install dependencies with [yarn](https://yarnpkg.com/)

   ```bash
   yarn install
   ```
   
## Build

- Build

   ```bash
   yarn build
   ```
  
- Build and watch changes

   ```bash
   yarn watch
   ```
  
## Use @colobobo/library locally

To use @colobobo/library in development mode in the [client](https://github.com/colobobo/client) or in the [server](https://github.com/colobobo/server), you need to create a symlink.

#### Client

1. For the client you need to create a [yarn symlink](https://classic.yarnpkg.com/en/docs/cli/link/)
   
   ```bash
   yarn link
   ```

2. Then go to the client directory 

   ```bash
   yarn link @colobobo/library
   ```

#### Server

1. For the server you need to create a [npm symlink](https://docs.npmjs.com/cli/link)
   
   ```bash
   npm link
   ```

2. Then go to the server directory 

   ```bash
   npm link @colobobo/library
   ```