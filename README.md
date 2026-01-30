# creating my first electron app

Step 1: mkdir filename && cd filename
step 2: npm init
step 3:

```bash
npm install electron --save-dev
```

- package.json will look like
  {
  "name": "my-electron-app",
  "version": "1.0.0",
  "description": "Hello World!",
  "main": "main.js",
  "scripts": {
    "start": "electron .", // add this line in script 
  "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jane Doe",
  "license": "MIT",
  "devDependencies": {
  "electron": "23.1.3"
  }
  }

step 4: npm run start

