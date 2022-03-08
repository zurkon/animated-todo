const Layout: React.FC = ({ children }) => {
  return (
    <div className="w-full sm:max-w-[640px] mx-auto h-screen flex flex-col px-0 sm:px-2">
      {children}
    </div>
  )
}

export default Layout