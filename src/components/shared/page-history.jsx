import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

function PageHistory() {
  const breadcrumbs = useBreadcrumbs();

  return (
    <Breadcrumb >
      <BreadcrumbList className="gap-0 sm:gap-0 ml-3">
        {breadcrumbs.map(({ match, breadcrumb }, index) => (
          <div
            key={match.pathname}
            className="flex justify-center items-center"
          >
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link to={match.pathname}>{breadcrumb}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && (
              <BreadcrumbSeparator>
               /
              </BreadcrumbSeparator>
            )}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default PageHistory;
