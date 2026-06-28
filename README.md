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

*(Dashboard, Profiles, Customer View and Analytics wireframes go here.)*

---

### Mockups

High-fidelity mockups were produced to visualise the intended user interface before implementation and ensure consistency throughout development.

*(Mockup image goes here.)*

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

*GitHub Project Board screenshot goes here.*

---

### GitHub Issues

Every feature was first created as an individual GitHub Issue before development began.

Each issue included:

- A user story
- Acceptance criteria
- Development tasks
- MoSCoW priority

This approach ensured that every feature was clearly defined before implementation and could be tracked throughout development.

*GitHub Issue screenshot goes here.*

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

# Features

VIPulse has been designed as a multi-page web application that supports VIP account managers throughout the player review process. Each page has a dedicated purpose within the workflow, allowing users to review player information, generate recommendations, manage saved reviews and analyse customer trends from a central dashboard.

---

## Dashboard

*Dashboard Overview screenshot goes here.*

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

*Recommendation Panel screenshot goes here.*

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

*Saved Reviews screenshot goes here.*

Player reviews are automatically stored using Local Storage, allowing information to remain available after refreshing the browser.

Users can:

- Review previously saved players.
- Delete individual reviews.
- Clear all saved reviews.
- View behaviour badges.
- Monitor Responsible Gambling flags.

---

## Profiles

*Profiles screenshot goes here.*

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

*Player Profile screenshot goes here.*

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

*Customer Preview screenshot goes here.*

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

*Analytics screenshot goes here.*

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

*404 screenshot goes here.*

A custom 404 page was created to improve the user experience when navigating to unavailable pages.

Instead of displaying a generic browser error, users are presented with a branded page that explains the issue and provides a clear route back to the Dashboard.

### 404 Features

- Custom design.
- Consistent branding.
- Clear error message.
- Return to Dashboard button.
- Responsive layout.