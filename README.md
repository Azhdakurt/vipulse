# VIPulse

![VIPulse Mockup](assets/documentation/mockups/vipulse-mockup.png)

## Interactive VIP Retention Dashboard for iGaming Teams

## Live Project

| Description | Link |
|------------|------|
| Live Application | https://YOUR-GITHUB-PAGES-LINK |
| GitHub Repository | https://github.com/YOUR-USERNAME/vipulse |

---

## Project Overview

VIPulse is an interactive VIP player review dashboard developed for customer retention teams within the iGaming industry. The application enables account managers to manually review VIP player activity, assess bonus eligibility, identify potential churn risks and generate personalised engagement recommendations based on player behaviour.

The project was designed to simulate a real-world internal business tool where VIP managers can analyse customer data, save player reviews, search and filter previously reviewed players, access individual player profiles and monitor overall retention trends through an analytics dashboard.

The application was built using HTML, CSS and Vanilla JavaScript, with browser-based data persistence provided through Local Storage. It follows a responsive, mobile-first approach and was developed using an Agile workflow using GitHub Issues, GitHub Projects and MoSCoW prioritisation throughout the project lifecycle.

---

# Table of Contents

- [Project Goals](#project-goals)
- [User Experience (UX)](#user-experience-ux)
- [Agile Development](#agile-development)
- [User Stories](#user-stories)
- [Features](#features)
- [Future Features](#future-features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)

## Project Goals

### User Goals

The primary users of VIPulse are VIP account managers and customer retention teams working within the iGaming industry. The application has been designed to support their day-to-day workflow by simplifying the manual review process and providing clear, data-driven recommendations.

The main user goals are to:

- Easily enter and review VIP player information.
- Receive personalised engagement recommendations based on player behaviour.
- Identify players at risk of churn.
- Review bonus eligibility before making promotional decisions.
- Highlight responsible gambling concerns where appropriate.
- Save player reviews for future reference.
- Search and filter saved player reviews efficiently.
- Access player profiles and analytics from a central dashboard.

### Site Owner Goals

The project aims to demonstrate how an internal customer retention tool could improve operational efficiency by providing a structured review process for VIP managers.

The main site owner goals are to:

- Demonstrate JavaScript-driven business logic within a realistic business scenario.
- Provide a responsive and accessible user experience across multiple devices.
- Showcase dynamic data handling using Local Storage.
- Present customer retention insights through a clear and intuitive dashboard.
- Simulate a real-world internal business application suitable for the iGaming industry.

## User Experience (UX)

### Target Audience

VIPulse has been designed for professionals working within customer retention and VIP management teams in the iGaming industry. The application simulates an internal business tool rather than a customer-facing product.

The primary target users include:

- VIP Account Managers
- Customer Retention Specialists
- CRM Teams
- Customer Experience Managers
- VIP Team Leaders

---

### User Requirements

The application was designed around several key user requirements identified during the planning stage:

- Quickly review VIP player information.
- Make informed bonus decisions.
- Identify players at risk of churn.
- Flag responsible gambling concerns.
- Save reviews for future reference.
- Search and filter previous reviews efficiently.
- Access player analytics through a central dashboard.

---

### Design Choices

VIPulse was designed using a modern dark interface inspired by internal CRM and business intelligence platforms commonly used within the iGaming industry.

The interface prioritises clarity and usability by presenting important player information through clearly separated content panels, colour-coded status indicators and dashboard summary cards. The overall layout focuses on reducing visual clutter while allowing VIP managers to access critical information quickly.

---

### Colour Scheme

A dark colour palette was selected to provide a modern dashboard appearance while reducing visual fatigue during prolonged use.

Accent colours were used consistently throughout the application to highlight:

- Success states
- Warning messages
- Responsible gambling alerts
- Churn risk indicators
- Dashboard statistics

---

### Typography

The application uses **Poppins** as its primary font to provide a clean, modern and highly readable interface across desktop, tablet and mobile devices.

---

### Wireframes

Initial low-fidelity wireframes were created during the planning phase to define the layout and user flow before development began.

![Dashboard Wireframe](assets/documentation/wireframes/dashboard-wireframe.png)

![Profiles Wireframe](assets/documentation/wireframes/profiles-wireframe.png)

![Customer View Wireframe](assets/documentation/wireframes/customer-view-wireframe.png)

![Analytics Wireframe](assets/documentation/wireframes/analytics-wireframe.png)

---

### Mockups

High-fidelity mockups were produced to visualise the intended user interface before implementation and ensure consistency throughout development.

![VIPulse Mockup](assets/documentation/mockups/vipulse-mockup.png)

---

## Agile Development

The project was planned and managed using the Agile methodology throughout the entire development lifecycle. GitHub Issues, GitHub Projects and Milestones were used to organise development tasks, prioritise features and monitor overall project progress from planning through to deployment.

Development followed an iterative approach, allowing features to be implemented, tested and refined throughout the project. Each feature was created from an individual GitHub Issue containing a user story, acceptance criteria and implementation tasks before being added to the project board.

---

### MoSCoW Prioritisation

To effectively manage the project scope, the MoSCoW prioritisation framework was used throughout development.

The project requirements were categorised as follows:

- **Must Have** – Essential functionality required for a fully working Minimum Viable Product (MVP).
- **Should Have** – Important features that significantly improve the user experience but are not essential for the MVP.
- **Could Have** – Additional features that provide extra value if time allows.
- **Won't Have** – Features intentionally excluded from the current release and considered for future development.

---

### GitHub Project Board

GitHub Projects was used as a Kanban board to organise development into the following stages:

- To Do
- In Progress
- Done

The project board provided a clear overview of development progress and ensured that tasks remained organised throughout the project.

![GitHub Project Board](assets/documentation/screenshots/github-project-board.png)

---

### GitHub Issues

Every feature was first created as an individual GitHub Issue before development began.

Each issue included:

- A user story
- Acceptance criteria
- Development tasks
- MoSCoW priority

This approach ensured that every feature was clearly defined before implementation and could be tracked throughout development.

![GitHub Issues](assets/documentation/screenshots/github-issues.png)

---

## User Stories

The project was developed using 17 user stories prioritised with the MoSCoW method.

### Must Have User Stories

| ID | User Story | Status |
|----|------------|--------|
| #1 | Manual Player Data Entry | ✅ Completed |
| #2 | Dashboard Summary | ✅ Completed |
| #3 | Wagering Completion Review | ✅ Completed |
| #5 | Identify Inactive VIP Players | ✅ Completed |
| #6 | Engagement Recommendations | ✅ Completed |
| #8 | Responsible Gambling Override | ✅ Completed |
| #10 | Clear Error Messages | ✅ Completed |
| #12 | Persistent Saved Reviews | ✅ Completed |
| #15 | Helpful 404 Page | ✅ Completed |
| #16 | Create Player Profiles Page | ✅ Completed |
| #17 | Create Analytics Page | ✅ Completed |

---

### Should Have User Stories

| ID | User Story | Status |
|----|------------|--------|
| #4 | Recent Bonus Activity Review | ✅ Completed |
| #7 | Player Behaviour Indicators | ✅ Completed |
| #9 | Safer Gambling Warning | ✅ Completed |
| #11 | Search and Filter Saved Reviews | ✅ Completed |

---

### Could Have User Stories

| ID | User Story | Status |
|----|------------|--------|
| #13 | Customer VIP Preview | ✅ Completed |
| #14 | Customer VIP Progress | ⏳ Future Development |

All **Must Have** and **Should Have** user stories were successfully completed before project submission.

One **Could Have** feature (**Customer VIP Progress**) was intentionally postponed for future development in order to prioritise the successful delivery of all core functionality within the project timeframe.

---

## Features

VIPulse has been designed as a multi-page web application that supports VIP account managers throughout the player review process. Each page has a dedicated purpose within the workflow, allowing users to review player information, generate recommendations, manage saved reviews and analyse customer trends from a central dashboard.

---

## Dashboard

![Dashboard Overview](assets/documentation/screenshots/dashboard-overview.png)

The Dashboard serves as the central workspace of the application. It provides VIP account managers with an overview of player activity while allowing them to complete manual player reviews and instantly generate business recommendations.

The page combines dashboard statistics, player review forms, recommendation logic and saved player reviews into a single workspace, reducing the need to navigate between multiple systems.

### Dashboard Features

- Responsive sidebar navigation.
- Dashboard KPI summary cards.
- Manual player review form.
- Real-time JavaScript validation.
- Dynamic recommendation engine.
- Responsible Gambling override logic.
- Bonus eligibility review.
- Local Storage integration.
- Saved player review cards.
- Dynamic dashboard statistics.

---

### Recommendation Engine

![Recommendation Engine](assets/documentation/screenshots/recommendation-panel.png)

After a successful player review, JavaScript analyses the submitted information and generates personalised engagement recommendations based on player behaviour.

Recommendations automatically adapt depending on factors including:

- Activity trend
- Churn risk
- Wagering completion
- Bonus eligibility
- Responsible Gambling indicators

This allows VIP managers to make consistent and informed customer retention decisions without requiring complex manual calculations.

---

### Saved Reviews

![Saved Reviews](assets/documentation/screenshots/saved-reviews.png)

Player reviews are automatically stored using Local Storage, allowing information to remain available after refreshing the browser.

Users can:

- Review previously saved players.
- Delete individual reviews.
- Clear all saved reviews.
- View behaviour badges.
- Monitor Responsible Gambling flags.

---

## Profiles

![Profiles Page](assets/documentation/screenshots/profiles-page.png)

The Profiles page provides a searchable overview of all saved VIP player reviews. It enables account managers to quickly locate individual players and review previously submitted information without creating duplicate entries.

The page supports efficient customer management through built-in search and filtering tools.

### Profile Features

- Search saved players by Player ID.
- Filter reviews by VIP Tier.
- Filter reviews by Churn Risk.
- Dynamic search results.
- Responsive review card layout.
- Behaviour status indicators.
- Quick access to player profiles.

---

### Individual Player Profile

![Player Profile](assets/documentation/screenshots/player-profile.png)

Each player profile presents a complete overview of the selected VIP customer's review.

Information displayed includes:

- Player details
- VIP Tier
- Deposit amount
- Wagering completion
- Activity trend
- Bonus status
- Churn risk
- Responsible Gambling status
- Personalised recommendation

This provides account managers with all relevant customer information in one place, supporting faster and more consistent retention decisions.

---

## Customer Preview

![Customer Preview](assets/documentation/screenshots/customer-preview.png)

The Customer Preview page demonstrates how internal VIP review data could be presented from a customer-facing perspective.

Instead of displaying operational information used by VIP managers, the page presents a simplified customer experience including VIP status, rewards and membership information.

This separation highlights the difference between internal operational tools and customer-facing interfaces.

### Customer Preview Features

- Customer-friendly layout.
- VIP membership overview.
- Reward status display.
- Responsive design.
- Dynamic player information.

---

## Analytics

![Analytics Dashboard](assets/documentation/screenshots/analytics-page.png)

The Analytics page provides a visual overview of saved player data, allowing VIP managers to identify trends and prioritise customer retention activities.

Statistics are generated dynamically from Local Storage and update automatically as player reviews are created or removed.

### Analytics Features

- Total review statistics.
- VIP tier distribution.
- Churn risk overview.
- Responsible Gambling review summary.
- Bonus eligibility overview.
- Dynamic JavaScript calculations.

---

## Custom 404 Page

![Custom 404 Page](assets/documentation/screenshots/404-page.png)

A custom 404 page was created to improve the user experience when navigating to unavailable pages.

Instead of displaying a generic browser error, users are presented with a branded page that explains the issue and provides a clear route back to the Dashboard.

### 404 Features

- Custom design.
- Consistent branding.
- Clear error message.
- Return to Dashboard button.
- Responsive layout.

---

## Future Features

Although the core objectives of the project were successfully completed, several additional features have been identified for future development.

Potential future enhancements include:

- Customer VIP Progress page, originally planned as a Could Have user story.
- User authentication and secure login functionality.
- Database integration to replace Local Storage with permanent data storage.
- Interactive charts and graphical analytics.
- Export player reviews as PDF or CSV files.
- Integration with CRM or player management systems through external APIs.
- Advanced filtering and sorting options for player reviews.
- Email notification system for high-risk churn alerts.

These improvements would further enhance the application's scalability and better simulate a real-world internal CRM platform used within the iGaming industry.

---

## Testing

Testing was carried out throughout the development process rather than being completed only at the end of the project. Each new feature was manually tested during development before being validated across different browsers, screen sizes and validation tools.

The testing process focused on ensuring that the application remained responsive, accessible and functionally consistent across all implemented features.

---

### Manual Testing

Manual testing was performed continuously during development to verify that each user story functioned as expected.

The following core functionality was tested:

- Navigation between all pages.
- Manual player review submission.
- Form validation.
- Recommendation generation.
- Responsible Gambling override.
- Dashboard statistics.
- Local Storage persistence.
- Search and filter functionality.
- Player profile navigation.
- Analytics calculations.
- Customer Preview page.
- Custom 404 page navigation.

All completed functionality behaved as expected during testing.

---

## Browser Compatibility

The application was tested across multiple modern desktop browsers to ensure consistent functionality and layout.

| Browser | Result |
|----------|--------|
| Google Chrome | ✅ Passed |
| Mozilla Firefox | ✅ Passed |
| Safari | ✅ Passed |

![Browser Compatibility](assets/documentation/testing/browser-testing/firefox-browser-testing.png)

![Browser Compatibility](assets/documentation/testing/browser-testing/chrome-browser-testing.png)

![Browser Compatibility](assets/documentation/testing/browser-testing/safari-browser-testing.png)
---

## Responsive Testing

Responsive behaviour was tested using Chrome Developer Tools across multiple viewport sizes.

The application remained fully responsive across:

| Device | Result |
|---------|--------|
| Desktop | ✅ Passed |
| iPad Air | ✅ Passed |
| iPhone 14 Pro Max | ✅ Passed |
| iPhone SE | ✅ Passed |

The dashboard layout, navigation, forms and interactive components remained fully usable across all tested screen sizes.

![Responsive Testing](assets/documentation/testing/responsive/desktop-responsive.png)

![Responsive Testing](assets/documentation/testing/responsive/ipad-air-responsive.png)

![Responsive Testing](assets/documentation/testing/responsive/iphone-se-responsive.png)

![Responsive Testing](assets/documentation/testing/responsive/iphone-14-pro-max-responsive.png)

---

## Code Validation

The completed project was validated using recognised industry validation tools.

### HTML Validation

Each HTML page was individually validated using the W3C HTML Validator.

The following pages were successfully validated without errors:

- Dashboard
- Profiles
- Customer View
- Analytics
- 404 Page

![Dashboard HTML Validation](assets/documentation/testing/validation/dashboard-html-validation.png)

![Profiles HTML Validation](assets/documentation/testing/validation/profiles-html-validation.png)

![Customer Preview HTML Validation](assets/documentation/testing/validation/customer-view-html-validation.png)

![Analytics HTML Validation](assets/documentation/testing/validation/analytics-html-validation.png)

![404 HTML Validation](assets/documentation/testing/validation/404-html-validation.png)

---

### CSS Validation

The project stylesheet was validated using the W3C CSS Validator.

No errors were identified.

![CSS Validation](assets/documentation/testing/validation/css-validation.png)

---

### JavaScript Validation

JavaScript code was validated using JSHint.

Minor formatting warnings were resolved during development and no significant JavaScript issues remained within the final submission.

![JSHint Validation](assets/documentation/testing/validation/jshint-validaton.png)

---

## Lighthouse Testing

Lighthouse testing was completed using the Desktop configuration within Chrome Developer Tools.

The project achieved consistently high scores across all pages for:

- Performance
- Accessibility
- Best Practices
- SEO

Minor Accessibility score reductions were caused by intentional colour contrast choices used to preserve the dashboard's visual hierarchy.

![Dashboard Lighthouse](assets/documentation/testing/lighthouse/dashboard-lighthouse.png)

![Profiles Lighthouse](assets/documentation/testing/lighthouse/profiles-lighthouse.png)

![Customer Preview Lighthouse](assets/documentation/testing/lighthouse/customer-view-lighthouse.png)

![Analytics Lighthouse](assets/documentation/testing/lighthouse/analytics-lighthouse.png)

![404 Lighthouse](assets/documentation/testing/lighthouse/404-lighthouse.png)

---

## Bug Fixes

Throughout development, several issues were identified through manual testing, validation and cross-browser testing. These issues were resolved before the final submission to improve the application's functionality, accessibility and overall user experience.

Many of these improvements were identified following HTML and CSS validation, JSHint analysis, Lighthouse testing and cross-browser compatibility checks.

| Issue Identified | Resolution |
|------------------|------------|
| 404 page styling not loading after deployment | Updated relative asset paths to ensure all assets loaded correctly when deployed to GitHub Pages. |
| Return to Dashboard button not navigating correctly | Corrected the navigation path to ensure users could return to the Dashboard successfully. |
| Accessibility warning for filter controls | Added accessible labels to filter controls to improve accessibility compliance. |
| Missing page meta descriptions | Added unique meta descriptions to all HTML pages to improve SEO and Lighthouse scores. |
| JSHint formatting warnings | Removed trailing whitespace and reformatted the JavaScript code to resolve formatting warnings. |
| Saved Reviews not updating correctly | Updated the rendering logic to ensure saved reviews refreshed correctly after user actions. |

These improvements contributed to a more stable, accessible and user-friendly application while ensuring successful validation and deployment before the final submission.

---

## Deployment

### GitHub Pages

The project was deployed using **GitHub Pages**.

To deploy the project:

1. Log in to GitHub and open the project repository.
2. Navigate to **Settings**.
3. Select **Pages** from the left-hand menu.
4. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **Save**.
6. After a few moments, GitHub generates a live deployment URL.

The live application can be accessed here:

**Live Site:** https://YOUR-GITHUB-PAGES-LINK

---

### Cloning the Repository

To clone this repository:

1. Open the repository on GitHub.
2. Click the **Code** button.
3. Copy the HTTPS URL.
4. Open your preferred IDE.
5. Run the following command:

```bash
git clone https://github.com/YOUR-USERNAME/vipulse.git
```

---

### Forking the Repository

To create your own copy of this repository:

1. Log in to GitHub.
2. Navigate to the repository.
3. Click the **Fork** button located in the top-right corner.
4. GitHub will create a copy of the repository in your own account.

---

## Credits

### Content

- All written content was created by the project author.

---

### Resources

The following resources were used throughout the planning and development of this project:

- Bootstrap 5 Documentation
- MDN Web Docs
- W3Schools
- Google Fonts
- Font Awesome

---

### AI Assistance

ChatGPT was used throughout the project for:

- Planning project structure.
- Brainstorming feature ideas.
- README documentation support.
- Wireframe planning.
- High-fidelity mockup planning.
- General debugging guidance and code explanations.

All implementation, testing, debugging and final project decisions were completed and verified by the project author.

---

## Acknowledgements

I would like to thank:

- My Code Institute facilitator and the Code Institute community for their guidance and learning resources.
- My family for their encouragement and patience throughout the development of this project.
- OpenAI's ChatGPT for providing planning support, documentation guidance and technical explanations throughout the project.

---

© 2026 VIPulse | Developed as part of the Code Institute Level 5 Diploma in Web Application Development.