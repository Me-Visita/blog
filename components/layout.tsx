import Meta from './meta'
import NavBar from './nav-bar'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <NavBar />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
