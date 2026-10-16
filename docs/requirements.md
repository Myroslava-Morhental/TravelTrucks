# TravelTrucks Requirements

This document is the complete structured task specification for the TravelTrucks frontend application.

When implementing or planning major features, treat this file as the primary source of project requirements.

Do not invent the backend API contract from this document. The Swagger documentation is the authoritative source for endpoints, query parameters, request payloads, response models, status codes, and error responses.

## 1. General Information

In this project, implement the frontend part of a web application for **TravelTrucks**, a company that provides camper rental services.

Before starting work, review the following materials:

- Figma design: [https://www.figma.com/design/6vTbzaB3EPgOreQz2jOJJe/Campers?node-id=48730-474&p=f&t=BjGvmaV6ehnsqGDL-0](https://www.figma.com/design/6vTbzaB3EPgOreQz2jOJJe/Campers?node-id=48730-474&p=f&t=BjGvmaV6ehnsqGDL-0)
- Backend documentation / Swagger: [https://campers-api.goit.study/docs](https://campers-api.goit.study/docs)
- Backend base URL: [https://campers-api.goit.study](https://campers-api.goit.study)

The application must include three pages:

- home page;
- camper catalog page;
- individual camper details page.



## 2. Technical Requirements

- The project must be implemented with **Next.js** and **TypeScript**.
- Routing must use **Next.js App Router**.
- Paginated HTTP requests on the catalog page must use the `useInfiniteQuery` hook from **TanStack Query**.
- The styling stack can be chosen freely, for example CSS Modules or Tailwind CSS.
- The project must be deployed on **Vercel** or **Netlify**.



## 3. Application Pages



### `/`

Home page.

The page must contain a banner with the main call to action.

### `/catalog`

Camper catalog page.

This page must display a list of available campers and provide filtering and card loading functionality.

### `/catalog/[camperId]`

Individual camper details page.

This page must display detailed information about the selected camper, an image gallery, user reviews, and a booking form.

## 4. Functional Requirements



### 4.1 Home Page

- The user must be able to navigate to the catalog page by clicking the **View Now** button.



### 4.2 Catalog Page

- The catalog page must display a list of campers received from the backend.
- Filtering must be implemented on the backend through query parameters.
- The user must be able to filter campers by:
  - **location**: text field;
  - **body type**: only one option can be selected;
  - **engine type**: only one option can be selected;
  - **transmission type**: only one option can be selected.
- The catalog page must implement **Load More** pagination:
  - after clicking the **Load More** button, 4 more cards must be loaded;
  - newly loaded cards must respect the active filters.
- Each camper card must contain a **Show more** button.
- Clicking **Show more** must open the details page for that camper in a **new browser tab**.



### 4.3 Camper Details Page

- The page must display full information about the selected camper.
- The page must open in a new browser tab when opened from the catalog card.
- The page must display **user reviews**.
- Review ratings must be displayed as a **five-star scale**.
- An **image gallery** must be implemented.
- The gallery can use the [Swiper](https://swiperjs.com/) library.
- Suggested Swiper reference: [https://swiperjs.com/demos#thumbs-gallery-loop](https://swiperjs.com/demos#thumbs-gallery-loop)
- A **booking form** must be implemented.
- Booking form data must be sent to the corresponding backend endpoint.
- After successful form submission, the user must see a **successful booking notification**.



## 5. Design and UI Requirements

- The implementation must follow the provided Figma design.
- Only the **desktop version** is mandatory.
- Responsive behavior can be implemented additionally, but it is not mandatory.
- For icons, the [React Icons](https://react-icons.github.io/react-icons/) library can be used.
- Similar icons can be selected for elements such as:
  - location;
  - rating;
  - fuel;
  - transmission;
  - vehicle type;
  - other camper characteristics.



## 6. Submission Format

The student must provide two links:

- a link to the source code repository;
- a link to the deployed application.



## 7. Evaluation

The work is evaluated on a scale from **0 to 10 points**.

During review, the following are considered:

- how completely the required functionality is implemented;
- how correctly the application works;
- how well the code and project structure are organized.

The final score depends on how many criteria are satisfied.

Some criteria are critical. Failing a critical criterion significantly reduces the result.

If the work does not satisfy at least one critical criterion, the final score is reduced by **4 points**. If several critical criteria are not satisfied, the point loss will be greater.

Before submission, critical requirements must be checked especially carefully.

## 8. Critical Criteria

Failing critical criteria significantly affects the final score.

Critical criteria include:

- compliance with the Figma design;
- no console errors;
- correct camper filtering;
- correct camper pagination.



## 9. Additional Criteria

The following are additionally evaluated:

- filled page `head` metadata;
- code formatting;
- valid and semantic markup;
- no unnecessary files in the repository;
- working image gallery on the details page;
- working booking form;
- correct backend interaction;
- meaningful `README.md` containing:
  - project name;
  - short description;
  - main features;
  - installation and usage instructions;
  - author information;
- clear commit history;
- loader during asynchronous requests.



## 10. Deadline Requirement

The homework is considered submitted on time only if its final version, including all fixes requested by the mentor, receives the "accepted" status before the established deadline.

Initial submission before the deadline without final acceptance of the corrected version within the deadline is not considered an on-time completion.

## 11. Source Priority

When sources conflict, use this priority:

1. Explicit assignment requirements from this file.
2. Swagger / backend API contract.
3. Figma design.
4. Existing project architecture and repository conventions.
5. README or other repository documentation.
6. General best practices.

Report meaningful conflicts instead of silently guessing.

## 12. API Contract Rule

The backend API documentation at [https://campers-api.goit.study/docs](https://campers-api.goit.study/docs) is authoritative for:

- endpoints;
- HTTP methods;
- path parameters;
- query parameters;
- filtering values;
- pagination behavior;
- request payloads;
- response models;
- status codes;
- error responses.

Do not guess API behavior.

If some API detail cannot be verified from Swagger or actual backend behavior, mark it as **UNVERIFIED** and ask for confirmation or verify it directly before implementation.