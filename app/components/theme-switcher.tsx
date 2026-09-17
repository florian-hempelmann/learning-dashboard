"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import {useSyncExternalStore} from "react";

const emptySubscribe = () => () => {};

export function ThemeSwitcher() {
    const { resolvedTheme, setTheme } = useTheme();

    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false,
    );

    function toggleTheme() {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }

    if (!mounted) {
        return (
            <div
                aria-hidden="true"
                className="h-10 w-10"
            />
        );
    }

  return (
      <button
          type="button"
          onClick={toggleTheme}
          aria-label={
            resolvedTheme === "dark"
                ? "Zu Light Theme wechseln"
                : "Zu Dark Theme wechseln"
          }
          className="cursor-pointer p-2 text-surface-foreground hover:text-primary-foreground rounded-full"
      >
        {resolvedTheme === "dark" ? (
            <SunIcon className="h-6 w-6" />
        ) : (
            <MoonIcon className="h-6 w-6" />
        )}
      </button>
  );
}