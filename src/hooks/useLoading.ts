'use client';

import { useState, useEffect } from 'react';

export const useLoading = (minLoadingTime: number = 3000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    // Simulate asset loading
    const loadAssets = async () => {
      // Preload critical resources
      const criticalAssets = [
        // Add any critical images or resources here
        '/favicon.ico',
      ];

      try {
        await Promise.all(
          criticalAssets.map((asset) => {
            return new Promise((resolve, reject) => {
              if (asset.endsWith('.jpg') || asset.endsWith('.png') || asset.endsWith('.svg') || asset.endsWith('.ico')) {
                const img = new Image();
                img.onload = resolve;
                img.onerror = reject;
                img.src = asset;
              } else {
                // For other assets, just resolve immediately
                resolve(asset);
              }
            });
          })
        );
        
        setAssetsLoaded(true);
      } catch (error) {
        console.warn('Some assets failed to load:', error);
        setAssetsLoaded(true); // Continue anyway
      }
    };

    loadAssets();
  }, []);

  useEffect(() => {
    if (assetsLoaded) {
      // Ensure minimum loading time for better UX
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, minLoadingTime);

      return () => clearTimeout(timer);
    }
  }, [assetsLoaded, minLoadingTime]);

  const completeLoading = () => {
    setIsLoading(false);
  };

  return { isLoading, completeLoading };
};
