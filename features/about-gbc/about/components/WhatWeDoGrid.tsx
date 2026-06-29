import { MotionStagger } from "@/components/shared/animations";

import { WhatWeDoItem } from "../types";

import WhatWeDoCard from "./WhatWeDoCard";

type Props = {
  data: WhatWeDoItem[];
};

export default function WhatWeDoGrid({ data }: Props) {
  if (!data.length) return null;

  const [featured, ...items] = data;

  return (
    <MotionStagger className="space-y-6">
      {/* Featured Card */}

      <WhatWeDoCard item={featured} featured />

      {/* Bottom Cards */}

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <WhatWeDoCard key={item.title} item={item} />
        ))}
      </div>
    </MotionStagger>
  );
}
