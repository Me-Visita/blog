import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-6xl md:text-7xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-center">
      {children}
    </h1>
  )
}

export default PostTitle
