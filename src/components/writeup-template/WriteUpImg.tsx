export interface WUT_body_img {
  type: 'img'
  url: string
  alt: string
  caption: string
}

const WriteUpImg = ({url, alt, caption}: Omit<WUT_body_img, 'type'>) => {
  return (
    <div>
      <div>
        <img src={url ?? 'https://plachold.co/400'} alt={alt ?? ''} />
      </div>
      <p>{caption}</p>
    </div>
  )
}

export default WriteUpImg