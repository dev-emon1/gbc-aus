import { Program } from "../types";

type FilterOptions = {
  search?: string;

  level?: string[];

  campus?: string[];
};

export function filterPrograms(programs: Program[], options: FilterOptions) {
  return programs.filter((program) => {
    const matchesSearch =
      !options.search ||
      program.title.toLowerCase().includes(options.search.toLowerCase());

    const matchesLevel =
      !options.level?.length || options.level.includes(program.level);

    const matchesCampus =
      !options.campus?.length ||
      options.campus.includes(program.quickFacts.campus);

    return matchesSearch && matchesLevel && matchesCampus;
  });
}
