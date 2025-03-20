This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run 
```bash
npm install
``` 
in project directory to install dependencies.

This project uses Auth.js and GitHub for user authentication. Please set up GitHub authentication on your local build of the project. Instructions can be found here (Necessary code is already implemented but tokens/authentication info will need be changed to project specific values): [https://authjs.dev/getting-started](https://authjs.dev/getting-started)

This project also uses Sanity for a database. To run this app with all implemented functionality you will need to create a Sanity account and set up the Database on that end, as well as install sanity along with all other node package dependencies. Docs can be found here: [https://www.sanity.io/docs](https://www.sanity.io/docs)

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

