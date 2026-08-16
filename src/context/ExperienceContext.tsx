"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  ISLAND_OVERVIEW_TRANSFORM,
  LANDMARK_TRANSFORMS,
} from "@/config/scene";
import type {
  ContentItemId,
  ExperienceState,
  LandmarkId,
  SceneTransform,
} from "@/types/experience";

interface ExperienceContextValue {
  experienceState: ExperienceState;
  selectedLandmark: LandmarkId | null;
  openContentItem: ContentItemId | null;
  visitedContentItems: ReadonlySet<ContentItemId>;
  sceneTransform: SceneTransform;
  isEntering: boolean;
  selectNavigator: (landmark: LandmarkId) => void;
  returnToIslandOverview: () => void;
  openContentPanel: (contentItem: ContentItemId) => void;
  closeContentPanel: () => void;
  closeContentPanelToIslandOverview: () => void;
  enterIsland: () => void;
  returnToWelcome: () => void;
  completeEnterTransition: () => void;
}

const ExperienceContext = createContext<ExperienceContextValue | null>(null);

export function ExperienceProvider({ children }: { children: ReactNode }) {
  const [experienceState, setExperienceState] =
    useState<ExperienceState>("welcome");
  const [selectedLandmark, setSelectedLandmark] = useState<LandmarkId | null>(
    null,
  );
  const [sceneTransform, setSceneTransform] = useState<SceneTransform>(
    ISLAND_OVERVIEW_TRANSFORM,
  );
  const [openContentItem, setOpenContentItem] =
    useState<ContentItemId | null>(null);
  const [visitedContentItems, setVisitedContentItems] = useState<
    ReadonlySet<ContentItemId>
  >(() => new Set());
  const [isEntering, setIsEntering] = useState(false);

  const selectNavigator = useCallback((landmark: LandmarkId) => {
    setIsEntering(false);
    setOpenContentItem(null);
    setSelectedLandmark(landmark);
    setSceneTransform(LANDMARK_TRANSFORMS[landmark]);
    setExperienceState("landmark-view");
  }, []);

  const returnToIslandOverview = useCallback(() => {
    setOpenContentItem(null);
    setSelectedLandmark(null);
    setSceneTransform(ISLAND_OVERVIEW_TRANSFORM);
    setExperienceState("island-overview");
  }, []);

  const openContentPanel = useCallback((contentItem: ContentItemId) => {
    setOpenContentItem(contentItem);
    setVisitedContentItems((current) => {
      const next = new Set(current);
      next.add(contentItem);
      return next;
    });
    setExperienceState("content-panel");
  }, []);

  const closeContentPanel = useCallback(() => {
    setOpenContentItem(null);
    setExperienceState((current) =>
      current === "content-panel" ? "landmark-view" : current,
    );
  }, []);

  const closeContentPanelToIslandOverview = useCallback(() => {
    setOpenContentItem(null);
    setSelectedLandmark(null);
    setSceneTransform(ISLAND_OVERVIEW_TRANSFORM);
    setExperienceState("island-overview");
  }, []);

  const enterIsland = useCallback(() => {
    setIsEntering(true);
  }, []);

  const completeEnterTransition = useCallback(() => {
    setIsEntering(false);
    setExperienceState("island-overview");
  }, []);

  const returnToWelcome = useCallback(() => {
    setOpenContentItem(null);
    setSelectedLandmark(null);
    setSceneTransform(ISLAND_OVERVIEW_TRANSFORM);
    setExperienceState("welcome");
    setIsEntering(false);
  }, []);

  const value = useMemo<ExperienceContextValue>(
    () => ({
      experienceState,
      selectedLandmark,
      openContentItem,
      visitedContentItems,
      sceneTransform,
      isEntering,
      selectNavigator,
      returnToIslandOverview,
      openContentPanel,
      closeContentPanel,
      closeContentPanelToIslandOverview,
      enterIsland,
      returnToWelcome,
      completeEnterTransition,
    }),
    [
      experienceState,
      selectedLandmark,
      openContentItem,
      visitedContentItems,
      sceneTransform,
      isEntering,
      selectNavigator,
      returnToIslandOverview,
      openContentPanel,
      closeContentPanel,
      closeContentPanelToIslandOverview,
      enterIsland,
      returnToWelcome,
      completeEnterTransition,
    ],
  );

  return (
    <ExperienceContext.Provider value={value}>
      {children}
    </ExperienceContext.Provider>
  );
}

export function useExperience(): ExperienceContextValue {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error("useExperience must be used within ExperienceProvider");
  }
  return context;
}
