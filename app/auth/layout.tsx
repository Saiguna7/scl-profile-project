import ClientProvider from "@/components/auth/ClientProviders"


const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <ClientProvider>
    <div className="h-full flex items-center justify-center">
      {children}
    </div>
    </ClientProvider>
  )
}

export default AuthLayout

