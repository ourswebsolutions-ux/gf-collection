"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "4bro:welcomed";
const WORD = ["4", " ", "B", "R", "O"];
// Timeline (ms) — mirrors the keyframes in globals.css (“Welcome sequence”).
const TIMING = { normal: { reveal: 2450, done: 4300 }, reduced: { reveal: 700, done: 1100 }, skip: { done: 900 } };

/**
 * Runs before first paint (inline in the storefront layout): decides whether this
 * page view gets the intro. Only the first storefront page of a browser session,
 * never account/bag/tracking pages; refreshes and navigation never replay it.
 * Without JavaScript nothing is shown.
 */
export const WELCOME_GATE = `(function(){var d=document.documentElement;try{var p=location.pathname.replace(/^\\/(ur|hi)(?=\\/|$)/,"")||"/";if(sessionStorage.getItem("${SESSION_KEY}")||/^\\/(account|cart|track-order)(\\/|$)/.test(p)){d.dataset.welcome="done";return}sessionStorage.setItem("${SESSION_KEY}","1");d.dataset.welcome="play"}catch(e){d.dataset.welcome="done"}})();`;

/**
 * GF Collection intro: the real logo (public/logo.png, trimmed copy) resolves from
 * blur on ivory, a soft light passes across it, the tagline settles, then a curtain
 * lifts to reveal the homepage. Pure CSS animation (see globals.css); this component
 * only releases the page entrance at the right moment and handles skipping.
 * Decorative: hidden from assistive technology; any key or click skips it.
 */
export function WelcomeSplash({ skipLabel, tagline }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (html.dataset.welcome !== "play") return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timing = reduced ? TIMING.reduced : TIMING.normal;
    // The CSS timeline started at first paint; align to navigation start, not hydration.
    const elapsed = performance.now();
    const at = (ms) => Math.max(0, ms - elapsed);
    const timers = [];
    const finish = () => {
      html.dataset.welcome = "done";
      setVisible(false);
    };
    timers.push(setTimeout(() => html.dataset.welcome === "play" && (html.dataset.welcome = "reveal"), at(timing.reveal)));
    timers.push(setTimeout(finish, at(timing.done)));

    const skip = () => {
      if (html.dataset.welcome === "done" || html.dataset.welcome === "exit") return;
      timers.forEach(clearTimeout);
      html.dataset.welcome = "exit";
      timers.push(setTimeout(finish, TIMING.skip.done));
    };
    const onKey = (event) => !["Shift", "Control", "Alt", "Meta"].includes(event.key) && skip();
    // Hold the page still under the intro without touching overflow (no layout shift).
    const hold = (event) => html.dataset.welcome === "play" && event.preventDefault();
    const splash = document.getElementById("welcome");
    splash?.addEventListener("click", skip);
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", hold, { passive: false });
    window.addEventListener("touchmove", hold, { passive: false });

    return () => {
      timers.forEach(clearTimeout);
      splash?.removeEventListener("click", skip);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", hold);
      window.removeEventListener("touchmove", hold);
    };
  }, []);

  if (!visible) return null;

  return (
    <div id="welcome" className="welcome" aria-hidden="true">
      <div className="welcome__ambient" />
      <div className="welcome__content">
        <div className="welcome__mark">
          {/* The actual GF Collection logo (trimmed copy of public/logo.png). */}
          {/* eslint-disable-next-line @next/next/no-img-element -- fixed-size brand mark, also used as the sheen mask */}
          <img src="/brand/gf-logo.png" width="168" height="242" alt="" decoding="async" loading="lazy" fetchPriority="high" />
          <span className="welcome__sheen" />
        </div>
        <p className="welcome__tagline">
          <i className="welcome__rule" />
          <span>{tagline}</span>
          <i className="welcome__rule" />
        </p>
      </div>
      <span className="welcome__skip">{skipLabel}</span>
    </div>
  );
}
