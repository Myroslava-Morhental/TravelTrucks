# TravelTrucks

Frontend for **TravelTrucks** — a camper rental service. Users can browse the camper catalog, filter campers on the backend, load more results page by page, open full camper details with a photo gallery and reviews, and send a booking request.

## Features

- **Home page** with a hero banner and a `View Now` call to action that leads to the catalog.
- **Catalog** (`/catalog`):
  - campers loaded from the [Campers API](https://campers-api.goit.study/docs);
  - backend filtering by location (text), camper form, engine and transmission (single choice per group), applied with the `Search` button;
  - `Clear filters` resets all filters and shows the full list;
  - `Load more` pagination with TanStack Query `useInfiniteQuery` — 4 campers per request, active filters preserved;
  - loading, empty and error states.
- **Camper details** (`/catalog/[camperId]`), opened in a new tab from `Show more`:
  - server-rendered camper data and reviews;
  - thumbnail gallery;
  - vehicle details and amenities;
  - reviews with a five-star rating;
  - booking form with client-side validation and success/error notifications.
- Page metadata for every route, semantic markup, desktop layout based on the Figma design.

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router) + TypeScript
- [TanStack Query](https://tanstack.com/query) for client server-state (`useInfiniteQuery`, `useMutation`)
- CSS Modules with CSS custom properties as design tokens
- [React Icons](https://react-icons.github.io/react-icons/), [react-hot-toast](https://react-hot-toast.com/)

## Getting started

Requirements: Node.js 20.9+ and npm.

```bash
git clone <repository-url>
cd traveltrucks
npm install
cp .env.example .env.local   # optional, the API URL has a default
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Name                       | Description          | Default                          |
| -------------------------- | -------------------- | -------------------------------- |
| `NEXT_PUBLIC_API_BASE_URL` | Campers API base URL | `https://campers-api.goit.study` |

### Scripts

| Command                | Description                   |
| ---------------------- | ----------------------------- |
| `npm run dev`          | Start the development server  |
| `npm run build`        | Create a production build     |
| `npm run start`        | Run the production build      |
| `npm run lint`         | Run ESLint                    |
| `npm run typecheck`    | Run the TypeScript compiler   |
| `npm run format`       | Format the code with Prettier |
| `npm run format:check` | Check formatting              |

## Usage

1. On the home page click **View Now**.
2. In the catalog, type a city (for example `Kyiv`), pick camper form, engine and transmission, then click **Search**. Click a selected option again to deselect it, or use **Clear filters**.
3. Click **Load more** to fetch the next 4 campers.
4. Click **Show more** on a card to open the camper in a new tab, browse the gallery and reviews, and send the booking form.

## Project structure

```
app/            routes, layouts, loading/error/not-found states
components/     layout, ui, home, catalog and camper components
lib/api/        API client and endpoint functions
lib/queries/    TanStack Query keys and hooks
providers/      QueryClient and toast providers
constants/      filter options, amenities, catalog settings
types/          domain and API types
utils/          formatting, query building, validation
public/         static assets (hero image, etc.)
```

## Author

Slavka Morhental — Full Stack Developer.
