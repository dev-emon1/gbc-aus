import { Program } from "../types";

export function sortPrograms(programs: Program[], sort: string) {
  switch (sort) {
    case "a-z":
      return [...programs].sort((a, b) => a.title.localeCompare(b.title));

    case "z-a":
      return [...programs].sort((a, b) => b.title.localeCompare(a.title));

    case "featured":
      return [...programs].sort(
        (a, b) => Number(b.featured) - Number(a.featured),
      );

    default:
      return programs;
  }
}
