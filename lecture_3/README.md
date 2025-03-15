## Lab 3 - Application containerisation
### Pre-requirements:
* Node: v20 (can use [nvm](https://github.com/nvm-sh/nvm))

Required steps for Dockerfile:
1. Select workfolder
2. Install dependencies
3. Copy server data
4. Build sources (will put it into ./.next/standalone. )
5. Init server


```bash
# Install dependencies
npm i

# Build sources. Server directory: ./.next/standalone, Static folder: ./.next/static
npm run build

# Init server (if run in ./.next/standalone)
node server.js
```
 
