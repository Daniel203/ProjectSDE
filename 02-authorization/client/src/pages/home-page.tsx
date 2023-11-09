import React from "react";
import { PageLayout } from "../components/page-layout";

export const HomePage: React.FC = () => (
  <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Home Page
        </h1>
      </div>
  </PageLayout>
);
