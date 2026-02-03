import type { ReactNode } from "react";
import type { RouteObject } from "react-router-dom";

/**
 * Meta information for routes
 */
export interface MetaProps {
  title: string;
  requiresAuth?: boolean;
  icon?: ReactNode;
  order?: number;
}

/**
 * Extended route object type
 */
export interface RouteObjectType extends Omit<RouteObject, "children"> {
  meta?: MetaProps;
  children?: RouteObjectType[];
  hidden?: boolean;
}
