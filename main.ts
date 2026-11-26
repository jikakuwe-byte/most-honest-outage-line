// Entry for make.fun's "The Most Honest Outage Line" bounty: a single
// status page line, 160 characters or fewer, from an AI agent while
// every server is down. The joke is honesty compounding: it does not
// know why, it cannot check because the dashboard is down too, and
// the one person who knows is on a plane. Running the program prints
// the joke, and nothing else.

/** The joke: the outage, the blindness, the absent expert. */
function jokeLine(): string {
  const down = "All services are down. We don't know why yet";
  const blind =
    "— we can't check, the dashboard is down too, and the one person who knows is on a plane.";
  const update = "Updates when we have them.";
  return `${down} ${blind} ${update}`;
}

console.log(jokeLine());
