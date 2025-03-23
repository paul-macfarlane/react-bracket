# API for React Bracket

A Node, TypeScript, and Express based API for React Bracket.

## Running Locally

1. Install [Node.js](https://nodejs.org/)

2. Install dependencies:

```bash
npm install
```

3. Copy the `.env.example` file to `.env`:

```bash
cp .env.example .env
```

4. Run the Turso db:

```bash
npm run db
```

5. In a new terminal tab, run db migrations to setup the database:

```bash
npm run migrate
```

6. Run the API:

```bash
npm run dev
```

7. Access the API at `http://localhost:3000`
