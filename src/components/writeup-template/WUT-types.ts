/** Types used by composable elements within the write up templates */
/** WUT_manifest */
export type WUT_manifest = {
  slug: string
  manifest: WUT_body[]
}

/** Common base type for composable body components. */
export type WUT_body = WUT_body_text | WUT_body_img

export interface WUT_body_text {
  type: 'text'
  body: string
}

export interface WUT_body_img {
  type: 'img'
  url: string
  alt: string
  caption: string
}

