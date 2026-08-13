"use client";

import { useCallback, useEffect, useState } from "react";
import { ESSENTIAL_ASSETS } from "@/config/assets";

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const image = new window.Image();
    image.onload = () => resolve();
    image.onerror = () => reject(new Error(`Failed to load ${src}`));
    image.src = src;
  });
}

export function useAssetPreloader() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [assetsReady, setAssetsReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  const retry = useCallback(() => {
    setLoadingProgress(0);
    setAssetsReady(false);
    setError(null);
    setAttempt((currentAttempt) => currentAttempt + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const assets = [...ESSENTIAL_ASSETS];

    async function loadAssets() {
      if (assets.length === 0) {
        if (!cancelled) {
          setLoadingProgress(100);
          setAssetsReady(true);
        }
        return;
      }

      let loaded = 0;

      for (const asset of assets) {
        try {
          const cacheBustedAsset = attempt > 0 ? `${asset}?retry=${attempt}` : asset;
          await preloadImage(cacheBustedAsset);
        } catch {
          if (!cancelled) {
            setError(`Unable to load essential asset: ${asset}`);
          }
          return;
        }

        loaded += 1;
        if (!cancelled) {
          setLoadingProgress(Math.round((loaded / assets.length) * 100));
        }
      }

      if (!cancelled) {
        setAssetsReady(true);
      }
    }

    void loadAssets();

    return () => {
      cancelled = true;
    };
  }, [attempt]);

  return { loadingProgress, assetsReady, error, retry, attempt };
}
