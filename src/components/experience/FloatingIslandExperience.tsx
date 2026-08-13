"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { AboutIntroduction } from "@/components/about/AboutIntroduction";
import { LetterPanel } from "@/components/about/LetterPanel";
import { AboutPanel } from "@/components/about/AboutPanel";
import { ContentPanel } from "@/components/content/ContentPanel";
import { ContactIntroduction } from "@/components/contact/ContactIntroduction";
import { ContactPanel } from "@/components/contact/ContactPanel";
import { AIExplorationPanel } from "@/components/exploration/AIExplorationPanel";
import { ExplorationIntroduction } from "@/components/exploration/ExplorationIntroduction";
import { PhotographyPanel } from "@/components/exploration/PhotographyPanel";
import { TimelinePanel } from "@/components/journey/TimelinePanel";
import { WorksLegend } from "@/components/works/WorksLegend";
import { WorksPanel } from "@/components/works/WorksPanel";
import { ABOUT_NODES } from "@/config/about";
import { CONTACT_PANEL_OPEN_DELAY_MS } from "@/config/contact";
import { EXPLORATION_NODES } from "@/config/exploration";
import { JOURNEY_PANEL_OPEN_DELAY_MS } from "@/config/journey";
import { NAVIGATORS } from "@/config/navigators";
import { PARALLAX } from "@/config/scene";
import { WORKS_NODES } from "@/config/works";
import {
  ABOUT_PANEL_INTRODUCTION,
  LETTER_TO_YOU_PANEL_INTRODUCTION,
} from "@/content/about";
import { CONTACT_PANEL_INTRODUCTION } from "@/content/contact";
import {
  AI_PANEL_INTRODUCTION,
  PHOTOGRAPHY_PANEL_INTRODUCTION,
} from "@/content/exploration";
import { TIMELINE_INTRODUCTION } from "@/content/journey";
import { WORKS_CONTENT } from "@/content/works";
import { useExperience } from "@/context/ExperienceContext";
import { useAssetPreloader } from "@/hooks/useAssetPreloader";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { AboutNodes } from "./AboutNodes";
import { CloudLayer } from "./CloudLayer";
import { ExplorationNodes } from "./ExplorationNodes";
import { InteractiveDotField } from "./InteractiveDotField";
import { IslandArtwork } from "./IslandArtwork";
import { LandmarkNavigator } from "./LandmarkNavigator";
import { MiniMap, MiniMapClose } from "./MiniMap";
import { PavilionLabel } from "./PavilionLabel";
import { TopNavigation } from "./TopNavigation";
import { WelcomeScreen } from "./WelcomeScreen";
import { Wordmark } from "./Wordmark";
import { WorksNodes } from "./WorksNodes";
import type {
  AboutContentItemId,
  ContentItemId,
  ExplorationContentItemId,
  LandmarkId,
  WorksContentItemId,
} from "@/types/experience";
import styles from "./FloatingIslandExperience.module.css";

export function FloatingIslandExperience() {
  const rootRef = useRef<HTMLElement>(null);
  const lastContentItemRef = useRef<ContentItemId | null>(null);
  const lastAutomaticDestinationRef = useRef<LandmarkId | null>(null);
  const overviewFocusTargetRef = useRef<LandmarkId | null>(null);
  const latestExperienceRef = useRef({
    experienceState: "welcome",
    selectedLandmark: null as LandmarkId | null,
  });
  const parallaxTargetRef = useRef(0);
  const parallaxCurrentRef = useRef(0);
  const [islandReady, setIslandReady] = useState(false);
  const [islandError, setIslandError] = useState<string | null>(null);
  const {
    loadingProgress,
    assetsReady,
    error: preloadError,
    retry,
    attempt,
  } = useAssetPreloader();
  const {
    experienceState,
    selectedLandmark,
    openContentItem,
    visitedContentItems,
    sceneTransform,
    isEntering,
    selectNavigator,
    openMiniMap,
    closeMiniMap,
    openContentPanel,
    closeContentPanel,
    closeContentPanelToIslandOverview,
    returnToWelcome,
  } = useExperience();
  const reducedMotion = useReducedMotion();

  const isWelcome = experienceState === "welcome";
  const isIslandOverview = experienceState === "island-overview";
  const isLandmarkView = experienceState === "landmark-view";
  const isMiniMapOverview = experienceState === "minimap-overview";
  const isContentPanel = experienceState === "content-panel";
  const hasFocusedLandmark =
    (isLandmarkView || isContentPanel) && selectedLandmark !== null;
  const isWorksScene = hasFocusedLandmark && selectedLandmark === "works";
  const isExplorationScene =
    hasFocusedLandmark && selectedLandmark === "exploration";
  const isAboutScene = hasFocusedLandmark && selectedLandmark === "about";
  const isContactScene = hasFocusedLandmark && selectedLandmark === "contact";
  const showNavigators =
    isIslandOverview || isMiniMapOverview || isEntering;
  const sceneVisible = !isWelcome || isEntering;
  const sceneReady = assetsReady && islandReady;
  const loadError = preloadError ?? islandError;
  const displayedProgress = sceneReady
    ? 100
    : Math.min(96, assetsReady ? 96 : loadingProgress);
  const selectedNavigator = NAVIGATORS.find(
    (navigator) => navigator.id === selectedLandmark,
  );
  const cameraStyle = {
    "--scene-scale": sceneTransform.scale,
    "--scene-translate-x": `${sceneTransform.translateX}%`,
    "--scene-translate-y": `${sceneTransform.translateY}%`,
  } as CSSProperties;
  const sceneLabel = selectedNavigator
    ? `${selectedNavigator.label} landmark view at ${selectedNavigator.landmark}`
    : "Floating island overview";

  const handleIslandReady = useCallback(() => {
    setIslandReady(true);
    setIslandError(null);
  }, []);

  const handleIslandError = useCallback(() => {
    setIslandReady(false);
    setIslandError("The island could not be prepared. Please try again.");
  }, []);

  const handleRetry = useCallback(() => {
    setIslandReady(false);
    setIslandError(null);
    retry();
  }, [retry]);

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (
        reducedMotion ||
        isContentPanel ||
        !window.matchMedia("(pointer: fine)").matches
      ) {
        return;
      }

      parallaxTargetRef.current = Math.max(
        -1,
        Math.min(1, (event.clientX / window.innerWidth) * 2 - 1),
      );
    },
    [isContentPanel, reducedMotion],
  );

  const handlePointerLeave = useCallback(() => {
    parallaxTargetRef.current = 0;
  }, []);

  useEffect(() => {
    latestExperienceRef.current = { experienceState, selectedLandmark };
  }, [experienceState, selectedLandmark]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const rootStyle = root.style;

    if (reducedMotion || !window.matchMedia("(pointer: fine)").matches) {
      parallaxTargetRef.current = 0;
      parallaxCurrentRef.current = 0;
      rootStyle.setProperty("--parallax-background-x", "0px");
      rootStyle.setProperty("--parallax-island-x", "0px");
      rootStyle.setProperty("--parallax-cloud-x", "0px");
      return;
    }

    let frameId = 0;

    function updateParallax() {
      const current = parallaxCurrentRef.current;
      const target = parallaxTargetRef.current;
      const next = current + (target - current) * 0.055;
      parallaxCurrentRef.current = Math.abs(target - next) < 0.0005 ? target : next;

      rootStyle.setProperty(
        "--parallax-background-x",
        `${parallaxCurrentRef.current * PARALLAX.backgroundMaxPx}px`,
      );
      rootStyle.setProperty(
        "--parallax-island-x",
        `${parallaxCurrentRef.current * PARALLAX.islandMaxPx}px`,
      );
      rootStyle.setProperty(
        "--parallax-cloud-x",
        `${parallaxCurrentRef.current * PARALLAX.cloudMaxPx}px`,
      );

      frameId = window.requestAnimationFrame(updateParallax);
    }

    frameId = window.requestAnimationFrame(updateParallax);
    return () => window.cancelAnimationFrame(frameId);
  }, [reducedMotion]);

  useEffect(() => {
    if (!isMiniMapOverview) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMiniMap();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeMiniMap, isMiniMapOverview]);

  useEffect(() => {
    if (!isContentPanel) return;
    parallaxTargetRef.current = parallaxCurrentRef.current;
  }, [isContentPanel]);

  useEffect(() => {
    const directDestination =
      selectedLandmark === "journey"
        ? {
            contentItem: "journey-timeline" as const,
            delay: JOURNEY_PANEL_OPEN_DELAY_MS,
          }
        : selectedLandmark === "contact"
          ? {
              contentItem: "contact-details" as const,
              delay: CONTACT_PANEL_OPEN_DELAY_MS,
            }
          : null;

    if (!directDestination) {
      lastAutomaticDestinationRef.current = selectedLandmark;
      return;
    }

    if (isMiniMapOverview) {
      lastAutomaticDestinationRef.current = null;
      return;
    }

    if (
      !isLandmarkView ||
      lastAutomaticDestinationRef.current === selectedLandmark
    ) {
      return;
    }

    const expectedLandmark = selectedLandmark;
    lastAutomaticDestinationRef.current = expectedLandmark;
    const timerId = window.setTimeout(() => {
      const latestExperience = latestExperienceRef.current;
      if (
        latestExperience.experienceState !== "landmark-view" ||
        latestExperience.selectedLandmark !== expectedLandmark
      ) {
        return;
      }

      openContentPanel(directDestination.contentItem);
    }, reducedMotion ? directDestination.delay.reducedMotion : directDestination.delay.default);

    return () => window.clearTimeout(timerId);
  }, [
    isLandmarkView,
    isMiniMapOverview,
    openContentPanel,
    reducedMotion,
    selectedLandmark,
  ]);

  useEffect(() => {
    if (
      isContentPanel ||
      (!isWorksScene &&
        !isExplorationScene &&
        !isAboutScene) ||
      !lastContentItemRef.current
    ) {
      return;
    }

    const contentItem = lastContentItemRef.current;
    const worksNode = contentItem.startsWith("works-")
      ? WORKS_NODES.find((node) => node.id === contentItem)
      : null;
    const worksLabel = worksNode
      ? `${worksNode.categoryLabel}: ${worksNode.label}`
      : null;
    const explorationNode = contentItem.startsWith("exploration-")
      ? EXPLORATION_NODES.find((node) => node.id === contentItem)
      : null;
    const explorationLabel = explorationNode
      ? `Exploration: ${explorationNode.label}`
      : null;
    const aboutNode = contentItem.startsWith("about-")
      ? ABOUT_NODES.find((node) => node.id === contentItem)
      : null;
    const aboutLabel = aboutNode ? `About: ${aboutNode.label}` : null;
    const label =
      worksLabel ??
      explorationLabel ??
      aboutLabel;
    if (!label) return;
    const frameId = window.requestAnimationFrame(() => {
      document
        .querySelector<HTMLButtonElement>(`button[aria-label="${label}"]`)
        ?.focus();
      lastContentItemRef.current = null;
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [
    isAboutScene,
    isContentPanel,
    isExplorationScene,
    isWorksScene,
  ]);

  useEffect(() => {
    if (!isIslandOverview || !overviewFocusTargetRef.current) return;

    const landmark = NAVIGATORS.find(
      (navigator) => navigator.id === overviewFocusTargetRef.current,
    );
    if (!landmark) return;

    const frameId = window.requestAnimationFrame(() => {
      document
        .querySelector<HTMLButtonElement>(
          `button[aria-label="${landmark.number} ${landmark.label}, ${landmark.landmark}"]`,
        )
        ?.focus();
      overviewFocusTargetRef.current = null;
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [isIslandOverview]);

  const handleTimelineNavigate = useCallback(
    (landmark: "works" | "exploration") => {
      lastContentItemRef.current = null;
      selectNavigator(landmark);
    },
    [selectNavigator],
  );

  const handleOpenWorksContent = useCallback(
    (contentItem: WorksContentItemId) => {
      lastContentItemRef.current = contentItem;
      openContentPanel(contentItem);
    },
    [openContentPanel],
  );

  const handleOpenExplorationContent = useCallback(
    (contentItem: ExplorationContentItemId) => {
      lastContentItemRef.current = contentItem;
      openContentPanel(contentItem);
    },
    [openContentPanel],
  );

  const handleOpenAboutContent = useCallback(
    (contentItem: AboutContentItemId) => {
      lastContentItemRef.current = contentItem;
      openContentPanel(contentItem);
    },
    [openContentPanel],
  );

  const handleCloseContentPanel = useCallback(() => {
    const returnsToOverview =
      (selectedLandmark === "journey" &&
        openContentItem === "journey-timeline") ||
      (selectedLandmark === "contact" &&
        openContentItem === "contact-details");

    if (returnsToOverview) {
      lastContentItemRef.current = null;
      overviewFocusTargetRef.current = selectedLandmark;
      closeContentPanelToIslandOverview();
      return;
    }

    closeContentPanel();
  }, [
    closeContentPanel,
    closeContentPanelToIslandOverview,
    openContentItem,
    selectedLandmark,
  ]);

  const worksContent = openContentItem?.startsWith("works-")
    ? WORKS_CONTENT[openContentItem as WorksContentItemId]
    : null;
  const isAiContent = openContentItem === "exploration-ai";
  const isPhotographyContent =
    openContentItem === "exploration-photography";
  const isAboutMeContent = openContentItem === "about-me";
  const isAboutNoteContent = openContentItem === "about-note";
  const isAboutContent = isAboutMeContent || isAboutNoteContent;
  const isContactContent = openContentItem === "contact-details";

  return (
    <main
      ref={rootRef}
      className={styles.experience}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <section
        className={`${styles.scene} ${sceneVisible ? styles.sceneVisible : ""} ${isEntering ? styles.sceneEntering : ""}`}
        aria-label={sceneLabel}
        aria-hidden={(isWelcome && !isEntering) || isContentPanel}
        inert={isContentPanel ? true : undefined}
      >
        <div className={styles.backgroundLayer} aria-hidden="true" />

        <div className={styles.dotFieldLayer}>
          <InteractiveDotField
            interactive={showNavigators && !isEntering}
          />
        </div>

        <div className={styles.islandStage}>
          <div className={styles.sceneCamera} style={cameraStyle}>
            <div
              className={`${styles.islandFrame} ${islandReady ? styles.islandReady : ""}`}
            >
              <IslandArtwork
                key={attempt}
                onReady={handleIslandReady}
                onError={handleIslandError}
              />
              <div className={styles.cloudParallaxLayer}>
                <CloudLayer variant="haze" />
              </div>
              <PavilionLabel />
              <div
                className={`${styles.navigatorLayer} ${showNavigators ? styles.navigatorLayerVisible : ""}`}
                aria-hidden={!showNavigators}
              >
                {NAVIGATORS.map((navigator) => (
                  <LandmarkNavigator
                    key={navigator.id}
                    config={navigator}
                    isSelected={navigator.id === selectedLandmark}
                    isVisible={showNavigators}
                    isInteractive={showNavigators}
                    onSelect={() => selectNavigator(navigator.id)}
                  />
                ))}
              </div>
              {isWorksScene ? (
                <WorksNodes
                  sceneScale={sceneTransform.scale}
                  visitedItems={visitedContentItems}
                  onSelect={handleOpenWorksContent}
                />
              ) : null}
              {isExplorationScene ? (
                <ExplorationNodes
                  sceneScale={sceneTransform.scale}
                  visitedItems={visitedContentItems}
                  onSelect={handleOpenExplorationContent}
                />
              ) : null}
              {isAboutScene ? (
                <AboutNodes
                  sceneScale={sceneTransform.scale}
                  visitedItems={visitedContentItems}
                  onSelect={handleOpenAboutContent}
                />
              ) : null}
            </div>
          </div>
        </div>

        {hasFocusedLandmark && selectedLandmark ? (
          <>
            <TopNavigation
              selectedLandmark={selectedLandmark}
              onSelect={selectNavigator}
            />
            <MiniMap
              selectedLandmark={selectedLandmark}
              onOpen={openMiniMap}
            />
          </>
        ) : null}

        {isWorksScene ? <WorksLegend /> : null}
        {isExplorationScene ? <ExplorationIntroduction /> : null}
        {isAboutScene ? <AboutIntroduction /> : null}
        {isContactScene ? <ContactIntroduction /> : null}

        {isMiniMapOverview && selectedLandmark ? (
          <MiniMapClose
            selectedLandmark={selectedLandmark}
            onClose={closeMiniMap}
          />
        ) : null}

        {!isWelcome ? (
          <header className={styles.globalUi}>
            <Wordmark asButton onClick={returnToWelcome} />
          </header>
        ) : null}
      </section>

      {isContentPanel && openContentItem ? (
        <ContentPanel
          eyebrow={
            worksContent
              ? "Works · Maze Garden"
              : isAiContent || isPhotographyContent
                ? "Exploration · Outdoor Theatre"
                : isAboutContent
                  ? "About · Natural Lake"
                  : isContactContent
                    ? "Contact · Lighthouse"
                    : undefined
          }
          title={
            worksContent
              ? worksContent.title
              : isAiContent
                ? "AI"
                : isPhotographyContent
                  ? "Photography"
                  : isAboutMeContent
                    ? "About Me"
                    : isAboutNoteContent
                      ? "A Letter to You"
                      : isContactContent
                        ? "Let's Connect"
                        : "Timeline"
          }
          introduction={
            worksContent
              ? worksContent.introduction
              : isAiContent
                ? AI_PANEL_INTRODUCTION
                : isPhotographyContent
                  ? PHOTOGRAPHY_PANEL_INTRODUCTION
                  : isAboutMeContent
                    ? ABOUT_PANEL_INTRODUCTION
                    : isAboutNoteContent
                      ? LETTER_TO_YOU_PANEL_INTRODUCTION
                      : isContactContent
                        ? CONTACT_PANEL_INTRODUCTION
                        : TIMELINE_INTRODUCTION
          }
          onClose={handleCloseContentPanel}
          onReturnToWelcome={returnToWelcome}
        >
          {worksContent ? (
            <WorksPanel content={worksContent} />
          ) : isAiContent ? (
            <AIExplorationPanel />
          ) : isPhotographyContent ? (
            <PhotographyPanel />
          ) : isAboutMeContent ? (
            <AboutPanel />
          ) : isAboutNoteContent ? (
            <LetterPanel />
          ) : isContactContent ? (
            <ContactPanel />
          ) : (
            <TimelinePanel onNavigate={handleTimelineNavigate} />
          )}
        </ContentPanel>
      ) : null}

      <WelcomeScreen
        loadingProgress={displayedProgress}
        assetsReady={sceneReady}
        loadError={loadError}
        visible={isWelcome}
        onRetry={handleRetry}
      />
    </main>
  );
}
