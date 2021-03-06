import BLOG from '@/blog.config'
import SideBarDrawer from '@/components/SideBarDrawer'
import { useGlobal } from '@/lib/global'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import throttle from 'lodash.throttle'
import DarkModeButton from '@/components/DarkModeButton'

let windowTop = 0

const TopNav = ({
  tags,
  currentTag,
  post,
  posts,
  categories,
  currentCategory,
  autoHide = true
}) => {
  const drawer = useRef()
  const { locale } = useGlobal()

  const scrollTrigger = useCallback(
    throttle(() => {
      const scrollS = window.scrollY
      if (scrollS >= windowTop && scrollS > 10) {
        const nav = document.querySelector('#sticky-nav')
        nav && nav.classList.replace('top-0', '-top-16')
        nav && nav.classList.replace('glassmorphism', 'bg-transparent')
        windowTop = scrollS
      } else {
        const nav = document.querySelector('#sticky-nav')
        nav && nav.classList.replace('-top-16', 'top-0')
        nav && nav.classList.replace('bg-transparent', 'glassmorphism')
        windowTop = scrollS
      }
    }, 200)
  )

  // monitor scroll
  useEffect(() => {
    if (autoHide) {
      scrollTrigger()
      window.addEventListener('scroll', scrollTrigger)
    }
    return () => {
      autoHide && window.removeEventListener('scroll', scrollTrigger)
    }
  }, [])

  return (
    <div id="top-nav">
      {/* side drawer */}
      <SideBarDrawer
        post={post}
        currentTag={currentTag}
        cRef={drawer}
        tags={tags}
        posts={posts}
        categories={categories}
        currentCategory={currentCategory}
      />

      {/* Navigation Bar */}
      <div
        id="sticky-nav"
        className="flex fixed lg:relative w-full top-0 z-20 transform duration-300 glassmorphism"
      >
        <div className="w-full flex justify-between items-center p-4">
          {/* Left LOGO title */}
          <div className="flex flex-none flex-grow-0">
            <div
              onClick={() => {
                drawer.current.handleSwitchSideDrawerVisible()
              }}
              className="w-8 cursor-pointer dark:text-gray-300 block lg:hidden"
            >
              <FontAwesomeIcon icon={faBars} size={'lg'} />
            </div>
            <div className="animate-bounce relative w-10 block">
              <Image
                alt={BLOG.title}
                layout="fill"
                loading="lazy"
                src="/favicon.svg"
                className="border-black"
              />
            </div>
            <Link href="/" passHref>
              <a>
                <h1 className="cursor-pointer ml-2 w-full hover:scale-105 duration-200 transform font-mono dark:text-gray-200 whitespace-nowrap overflow-x-hidden">
                  {BLOG.title}
                </h1>
              </a>
            </Link>
          </div>

          {/* top theme button */}
          {BLOG.topThemeButton && (
            <div className="mx-2 px-1 border-l-2 pt-[0.5px] dark:border-gray-600">
              <DarkModeButton />
            </div>
          )}

          {/* top menu */}
          <div className="invisible md:visible mr-1 flex flex-nowrap flex-grow justify-end items-center text-sm space-x-4 font-mono dark:text-gray-200">
            {/* <Link href='/'>
              <a className='hover:scale-105 duration-100 transform'>{locale.NAV.INDEX}</a>
            </Link> */}
            <Link href="/archive">
              <a className="hover:scale-105 duration-100 transform">
                {locale.NAV.ARCHIVE}
              </a>
            </Link>
            <Link href="/tag">
              <a className="hover:scale-105 duration-100 transform">
                {locale.NAV.TAG}
              </a>
            </Link>
            <Link href="/feed">
              <a
                className="hover:scale-105 duration-100 transform"
                target="_blank"
                rel="noreferrer"
              >
                {locale.NAV.RSS}
              </a>
            </Link>
            <Link href="/about">
              <a className="hover:scale-105 duration-100 transform">
                {locale.NAV.ABOUT}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav
