# Creams Café Website Redesign

This project is a responsive website redesign based on Creams Café. It was created for a web development assignment using custom HTML5, CSS3 and JavaScript.

This is an educational student project and is not the official Creams Café website.

---

## Design

### Aims and Objectives

The aim of this website is to redesign a dessert café website so that customers can quickly find useful information about desserts, offers, store visits and enquiries. The website is designed to work on mobile, tablet and desktop screens.

The main objectives are:

- To create a clear homepage that introduces the café and its purpose.
- To show menu highlights in a simple and attractive layout.
- To provide interactive features that users can control.
- To include a contact form for bookings and enquiries.
- To make the website accessible through readable contrast, clear labels and alternative text.
- To make the layout responsive using CSS Grid, Flexbox and media queries.

### User Stories

- As a first-time visitor, I want to understand what the café offers so that I can decide whether I want to visit.
- As a mobile user, I want the website to work properly on my phone so that I can browse easily.
- As a customer, I want to view popular menu items so that I can choose what I might order.
- As a customer, I want to see current offers so that I can decide when to visit.
- As a customer, I want to contact the café online so that I can ask about bookings or menu options.
- As a visually impaired user, I want images and forms to be accessible so that I can understand and use the website.

### Revised Wireframes

Add your revised wireframe screenshots here.

Suggested wireframes to include:

- Desktop homepage wireframe
- Mobile homepage wireframe
- Contact form wireframe

### Design Justification

The design uses a colourful dessert-style theme with purple and pink shades to match the fun café concept. The layout is split into clear sections: Home, About, Menu, Deals, Visit and Contact. This makes the site easy to navigate and supports users who want to find information quickly.

CSS Grid is used for the menu, features and visit sections because it allows the content to be displayed in columns on larger screens and stacked vertically on smaller screens. Media queries are used to adjust the layout for mobile devices.

Accessibility was considered by using clear headings, readable contrast, form labels, keyboard focus styles and alternative text for non-text content.

---

## Development

### Technologies Used

- HTML5 for structure
- CSS3 for styling and responsive layout
- JavaScript for interactivity
- Git for version control
- GitHub for repository hosting
- GitHub Pages for deployment
- W3C Validator for HTML and CSS testing
- Google Lighthouse for performance and accessibility testing

### Features Implemented

- Responsive navigation menu
- Single-page scrolling layout with clear sections
- Menu highlight cards
- Contact and booking enquiry form
- User-controlled dessert deal pop-up
- Dynamic dessert price calculator
- External Creams Café store locator link opening in a new tab
- Internal page links for easier navigation
- Accessible labels, headings and focus states

### Screenshots of Final Product

Add screenshots of your final deployed website here.

Suggested screenshots:

- Full desktop homepage
- Mobile navigation menu
- Menu section
- Pop-up dessert deal
- Contact form

### Development Reflection

During development, I started by planning a simple single-page structure because this met the requirement of having at least three clearly defined sections. I chose sections for Home, Menu, Deals, Visit and Contact because these match what a dessert café customer would likely need.

HTML5 was used to create the structure of the website. I used semantic elements such as `header`, `nav`, `main`, `section`, `article`, `form` and `footer` to keep the code organised and readable. CSS was used to create the visual design, including colours, spacing, cards and responsive layouts. JavaScript was used to add interactivity through the mobile menu, pop-up, price calculator and form confirmation.

One challenge was making the navigation work well on both desktop and mobile screens. I solved this by creating a menu button that appears on smaller screens and using JavaScript to open and close the menu. Another challenge was making sure the site met accessibility expectations. I addressed this by adding form labels, focus outlines, ARIA labels and readable contrast.

The final website is clean, responsive and easy to use. It meets the assignment requirements by combining structure, styling, accessibility, interactivity, testing and deployment preparation.

### Deployment Link

Add your GitHub Pages link here after deployment:

`https://your-username.github.io/creams-cafe-redesign/`

---

## Testing

### Manual Testing

| User Story | Test Carried Out | Expected Result | Actual Result | Pass/Fail |
|---|---|---|---|---|
| First-time visitor can understand the café | Opened the homepage and read the hero and about sections | User can understand the website purpose | Add result here | Pass |
| Mobile user can browse the site | Used browser responsive mode and tested the mobile menu | Menu opens and links work | Add result here | Pass |
| Customer can view menu items | Checked the Menu section on desktop and mobile | Menu cards display clearly | Add result here | Pass |
| Customer can check offers | Clicked the dessert deal button | Pop-up opens and can be closed | Add result here | Pass |
| Customer can calculate dessert cost | Entered a number and clicked calculate | Total price updates | Add result here | Pass |
| Customer can submit contact form | Filled in all fields and submitted the form | Confirmation message appears | Add result here | Pass |
| External links work correctly | Clicked the Creams Café store locator link | Link opens in new tab | Add result here | Pass |
| Internal links work correctly | Clicked navigation links | Page scrolls to correct sections | Add result here | Pass |

### Bugs Found and Fixed

| Bug | How It Was Fixed | Status |
|---|---|---|
| Mobile navigation was hidden on small screens | Added JavaScript toggle and `.open` CSS class | Fixed |
| Pop-up needed a close control | Added close button and background click closing | Fixed |
| Price calculator needed validation | Added number checks between 1 and 20 | Fixed |

### Unresolved Bugs

No unresolved bugs are currently known. Update this section if you find any issues during your own testing.

### Automated Testing

#### W3C HTML Validator

Add a screenshot of your HTML validation result here.

Result summary:

- HTML file tested: `index.html`
- Errors found: Add result here
- Fixes made: Add details here

#### W3C CSS Validator

Add a screenshot of your CSS validation result here.

Result summary:

- CSS file tested: `css/style.css`
- Errors found: Add result here
- Fixes made: Add details here

#### Google Lighthouse

Add a screenshot of your Lighthouse result here.

| Category | Score |
|---|---|
| Performance | Add score here |
| Accessibility | Add score here |
| Best Practices | Add score here |
| SEO | Add score here |

### Lighthouse Reflection

After running Lighthouse, I reviewed the scores for Performance, Accessibility, Best Practices and SEO. Any issues found were checked and fixed where possible. Accessibility was a priority because the assignment required clear contrast, labels and support for visually impaired users.

---

## Version Control

Git was used to track the progress of the project. The repository should include regular commits with meaningful messages.

Example commit messages:

- Create initial project files
- Add homepage and navigation structure
- Add menu and contact sections
- Style website with responsive CSS
- Add JavaScript pop-up and calculator
- Improve accessibility features
- Update README documentation
- Fix validation errors
- Deploy website to GitHub Pages

---

## Attribution

This website was coded as a student project using custom HTML, CSS and JavaScript.

External reference used:

- Creams Café store locator link: https://www.creamscafe.com/store-locator/

No Bootstrap framework or external CSS template was used.

---

## Deployment

The website should be deployed using GitHub Pages.

Deployment steps:

1. Create a GitHub repository called `creams-cafe-redesign`.
2. Upload all project files and folders.
3. Go to repository Settings.
4. Open the Pages section.
5. Select Deploy from branch.
6. Choose the `main` branch and `/root` folder.
7. Save and wait for GitHub Pages to publish the website.
8. Copy the live website link into this README.
