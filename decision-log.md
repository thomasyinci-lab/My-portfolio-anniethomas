# Decision Log

### 1. Figma Design System

- **Decision:** Chose a dark theme with an orange accent.
- **Alternative:** A light theme with blue accents.
- **Why:** Dark themes are easier on the eyes and look more modern for tech portfolios. Orange ties into networking hardware.
- **Trade-off:** Required extra work to ensure high contrast ratios for accessibility.

### 2. Navigation Bar

- **Decision:** Sticky header using Flexbox.
- **Alternative:** Static header.
- **Why:** A sticky header means users can always access the nav without scrolling up.
- **Trade-off:** Takes up a small amount of vertical screen space.

### 3. Projects Page Layout

- **Decision:** Used CSS Grid for the 3x2 card layout.
- **Alternative:** Flexbox.
- **Why:** Grid is much better for strict 2D layouts (rows and columns) and makes the alignment of the text cards and image cards perfectly symmetrical.
- **Trade-off:** Slightly more complex CSS to write initially.

### 4. GitHub API Integration

- **Decision:** Used `fetch` with `async/await` to pull repos.
- **Alternative:** Hardcoding the projects.
- **Why:** It satisfies the assignment requirement for a live API and means the portfolio updates automatically when I push new code.
- **Trade-off:** If GitHub is down or rate-limits the API, the section shows an error message.

### 5. Form Validation

- **Decision:** Custom JavaScript validation with red borders and specific error messages.
- **Alternative:** Default browser validation (`required` attribute).
- **Why:** The brief explicitly asks for useful error messages, not just the browser default red outline.
- **Trade-off:** More code to write and maintain.

### 6. Theme Toggle

- **Decision:** Used CSS variables and `localStorage` for the Dark/Light mode.
- **Alternative:** Hardcoding two separate stylesheets.
- **Why:** CSS variables make swapping themes instant and efficient. `localStorage` remembers the user's choice on reload.
- **Trade-off:** Needed to carefully manage variable names to avoid breaking the layout in light mode.

### 7. Mobile Navigation

- **Decision:** Hamburger menu that toggles a dropdown on mobile.
- **Alternative:** A horizontal scrolling nav bar on mobile.
- **Why:** A hamburger menu is the industry standard for mobile and saves valuable screen space.
- **Trade-off:** Requires JavaScript to work, unlike a pure CSS solution.

### 8. Deployment

- **Decision:** Deploying via github .
- **Alternative:** Netlify Pages.
- **Why:** Chose GitHub Pages because it's natively integrated with my repository. It eliminates the need for a third-party CI/CD pipeline, and it automatically redeploys on every push to main, which is simple and reliable for a static site 
- **Trade-off:** I chose GitHub Pages for its simplicity, but the trade-off is that I cannot natively process form submissions on the server side. I implemented client-side validation instead
