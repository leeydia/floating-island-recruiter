# Personal Website PRD v3.1

**Project Name:** Leeydia's Floating Island

**Product Type:** Interactive 2.5D Portfolio Website

**Version:** 3.1

**Owner:** Leeydia Lau

**Status:** Final Draft — Ready for Implementation

**Last Updated:** 9 August 2026

**Target Soft Launch:** 16 August 2026

<aside>
✅

**Source-of-truth notice**

This document supersedes Personal Website PRD v2.0. Requirements involving a 3D model, GLB, WebGL, Three.js, a combined Works & Exploration parent section, or a selectable Central Garden are obsolete.

</aside>

**Related pages**

- [Personal Website PRD v2.0](https://app.notion.com/p/Personal-Website-PRD-v2-0-3a2e7bf99d358064a5aad17387d248b8?pvs=21) — historical reference only
- [Content Document 2.0](https://app.notion.com/p/Content-Document-2-0-3b3e7bf99d3581498816dac09f016931?pvs=21) — current copy and content source

---

# 1. Product Overview

## 1.1 Product Summary

Leeydia's Floating Island is an interactive portfolio website that transforms a conventional portfolio into an explorable 2.5D environment.

Visitors discover Leeydia's work, career journey, interests and contact information through five top-level island destinations:

1. Works
2. Exploration
3. Journey
4. About
5. Contact

The experience uses a high-resolution island image, coded environmental effects, HTML navigators, smooth pan-and-zoom transitions and right-docked content panels. It must feel spatial and alive without requiring a true 3D model.

## 1.2 Purpose

The website has two primary purposes:

- Present Leeydia's background and portfolio clearly for recruiters and hiring managers.
- Demonstrate product thinking, visual storytelling, user-centred design and AI-assisted development.

## 1.3 Product Positioning

> **Exploration first, efficiency always available.**
> 

The island is the primary spatial interface. Direct navigation is available within landmark views for recruiters who prefer speed. Creativity must never make the portfolio harder to understand.

## 1.4 Experience Keywords

- Calm
- Curious
- Thoughtful
- Professional
- Intuitive
- Contemporary
- Natural
- Memorable

The experience must not feel like a game.

---

# 2. Goals, Users and Success Criteria

## 2.1 Primary Users

### Recruiters

- Understand Leeydia's background quickly.
- Reach selected work with minimal effort.
- View or download the resume.
- Find contact information immediately.

### Hiring Managers and Product Leaders

- Evaluate visual communication and project quality.
- Understand Leeydia's cross-disciplinary journey.
- Observe product and UX decisions.
- Assess curiosity, adaptability and ability to learn emerging tools.

## 2.2 Success Criteria

The release is successful when:

- Visitors understand who Leeydia is within 30 seconds.
- The five main sections are understandable without written instructions.
- Works and Exploration are reachable in one selection from Island Overview.
- Resume and Contact are reachable within two interactions.
- Visitors can always return to Island Overview.
- Every interactive element provides immediate feedback.
- Every content panel opens and closes without changing the underlying scene state.
- The experience remains usable at viewport widths of 768 px and above.
- The website is polished enough to include in job applications.

---

# 3. MVP Scope

## 3.1 Included

- Cloud loading and welcome screen
- 2.5D floating-island scene
- Interactive Dot Field
- Five HTML landmark navigators
- Smooth predefined scene transitions
- Slight mouse-responsive parallax
- Works, Exploration, Journey and About content nodes
- Direct Contact panel
- HTML category legends
- Code-generated inline SVG category icons
- Mini-map
- Right-docked content panel
- Desktop and tablet layouts
- Reduced-motion response
- Basic keyboard and screen-reader support
- External links and resume
- Basic visitor and interaction analytics
- Vercel deployment

## 3.2 Out of Scope

- True 3D model
- GLB assets
- WebGL or Three.js
- Free camera rotation
- User-controlled zoom
- Full mobile design below 768 px
- CMS
- Backend database
- Authentication
- Search
- Blog
- AI chatbot
- Multi-language support
- E-commerce
- Unique project URLs in the initial release
- Advanced environmental simulations
- Grass and tree animation
- Persistent visited history across browser sessions

---

# 4. Final Information Architecture

| Top-Level Section | Physical Landmark | Content |
| --- | --- | --- |
| Works | Maze Garden | Architecture, Branding, 3D Visualization |
| Exploration | Outdoor Theatre | AI, Photography |
| Journey | Harbor | Timeline, Resume |
| About | Natural Lake | About Me, A Letter to You |
| Contact | Lighthouse | Email, LinkedIn, Behance, Resume |

## 4.1 Pavilion

The pavilion is a non-interactive symbolic centrepiece.

- Display the words **Always Exploring** above or beside the pavilion.
- It is not a section, navigator, node or category.
- It has no hover, click or content behaviour.
- Its typography must be visibly different from navigators.
- It has no number, leader line or anchor circle.

## 4.2 Final Hierarchy

<aside>
🏝️

**Island Overview**

- Works → Maze Garden → 6 content nodes
- Exploration → Outdoor Theatre → 5 content nodes
- Journey → Harbor → Timeline and Resume
- About → Natural Lake → About Me and A Letter to You
- Contact → Lighthouse → Contact panel
</aside>

Works and Exploration are separate top-level sections. There is no Central Garden parent state and no combined Works & Exploration navigator.

---

# 5. Experience States

The website contains six authoritative states.

| State | Purpose | Main UI |
| --- | --- | --- |
| Welcome | Introduce the experience and load essential assets | Logo, welcome copy, loading percentage, Enter CTA |
| Island Overview | Show all five destinations | Five HTML navigators, logo, island, dot field |
| Landmark View | Focus on one section | Top-left dropdown, nodes or direct content, logo, mini-map |
| Mini-map Overview | Switch destinations or return to the previous view | Five navigators, top-left close ×, logo |
| Content Panel | Present the selected content | Darkened scene, right-docked panel, logo, close × |
| Reduced-Motion Experience | Preserve usability with fewer animations | Same content with simplified transitions |

---

# 6. First-Visit Flow

## 6.1 Welcome Copy

**Welcome.**

Beyond these clouds is a small island—

a collection of my work, experiences, and curiosity.

Take a look around.

**Enter the Island**

## 6.2 Loading and Entry

<aside>
☁️

Website opens

↓

Code-generated cloud screen appears

↓

Logo and loading percentage appear

↓

Essential island and interface assets load behind the clouds

↓

Loading reaches 100%

↓

Enter the Island becomes available

↓

User selects Enter

↓

Cloud layers disperse and fade

↓

Island Overview is revealed

</aside>

The Enter CTA must not become active before the essential Island Overview asset is ready.

The introduction replays after refresh and when the website logo is selected. No Skip Intro control is required.

---

# 7. 2.5D Scene System

## 7.1 Production Approach

The scene is image-based rather than model-based.

Layer order:

1. Sky or background gradient
2. Code-generated Interactive Dot Field
3. Transparent 4K island WebP
4. Code-generated cloud and haze layers
5. HTML navigators, nodes and labels
6. Global UI

## 7.2 Island Asset

- Source resolution: 3840 × 2160 px.
- The final transparent island-only PNG has been approved and supplied.
- Final master file: **leeydia-island-only-transparent-white-source-4k.png**.
- This lossless transparent PNG is the production master.
- An optimised transparent WebP must be exported from this exact PNG for website delivery.
- The island artwork must not include dots, navigators, nodes, labels, logo or interface.
- The final visual composition and viewing angle must remain unchanged.

## 7.3 Scene Movement

The viewing angle is fixed.

Visitors have no manual zoom control and no true rotation. Mouse movement produces only a very subtle horizontal parallax shift so the scene does not feel static.

Recommended movement range:

- Island: approximately 4–8 px horizontally.
- Background: less movement than the island.
- Foreground clouds: slightly more movement than the island.
- Movement must ease smoothly and return gently toward centre.

On tablet, a slight horizontal drag may replace mouse parallax. Pinch zoom is not required.

## 7.4 Predefined Focus Transitions

Selecting a navigator smoothly scales and translates the scene toward the chosen landmark without changing the viewing angle.

Initial tuning ranges:

| View | Approximate Scale | Focus |
| --- | --- | --- |
| Island Overview | 1.0× | Entire island |
| Works | 1.5–1.8× | Maze Garden |
| Exploration | 1.5–1.8× | Outdoor Theatre |
| Journey | 1.5–1.7× | Harbor |
| About | 1.5–1.7× | Natural Lake |
| Contact | 1.5–1.7× | Lighthouse |

Final scale and translation values must be calibrated using the transparent island asset.

---

# 8. Interactive Dot Field

The graphic environment surrounding the island is named **Interactive Dot Field**. Do not call it a particle ocean.

## 8.1 Visual Direction

- Dense field of solid blue dots arranged according to the final atmospheric reference
- Warm, light neutral background
- Dot density follows the latest approved higher-density atmospheric image, not the earlier sparse version
- Graphic and controlled rather than realistic water
- Dots must not compete visually with the island or navigator labels

## 8.2 Behaviour

### Idle

- Dots oscillate gently around their starting positions.
- Motion remains slow, subtle and continuous.

### Cursor Interaction

- Nearby dots displace slightly.
- A soft ripple expands and dissipates.
- Movement must not resemble turbulent water.

### Landmark Transition

- The field may use slight parallax to reinforce depth.
- The dot pattern remains visually continuous while the island scales and translates.

### Content Panel Open

- Gentle idle vibration continues.
- Cursor ripple interaction pauses.
- The dark overlay applies to the visible scene.
- The field remains decorative and non-interactive.

---

# 9. HTML Landmark Navigators

## 9.1 Source Reference

The navigator composition must follow the final annotated atmospheric island reference exactly in design language and approximate placement.

Reference file:

**leeydia-atmospheric-annotated-split-nodes-4k.webp**

The annotation is a design reference only. Navigators must be rebuilt as responsive HTML/CSS elements.

## 9.2 Five Navigators

1. Works — anchored to Maze Garden
2. Exploration — anchored to Outdoor Theatre
3. Journey — anchored to Harbor
4. About — anchored to Natural Lake
5. Contact — anchored to Lighthouse

## 9.3 Visual Anatomy

Each navigator contains:

- Small section number
- Bold, compact section label
- Thin leader line
- Small hollow circular anchor
- Soft luminous translucent label background
- Large invisible hit area for reliable clicking

The label, number, leader line and anchor must match the annotated reference as closely as practical.

## 9.4 Behaviour

### Idle

- Navigator remains legible without overpowering the island.

### Hover or Keyboard Focus

- Anchor and label glow softly.
- A circular emphasis appears around the anchor.
- Cursor changes to indicate interactivity.
- The related landmark may receive a subtle visual emphasis.

### Selected

- Navigator enters an active state.
- Scene transitions directly to the matching landmark.
- Relevant nodes or content appear after the transition.

## 9.5 Positioning

- Navigator coordinates must be stored as percentages relative to the scene container.
- Navigators must transform with the island so their anchors remain attached.
- Labels may use responsive offsets to prevent cropping.
- The annotated reference supplies the intended desktop placement.

---

# 10. Navigation System

## 10.1 Top-Left Dropdown

The dropdown contains:

1. Works
2. Exploration
3. Journey
4. About
5. Contact

Selecting an item moves directly to the corresponding landmark.

Visibility:

| Screen | Dropdown |
| --- | --- |
| Welcome | Hidden |
| Island Overview | Hidden |
| Landmark View | Visible |
| Mini-map Overview | Hidden |
| Content Panel | Hidden |

The current section is highlighted when the dropdown is visible.

## 10.2 Website Logo

- The final logo is a **text-only wordmark implemented as responsive HTML/CSS text**, not a production image asset.
- The approved logo image from the Logo tab is a **visual styling reference only** for typography, weight, spacing and proportions.
- If supplied to the development repository, store the reference image under `docs/references/` rather than `public/`; it must not be rendered as the live website logo using an `<img>` element.
- Use the finalized wording-only wordmark with no icon and the approved slightly bolder treatment.
- Do not redesign, add an icon or substitute a different logo treatment.
- Position: top-right.
- Visible throughout the experience.
- Selecting it returns to the Welcome Screen.
- The cloud introduction replays naturally.
- When a content panel is open, the logo appears above the panel close button.
- Logo and close button require clearly separated hit areas.

## 10.3 Mini-map

- Position: bottom-right.
- Appearance: small island thumbnail derived from the same island master.
- The interface, border, hover state and current-location indicator are created through code.
- The mini-map is clickable as one control.

Visibility:

| Screen | Mini-map |
| --- | --- |
| Welcome | Hidden |
| Island Overview | Hidden |
| Landmark View | Visible |
| Mini-map Overview | Hidden |
| Content Panel | Hidden |

Behaviour:

- Selecting the mini-map opens the same Island Overview with all five navigators.
- A close × appears at the upper-left.
- Closing returns to the exact previous landmark, scene transform and selected state.
- Selecting a new navigator moves directly to the new landmark.
- Current location is indicated on the mini-map.

---

# 11. Content Nodes and Legends

## 11.1 Common Node Behaviour

<aside>
●

Idle

↓

Hover or keyboard focus

↓

Soft glow + slight enlargement + node title

↓

Select

↓

Content panel opens

↓

Visited node darkens slightly

</aside>

Visited state:

- Remembered only during the current visit.
- Resets after refresh or a new browser session.
- Does not require local storage or a backend.

All node coordinates are stored as percentages and move with the scene.

## 11.2 Legend Rules

- Legends appear only in Works and Exploration.
- Position: top-left, below the landmark introduction.
- Legend is non-interactive.
- Each legend item contains the category icon, category colour and category label.
- The same icon and colour combination is reused by every content node in that category.
- Colour must not be the only category indicator.

## 11.3 Code-Generated Category Icons

Leeydia does not need to provide separate icon files. All five category icons are created in code as reusable inline SVG React components.

| Category | Icon | Colour |
| --- | --- | --- |
| Architecture | Minimal building outline | Red |
| Branding | Minimal identity-tag outline | Blue |
| 3D Visualization | Minimal isometric cube | Green |
| AI | Minimal connected-node symbol | Soft lavender/purple |
| Photography | Minimal camera-aperture symbol | Warm pastel yellow |

SVG requirements:

- Use a consistent 24 × 24 viewBox.
- Use outline paths with no decorative background baked into the SVG.
- Use **fill="none"** and **stroke="currentColor"** wherever practical.
- Use one consistent stroke width between approximately 1.5 and 2 px.
- Use rounded stroke caps and joins.
- Keep the symbols simple, calm and legible at small sizes.
- Recommended displayed size: 18–20 px in legends and 22–26 px in content nodes.
- The visible icon may sit inside a code-generated node container, glow or visited-state treatment.
- Do not use PNG, JPG, AI-generated raster art or separately supplied icon assets.

Accessibility:

- The legend's adjacent text label identifies the category; the repeated SVG may be hidden from assistive technology.
- Every interactive content-node button receives a hidden accessible name containing both its category and specific node title, for example **Branding: F&B**.
- Maintain a minimum interactive hit area of approximately 40 px on desktop and 44 px on tablet.

## 11.4 Landmark Introduction Rules

Landmark introductions appear only in Works and Exploration.

Placement order:

1. Top-left dropdown
2. Landmark introduction
3. Category legend

Requirements:

- Position the introduction below the dropdown and above the legend.
- Use the final copy from Content Document 2.0.
- Keep it to one or two lines.
- Style it more quietly than the active section label and legend headings.
- Keep it visible while the visitor remains in the landmark view.
- Hide it together with the dropdown, legend, mini-map and nodes when a content panel opens.
- Restore it when the content panel closes.
- On tablet, allow the text container to narrow or wrap without covering content nodes.
- The introduction is not a node, button, panel or interactive control.

---

# 12. Works

## 12.1 Entry Flow

<aside>
🌿

Select Works

↓

Scene zooms directly to Maze Garden

↓

Top-left dropdown appears

↓

Works landmark introduction appears below dropdown

↓

Works legend appears below introduction

↓

Seven content nodes appear

↓

User selects a node

↓

Content panel opens

</aside>

## 12.2 Landmark Introduction

**Copy:** Selected projects across architecture, branding, and 3D visualisation.

Use the placement and behaviour defined in Section 11.4.

## 12.3 Categories and Nodes

| Category | Icon | Colour | Nodes | General Position |
| --- | --- | --- | --- | --- |
| Architecture | Minimal building outline | Red | Academic | Left |
| Branding | Minimal identity-tag outline | Blue | F&B; Retail & Lifestyle | Right |
| 3D Visualization | Minimal isometric cube | Green | Township & Aerial; Exterior; Landscape | Centre |

Nodes are spread across the Maze Garden without overlapping. Nodes within the same category share the same category icon and colour. Hover displays the specific node title, such as **F&B**, rather than repeating the category name.

---

# 13. Exploration

## 13.1 Entry Flow

<aside>
✨

Select Exploration

↓

Scene zooms directly to Outdoor Theatre

↓

Top-left dropdown appears

↓

Exploration landmark introduction appears below dropdown

↓

Exploration legend appears below introduction

↓

Five content nodes appear

↓

User selects a node

↓

Content panel opens

</aside>

## 13.2 Landmark Introduction

**Copy:** Experiments, observations, and interests that continue to shape how I see and create.

Use the placement and behaviour defined in Section 11.4.

## 13.3 Categories and Nodes

| Category | Icon | Colour | Nodes |
| --- | --- | --- | --- |
| AI | Minimal connected-node symbol | Soft lavender/purple | Vibe Coding My Personal Portfolio Website |
| Photography | Minimal camera-aperture symbol | Warm pastel yellow | China; Indonesia; New Zealand; Europe |

AI and Photography are legend categories, not selectable parent nodes.

## 13.4 Photography Panel Layout

Each location uses:

1. Location title
2. Short introduction
3. Full-width hero photograph
4. Two-column image grid
5. Optional final full-width photograph

On narrow tablet layouts, the grid becomes one column. No carousel or lightbox is required.

---

# 14. Journey

## 14.1 Structure

Journey is represented by the Harbor and contains two separate content nodes:

1. Timeline
2. Resume

There is no general Journey content panel. The two nodes serve different purposes and must not be combined into one panel.

## 14.2 Entry Flow

<aside>
⚓

Select Journey

↓

Scene zooms directly to Harbor

↓

Timeline and Resume nodes appear

↓

User selects one node

↓

The corresponding right-docked content panel opens

</aside>

Both nodes follow the common hover, keyboard-focus, selected and visited behaviour defined in Section 11. No legend appears in Journey.

## 14.3 Timeline Node

Selecting the Timeline node opens the Timeline panel.

Panel order:

1. Panel title: **Timeline**
2. Short Timeline introduction
3. Vertical timeline entries

Each timeline entry displays:

- Date or date range
- Journey category
- Qualification or job title
- Institution or organisation, where applicable
- One short summary
- **View details** control

Selecting **View details** expands the entry within the same panel to reveal:

- Key experience or responsibilities
- What Leeydia carried forward from that stage
- A related-work action where relevant

Requirements:

- Include only the main education and career milestones from Content Document 2.0.
- Present the timeline vertically and clearly.
- Keep the default view concise and easy to scan.
- Do not include Resume actions within the Timeline panel.

## 14.4 Resume Node

Selecting the Resume node opens a separate Resume panel.

Panel order:

1. Panel title: **Resume**
2. Short Resume introduction
3. **View Resume** action
4. **Download Resume** action

Requirements:

- Do not automatically open or download the résumé when the Resume node itself is selected.
- **View Resume** opens the hosted résumé in a new browser tab.
- **Download Resume** initiates the résumé PDF download.
- Do not repeat the Timeline inside the Resume panel.
- The final résumé URL or file is supplied through Content Document 2.0.

---

# 15. About

## 15.1 Entry Flow

- Select About.
- Scene zooms directly to the Natural Lake.
- Two content nodes appear.
- Each opens its own right-docked panel.

## 15.2 Nodes

1. About Me
2. A Letter to You

**A Letter to You** is the final title. It is a general message to all visitors, not a job-specific cover letter.

---

# 16. Contact

Selecting Contact or the Lighthouse navigator directly opens the Contact panel. There is no separate Contact node.

Panel content:

- Email
- LinkedIn
- Behance
- View Resume

Behaviour:

- Email uses a mailto link and opens the visitor's email application.
- LinkedIn opens in a new tab.
- Behance opens in a new tab.
- Resume opens in a new tab.
- External destinations must not replace the portfolio tab.

Resume is intentionally available in both Journey and Contact for recruiter convenience.

---

# 17. Content Panel

## 17.1 Opening Behaviour

<aside>
→

Node or direct-content navigator selected

↓

Current scene transform remains unchanged

↓

Moderate dark overlay fades over the scene

↓

Solid content panel slides in from the right

↓

Panel becomes the primary focus

</aside>

The scene must not pan, zoom or recalculate when the panel opens.

## 17.2 Layout

| Viewport Width | Panel Width |
| --- | --- |
| 1200 px and above | 50% |
| 900–1199 px | 60% |
| 768–899 px | 100% |
- Panel is docked to the right.
- Panel scrolls independently.
- The background scene remains fixed.
- The left scene is moderately darkened.
- Interactive Dot Field idle vibration continues.
- Mouse parallax and dot ripple interaction pause.
- Navigators and nodes become non-interactive.

## 17.3 Closing Behaviour

The panel closes through:

- Close ×
- Clicking the darkened scene
- Escape key

Closing:

- Removes the overlay.
- Restores interaction.
- Returns to the exact previous scene and landmark state.
- Does not remember the previous panel scroll position.

## 17.4 Logo and Close Button

- Both appear at the top-right.
- Logo is positioned above the close ×.
- They use separate hit areas.
- Selecting the logo returns to Welcome rather than merely closing the panel.

## 17.5 Works Project Template

Recommended order:

1. Project title
2. Category
3. Hero image
4. Short overview
5. Supporting images
6. Responsibilities
7. Tools

The layout should be visually editorial and inspired by the pacing of Penderecki's Garden rather than presented as a rigid database card. No image lightbox is required.

---

# 18. Visual and Interaction Design

## 18.1 Art Direction

- Contemporary minimalism
- Natural landscape architecture
- Soft Ghibli-inspired atmosphere for lighting and mood only
- Calm morning or late-morning light
- Natural materials and dense but organised planting
- Architectural-visualisation quality
- No game-like, cyberpunk or futuristic styling

## 18.2 Interface

- Warm white and translucent neutral surfaces
- Forest green, stone grey, sky blue, lake blue and earth brown
- Accent colours reserved for content categories
- Generous spacing
- Restrained shadows
- Consistent rounded corners
- Clear typographic hierarchy

## 18.3 Typography

- Modern and highly readable
- Navigator labels: smaller size, bold weight, uppercase
- Always Exploring: visually distinct and more expressive, but still restrained
- Avoid decorative typography for functional controls

## 18.4 Motion Timing

| Motion Type | Recommended Duration | Examples |
| --- | --- | --- |
| Fast | 150–250 ms | Hover, focus, button feedback |
| Medium | 300–500 ms | Panel, overlay, legend, mini-map UI |
| Slow | 1.2–2.0 s | Landmark transition, cloud dispersal, island reveal |
| Continuous | Always active when appropriate | Dot Field idle motion and subtle clouds |

All motion must feel smooth, calm and purposeful.

---

# 19. Responsive Behaviour

## 19.1 Supported MVP Range

- Desktop and laptop: 1024 px and above
- Tablet landscape and portrait: 768 px and above
- Below 768 px: full mobile design is outside MVP

## 19.2 Tablet

- Use horizontal drag for slight scene parallax.
- No pinch zoom.
- Increase navigator and node hit areas.
- Content panel becomes full-screen in narrow portrait layouts.
- Legends must remain readable without covering nodes.
- Navigator label offsets may change while anchors remain attached to landmarks.

## 19.3 Future Mobile

Future mobile may use:

- A static island image with clickable sections, or
- Conventional portfolio navigation using the same content data.

Content and scene logic must be separated now so mobile does not require rewriting the portfolio.

---

# 20. Accessibility

Accessibility should remain automatic and visually minimal.

## 20.1 Reduced Motion

Respect the device-level reduced-motion preference.

When reduced motion is enabled:

- Replace flying camera movement with a short fade or minimal scale transition.
- Reduce or stop mouse parallax.
- Reduce Dot Field displacement.
- Simplify cloud dispersal.
- Keep all content and navigation available.

No visible accessibility control is required for MVP.

## 20.2 Accessible Controls

- Every icon-only interactive control receives a hidden accessible name.
- Navigators and nodes are keyboard focusable.
- Hover labels also appear on keyboard focus.
- Top-left dropdown, mini-map, close buttons and links support keyboard use.
- Escape closes the content panel.
- Visible focus states are required.
- Colour is never the only category indicator.

## 20.3 Images

- All meaningful project and photography images require alternative text.
- Decorative cloud and dot-field elements are hidden from assistive technology.

---

# 21. Technical Architecture

## 21.1 Recommended Stack

| Area | Decision |
| --- | --- |
| Frontend | Next.js with React and TypeScript |
| Styling | CSS Modules or equivalent scoped CSS |
| Scene Motion | CSS transforms plus a lightweight animation library where useful |
| Interactive Dot Field | Canvas 2D |
| Content | Separate typed local data files |
| Version Control | GitHub |
| Deployment | Vercel |

Do not install or use a 3D rendering library.

Category icons must be local inline SVG React components; no external icon library is required.

## 21.2 Component Structure

- WelcomeScreen
- Scene
- InteractiveDotField
- CloudLayer
- IslandArtwork
- LandmarkNavigator
- TopNavigation
- LandmarkIntroduction
- ContentNode
- CategoryIcon
- CategoryLegend
- MiniMap
- ContentPanel
- ReducedMotionController
- AnalyticsEvents

## 21.3 State to Preserve

- Current experience state
- Current landmark
- Current scene transform
- Open content item
- Visited nodes for the current visit
- Previous landmark for mini-map return
- Reduced-motion preference

## 21.4 Content Management

- Store content outside UI components.
- Use typed TypeScript data, JSON or Markdown.
- Each item requires a stable internal identifier.
- Project images and photography are referenced from the content data.
- CMS is not required.

## 21.5 Position Data

Navigator and node positions should use normalised percentage coordinates:

- x: 0–100%
- y: 0–100%
- Optional label offsets by breakpoint
- Scene transform preset for each landmark

This allows the same island artwork to scale responsively.

---

# 22. Asset Inventory

## 22.1 Final Visual References

- **Logo reference image** — final approved wording-only logo from the Logo tab; design reference only. If supplied to the repository, store as `docs/references/logo-reference.png`. The production wordmark is code-generated HTML/CSS and does not require a raster logo asset.
- **leeydia-island-only-transparent-white-source-4k.png** — final approved transparent 4K island master PNG
- **leeydia-atmospheric-more-dots-4k.png** — final approved higher-density atmosphere and Interactive Dot Field reference
- **leeydia-atmospheric-annotated-split-nodes-4k.webp** — final HTML navigator style and position reference

## 22.2 Required Production Asset

- Transparent optimised island WebP exported from the finalized transparent PNG
- Project images
- Photography images
- Resume PDF or Google Drive URL

## 22.3 Code-Generated Elements

- Sky gradient
- Interactive Dot Field
- Cloud layers
- Atmospheric haze
- Landmark navigators
- Leader lines and anchor circles
- Always Exploring wording
- Content nodes
- Code-generated inline SVG category icons
- Legends
- Mini-map frame and current-location indicator
- Dark overlay
- Loading percentage

The annotated and atmospheric reference images must not be used as flattened interactive screens.

---

# 23. Performance and Reliability

## 23.1 Performance Targets

- Transparent island WebP: preferably below 2 MB.
- Initial visual payload: preferably below 4–5 MB.
- Lazy-load project and photography images when their panels are opened.
- Serve responsive image sizes for tablet.
- Maintain smooth interaction on supported devices.
- UI feedback begins immediately after interaction.
- Prioritise scene clarity and responsiveness over decorative effects.

## 23.2 Loading and Failure

- Welcome clouds mask asset loading.
- Enter activates only when essential assets are ready.
- If the island image fails, show a retry message and preserve access to the five text navigation links.
- If optional clouds or Dot Field fail, the portfolio remains usable with a static background.
- Navigation must never lead to a dead end.
- Content panels must always remain closeable.

## 23.3 Browser Support

Primary:

- Current Chrome
- Current Edge
- Current Safari

Secondary:

- Current Firefox

---

# 24. Analytics

Track basic product events without exposing personal visitor information:

- Island entered
- Main navigator selected
- Content node opened
- Resume opened
- Email selected
- LinkedIn selected
- Behance selected

No analytics dashboard is required inside the website.

---

# 25. Acceptance Criteria

## Welcome

- [ ]  Logo, welcome copy and loading state render correctly.
- [ ]  Enter remains unavailable until essential assets are ready.
- [ ]  Clouds disperse smoothly after Enter.
- [ ]  Logo returns to Welcome and replays the introduction.

## Island Overview

- [ ]  Five navigators match the annotated reference.
- [ ]  Works and Exploration are separate navigators.
- [ ]  Navigator anchors remain attached while the scene scales.
- [ ]  Always Exploring is visible but non-interactive.
- [ ]  No top-left dropdown or mini-map is visible.

## Landmark Views

- [ ]  Each navigator moves directly to its landmark.
- [ ]  Viewing angle remains unchanged.
- [ ]  Top-left dropdown and mini-map appear.
- [ ]  Correct nodes and legends appear.
- [ ]  Works and Exploration show their landmark introduction below the dropdown and above the legend.
- [ ]  Landmark introductions hide when a content panel opens and return when it closes.
- [ ]  Current section is visually active.

## Works

- [ ]  The approved Works landmark introduction is displayed exactly.
- [ ]  Seven nodes appear in the approved category arrangement.
- [ ]  Hover or focus shows each node title.
- [ ]  Architecture, Branding and 3D Visualization use the approved code-generated icons.
- [ ]  Icons, colours and labels match the legend.
- [ ]  Visited nodes darken only during the current visit.

## Exploration

- [ ]  The approved Exploration landmark introduction is displayed exactly.
- [ ]  One AI node and four Photography nodes appear.
- [ ]  AI and Photography use the approved code-generated icons.
- [ ]  AI and Photography are legend categories, not parent nodes.
- [ ]  Photography panels use the approved editorial gallery.

## Journey and About

- [ ]  Selecting Journey reveals two independently selectable nodes: Timeline and Resume.
- [ ]  No general Journey content panel opens.
- [ ]  Timeline and Resume open separate right-docked panels.
- [ ]  The Timeline introduction appears directly below the Timeline panel title.
- [ ]  The Timeline panel contains no Resume actions.
- [ ]  The Resume panel contains View Resume and Download Resume actions.
- [ ]  View Resume opens in a new browser tab and Download Resume initiates a PDF download.
- [ ]  About contains About Me and A Letter to You.

## Contact

- [ ]  Selecting Contact opens the panel directly.
- [ ]  Email opens the visitor's email application.
- [ ]  LinkedIn, Behance and Resume open in new tabs.

## Content Panel

- [ ]  Underlying scene position does not change when opened.
- [ ]  Overlay is moderately dark.
- [ ]  Panel uses the correct responsive width.
- [ ]  Dot Field idle motion continues.
- [ ]  Panel closes using ×, darkened scene or Escape.
- [ ]  Logo is positioned above the close button.

## Responsive and Accessibility

- [ ]  Site works from 768 px upward.
- [ ]  Tablet hit areas are comfortable.
- [ ]  Reduced-motion preference is respected.
- [ ]  Essential controls are keyboard accessible.
- [ ]  Interactive icons have accessible names containing the category and node title.
- [ ]  Category SVGs remain legible at the approved sizes and do not rely on colour alone.
- [ ]  Meaningful images have alternative text.

---

# 26. Implementation Roadmap

## Phase 1 — Final Assets and Scene

- Use the finalized transparent 4K island PNG as the production master.
- Export an optimised transparent WebP from that exact master.
- Implement the finalized wordmark from the Logo tab.
- Match the latest approved higher-density atmospheric image when building the Interactive Dot Field.
- Build Welcome Screen.
- Build code-generated clouds.
- Build Interactive Dot Field.
- Place island and establish responsive scene.

## Phase 2 — Navigation

- Recreate five HTML navigators from the annotated reference.
- Add scene transform presets.
- Add top-left dropdown.
- Add mini-map and return behaviour.
- Add logo behaviour.

## Phase 3 — Content Experience

- Build shared Content Panel.
- Add Works nodes and legend.
- Add Exploration nodes and legend.
- Add Journey.
- Add About.
- Add direct Contact panel.
- Connect content data and external links.

## Phase 4 — Responsive, Accessibility and Performance

- Refine desktop widths.
- Add tablet layouts and touch behaviour.
- Add reduced-motion behaviour.
- Add accessible labels and keyboard support.
- Optimise and lazy-load images.
- Add basic analytics.

## Phase 5 — QA and Soft Launch

- Test all states and transitions.
- Test supported browsers.
- Test external links and resume.
- Test tablet portrait and landscape.
- Deploy through GitHub and Vercel.
- Publish polished first version.

---

# 27. Future Enhancements

- Full mobile layout
- Unique project URLs
- Additional AI experiments
- Additional photography locations
- More portfolio projects
- CMS
- Blog or writing
- Expanded analytics
- More advanced environmental effects

Any future feature must preserve clarity, performance and the calm visual language.

---

## Works Content Presentation — Progressive Disclosure

This section defines the presentation behaviour for project content within **Works**. Content copy and media inventories remain in **Content Document 2.0**.

### Project Content Hierarchy

When a Works project/client is opened in the right-docked content panel, content should be presented in this order:

Project / Client Name  

↓  

Short project summary + category/work tags  

↓  

Horizontal Image Carousel  

↓  

View Project →  

↓  

Expanded detailed case study  

↓  

Optional additional / process media

### Default Project State

The default state should remain concise and visual. Show:

- Project/client name
- Short summary
- Relevant category/work tags
- Horizontal image carousel
- **View Project →** control

Do **not** show the complete case study by default.

### Horizontal Image Carousel

- The primary media carousel appears **before** the View Project control.
- It is visible in the project's default state so visitors encounter the work visually before reading detailed text.
- The carousel scrolls horizontally within the content panel.
- Support multiple images per project/client.
- Media may include final work, photography, menus, campaign graphics, social content, brand identity, event imagery, website/app screens, renders, or other relevant project outputs.
- Carousel interaction must not cause the content panel or island scene to shift unexpectedly.
- Desktop interaction should support clear previous/next navigation and/or horizontal scrolling.
- Touch devices should support horizontal swipe.

### View Project Behaviour

Selecting **View Project →** expands/reveals the deeper case-study content for that project without leaving the Works content experience.

Expanded content may include:

- Context / Challenge
- My Role
- Process / Approach or What I Worked On
- Reflection
- Additional supporting/process media

The expanded state may contain additional images, but these are supplementary to the primary horizontal carousel shown before View Project.

### Consistency Across Works

Use this progressive-disclosure pattern consistently across **Architecture, Branding, and 3D Visualisation** where project depth requires it. Branding subcategories such as **F&B** and **Retail & Lifestyle** may contain multiple client projects, with each client following the same preview → carousel → View Project pattern.

### Acceptance Criteria

- A visitor can understand the project/client and see representative media without opening View Project.
- Detailed case-study text is hidden by default and revealed only after View Project is selected.
- Primary project media always appears before the View Project control.
- Additional media may appear inside the expanded case study.
- Multiple projects/clients remain easy to scan without creating a continuous wall of text.
- The interaction works within the existing right-docked content panel and does not introduce a separate page/navigation model.

---

## AI Project — PRD Preview & Public PDF Presentation

This section defines how the Product Requirements Document is presented inside **Exploration → AI → Vibe Coding My Personal Portfolio Website**. The working PRD 3.0 remains the internal implementation source. A separate public-facing PRD PDF may be prepared later for portfolio viewing.

### Default AI Project Presentation

The AI project should remain visual and scannable rather than reading like a long case study.

Recommended content order:

Project title + one-line introduction  

↓  

Primary project / final website visual  

↓  

The Idea  

↓  

How I Built It / workflow  

↓  

Selected process visuals  

↓  

What I Explored  

↓  

What I Learned  

↓  

External project links / documents

### PRD Preview

- Show **one curated PRD preview image** within the AI project content.
- The preview may be a representative page or a clean crop from the future public-facing PRD.
- Do not display multiple dense document screenshots by default.
- The preview is visual evidence of structured product-definition work; it does not need to reproduce the entire document at readable size.
- Pair it with a short label such as **Product Requirements Document** and a concise description of what the PRD defines.

### Full Public-Facing PRD

- Provide an optional **View Full PRD ↗** link beneath or near the PRD preview.
- The link opens the public-facing PRD PDF in a new tab.
- Display supporting metadata where appropriate, e.g. **PDF · Opens in new tab**.
- The public-facing PDF is a separate portfolio deliverable and will be prepared later; do not expose the internal working PRD automatically.
- Until the public-facing PDF exists, the CTA may remain hidden rather than linking to the internal Notion document.

### Supporting Process Visuals

Where available, use a small curated sequence to communicate the development journey visually:

Idea / early concept  

→ PRD / product definition  

→ User flow / interaction design  

→ Asset development / annotated island  

→ AI-assisted development  

→ Final website

The sequence should supplement the concise written content rather than introduce additional essay-length explanations.

### Acceptance Criteria

- The AI project can be understood by scanning headings, visuals, workflow, and concise bullet points.
- At least one PRD preview can be shown without requiring visitors to open the full document.
- The full PRD is optional and opens externally as a PDF when the public-facing version becomes available.
- The internal implementation PRD is not exposed by default.
- Process visuals support the story from idea to working product without turning the content panel into a document gallery.