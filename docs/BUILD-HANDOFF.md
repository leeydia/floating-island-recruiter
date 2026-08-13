# Cursor Build Handoff — Leeydia's Floating Island

**Project:** Leeydia's Floating Island

**Purpose:** Permanent implementation guidance for Cursor / coding agents

**Status:** Build Baseline

<aside>
📌

This document tells the coding agent **how to implement the project**. It does not replace the PRD or Content Document.

</aside>

## 1. Sources of Truth

Use these sources in this order:

1. **Personal Website PRD v3.0** — authoritative source for behaviour, UX, information architecture, navigation, interactions, scene states, transitions, content panels, nodes, legends, mini-map, responsive behaviour, accessibility, performance and acceptance criteria.
2. **Content Document 2.0** — authoritative source for copy, project content, project names, categories, credits, CTAs, external links, media assignments and content hierarchy.
3. **Supplied `/website` media directory** — current implementation asset source.

Do not use requirements from PRD v1.0 or v2.0 when they conflict with v3.0. Do not rewrite, shorten, expand or invent finalized portfolio copy unless specifically instructed.

## 2. Project Direction

Build **Leeydia's Floating Island**, an interactive 2.5D personal portfolio website.

The website uses a supplied high-resolution floating-island artwork as its primary spatial interface. It is image-based rather than a true 3D environment.

The experience should feel:

- Calm
- Curious
- Thoughtful
- Professional
- Intuitive
- Contemporary
- Natural
- Memorable

It must **not feel like a game**.

## 3. Critical Architecture Rules

The website is **2.5D and image-based**.

Do NOT introduce:

- Three.js
- WebGL
- GLB models
- True 3D geometry
- Free camera rotation
- User-controlled camera zoom
- Unrequested 3D libraries

The primary island artwork must remain visually unchanged. Spatial movement is created using controlled CSS/DOM transforms, environmental layers and predefined scene transitions.

## 4. Final Top-Level Structure

There are exactly five interactive top-level destinations:

- **Works** → Maze Garden
- **Exploration** → Outdoor Theatre
- **Journey** → Harbor
- **About** → Natural Lake
- **Contact** → Lighthouse

The Pavilion / **Always Exploring** is symbolic and non-interactive. Do not create a sixth destination for it.

Works and Exploration are separate top-level sections. Do not recreate the obsolete combined Central Garden navigation.

## 5. Works Structure

### Architecture

Academic Architecture

### Branding

- F&B
- Retail & Lifestyle

### 3D Visualization

- Township & Aerial
- Exterior
- Landscape

Use the project structure and content defined in Content Document 2.0.

## 6. Exploration Structure

### AI

Vibe Coding My Personal Portfolio Website

### Photography

Use the geographic collections defined in Content Document 2.0.

Some AI media is intentionally unavailable at this stage. Do **not** invent missing AI assets. Use a clearly identifiable temporary placeholder only where implementation requires an asset.

Items that may be added later include:

- Public PRD preview
- Public PRD PDF
- User-flow / interaction visual
- Additional development screenshots
- Final live-site references

Missing AI media must not block development of the rest of the website.

## 7. Scene States

Preserve the six authoritative experience states defined by PRD 3.0:

1. Welcome
2. Island Overview
3. Landmark View
4. Mini-map Overview
5. Content Panel
6. Reduced-Motion Experience

Do not introduce additional user-facing navigation states unless technically necessary. Internal implementation state must not change the UX defined in the PRD.

## 8. Island Overview

The Island Overview is the primary spatial navigation interface.

Display the five HTML landmark navigators according to the supplied annotated-island reference. Navigators must be real responsive HTML/CSS interface elements; do not bake navigation labels into the island artwork.

Each navigator must preserve:

- Section number
- Section label
- Leader line
- Hollow anchor circle
- Luminous/translucent label treatment
- Large invisible interaction area

Hover/focus and selected behaviour must follow PRD 3.0.

## 9. Landmark Transitions

Selecting a landmark should smoothly scale and translate the island scene toward that landmark.

Do not change the island viewing angle. Do not create free camera movement.

Transition values should initially follow PRD 3.0 and then be visually calibrated against the supplied island asset. Store landmark scene transforms in centralized configuration so they can be tuned later without rewriting components.

## 10. Content Panels

Use a reusable content-panel system.

On desktop:

- Panel docks to the right.
- Approximately 50% of the viewport is available to the content panel.
- Island remains visible on the left.
- Visible scene receives the specified darkened treatment.
- Underlying landmark state remains unchanged.
- Closing the panel returns to the same landmark state.

Do not navigate to a separate webpage for standard portfolio content.

The reusable panel system must support:

- Heading
- Introduction
- Metadata
- Body copy
- Horizontal media carousel
- Expandable View Project / View Details content
- Credits
- CTA
- External links

Do not create a completely different panel implementation for every project.

## 11. Media

Use the current supplied WebP media for V1.

Do not:

- Destructively edit originals
- Automatically recompress everything during initial implementation
- Crop important portfolio work without instruction
- Replace supplied work with generated images
- Invent missing project media

Preserve image aspect ratio unless a specific component intentionally uses a crop. Use responsive image containers. Non-critical portfolio media should be lazy-loaded. Do not preload the complete portfolio on initial entry; only essential Welcome / Island Overview assets should receive loading priority.

## 12. Branding — Auri

Auri remains a valid Retail & Lifestyle project. There is intentionally **no media available for Auri**.

Do not remove the project because media is absent and do not generate substitute imagery. The content layout should gracefully support a project without media.

## 13. 3D Visualization Credits

The professional project role is **3D Artist**.

Use this wording for individual 3D Visualization project credits where specified by Content Document 2.0. Do not infer project ownership or authorship beyond the supplied credits. Respect all project-credit and copyright wording from Content Document 2.0.

## 14. Interaction Philosophy

Prioritize:

**Clarity → usability → visual quality → animation**

Animation must support comprehension rather than delay access to information. Every interactive element must provide immediate visual feedback.

Avoid:

- Excessive motion
- Game-like effects
- Dramatic camera behaviour
- Unnecessary loading animations
- Decorative interactions that interfere with reading

## 15. Responsive Strategy

Desktop is the primary experience.

The MVP must remain usable at viewport widths of **768 px and above**, as specified by PRD 3.0. Do not invent a full mobile experience below 768 px during the initial build.

However, write components and CSS so a future mobile adaptation remains possible. Avoid unnecessary fixed pixel positioning except where required for calibrated scene composition.

## 16. Accessibility

Implementation must preserve:

- Keyboard-accessible interactive elements
- Visible focus states
- Semantic HTML
- Appropriate buttons/links
- Image alt text
- Reduced-motion support
- Reasonable contrast
- Screen-reader-compatible labels

Do not make important navigation dependent solely on hover.

## 17. Code Structure

Prefer reusable, maintainable components.

Separate:

- Content/data
- UI components
- Scene configuration
- Interaction state
- Styling
- Media paths

Project copy should not be unnecessarily duplicated inside component logic. Where practical, store project/content information as structured data and render it through reusable components.

Scene transform values, landmark positions and navigator coordinates should be centralized so they can be tuned later without rewriting components.

## 18. Development Behaviour

Work **one implementation phase at a time**.

When given a phase-specific prompt:

1. Read the relevant PRD requirements.
2. Inspect the existing code before changing it.
3. Implement only the requested phase.
4. Preserve previously completed behaviour.
5. Do not redesign unrelated sections.
6. Do not silently alter finalized UX.
7. Do not invent missing requirements.
8. Do not perform broad refactors unless required for the requested phase.

If a requirement is genuinely ambiguous or conflicts with another source-of-truth requirement, flag it before making a major UX assumption.

## 19. Temporary Implementation Decisions

The current WebP media may be used even when dimensions and file sizes are not yet optimized. This is intentional. Performance/media optimization is a later implementation phase.

Incomplete AI media is also intentional. Do not treat these as blockers or attempt to solve them by changing the content strategy.

## 20. Definition of Done for Each Phase

A phase is complete only when:

- Requested behaviour works.
- Existing completed behaviour still works.
- No unrelated UX has been redesigned.
- No placeholder copy has replaced finalized content.
- No obvious console/runtime errors remain.
- Keyboard interaction works for newly introduced interactive UI.
- Layout is reasonable at the target desktop/tablet widths relevant to that phase.
- Any unresolved issue is explicitly reported.

After completing each phase, report:

**Implemented**

- What was added or changed.

**Files Changed**

- Relevant files.

**Needs Calibration**

- Visual positions, transform values or other values that should be adjusted after viewing.

**Known Issues**

- Anything intentionally incomplete.

Then stop. Do not automatically continue into the next build phase.