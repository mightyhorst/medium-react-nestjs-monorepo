# Yarn workspaces for React + NestJs (Typescript/ExpressJs)
See the Medium Article [https://medium.com/@kitsetio/yarn-workspaces-for-react-nestjs-typescript-expressjs-977cf1a93e04](https://medium.com/@kitsetio/yarn-workspaces-for-react-nestjs-typescript-expressjs-977cf1a93e04)

# Install 
```
yarn 
```

Update the `.env` files from `./workspaces/react` and `./workspaces/nestjs`

# Run the React App 
```
yarn workspace @monorepo/react start
yarn workspace @monorepo/nestjs start
```

### Known Issues 
Be sure to add env variable `SKIP_PREFLIGHT_CHECK=true`

### Authour 
Nick Mitchell 
nick@kitset.io 

