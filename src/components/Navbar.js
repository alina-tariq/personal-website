import { Disclosure } from '@headlessui/react'
import { Link } from "react-scroll";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { animateScroll as scroll } from 'react-scroll';

const navigation = [
  { name: 'about', href: '/about', hover: 'text-stone-100' },
  { name: 'experience', href: '/experience', hover: 'text-stone-100' },
  { name: 'projects', href: '/projects', hover: 'text-stone-100' },
  { name: 'skills', href: '/skills', hover: 'text-stone-100' },
  { name: 'contact', href: '/contact', hover: 'text-stone-100' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="w-full fixed top-0 z-50 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-24 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 
                text-stone-300 hover:border-2 hover:border-stone-300 focus:outline-none">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={require("../assets/img/logo.png")}
                    alt="Logo"
                    onClick={scroll.scrollToTop}
                    style={{cursor:'pointer'}}
                  />
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="absolute right-0 flex space-x-4 font-DaiBanna">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(item.hover, 'hover:border-2 hover:border-amber-500',
                          'rounded-md px-1 py-1 text-2xl font-bold'
                        )}
                      >
                        <Link activeClass="text-amber-500 rounded-md" smooth={'easeInOutQuint'} spy to={item.href}>
                          {item.name}
                        </Link>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-6 pb-3 pt-2 font-DaiBanna">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(item.hover, 'hover:border-2 hover:border-stone-300',
                    'block rounded-md px-2 py-2 text-2xl font-bold'
                  )}
                >
                  <Link activeClass="text-amber-500 rounded-md py-2" smooth spy to={item.href}>{item.name}</Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}