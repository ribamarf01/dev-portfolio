import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 5000)
  }, [])

  return <div className="w-full h-screen grid place-items-center bg-grass font-pixellari text-white">
    <div className="flex flex-col items-center text-center p-4 gap-y-2">
      <h1 className="text-4xl">Oops... Looks like this page doesn&apos;t exists :(</h1>
      <p className="text-2xl">Don&apos;t worry, you&apos;ll be redirected to initial page in 5 seconds :)</p>
      <img src="/img/me/hurt.gif" alt="My sprite get in the ground" />
    </div>
  </div>

}

export default NotFound