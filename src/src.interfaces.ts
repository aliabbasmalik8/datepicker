import { CSSProperties } from 'react'
/**
 * The standard way that we are storing inline css for a component
 * This should type the `styles` constant in the component file.
**/
export interface CSSLibrary {
  [name: string]: CSSProperties,
}
