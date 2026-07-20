import ApplicationCard from "./ApplicationCard";

import { APPLICATION_FORMS } from "../data/applications";

export default function ApplicationGrid() {
  return (
    <div
      className="
        grid
        gap-8
        md:grid-cols-2
      "
    >
      {APPLICATION_FORMS.map((application) => (
        <ApplicationCard key={application.id} application={application} />
      ))}
    </div>
  );
}
