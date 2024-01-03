interface ContainerProps {
  children: React.ReactNode,
  className?: string
}

const Container = ({children, className} : ContainerProps) => {
  return (
    <div className={`${className} max-w-screen-xl mx-auto px-6`}>
      {children}
    </div>
  )
}

export default Container