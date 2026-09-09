export interface WUT_body_text {
  type: 'text'
  body: string
}

const WriteUpText = ({ body }: Omit<WUT_body_text, 'type'>) => {
  return (
    <div>
      {body}
    </div>
  )
}

export default WriteUpText