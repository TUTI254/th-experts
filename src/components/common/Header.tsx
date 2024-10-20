import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronsUpDown } from 'lucide-react'

const navigation = [
  { name: 'Spaces', href: '#', current: true },
  { name: 'Services', href: '#', current: false },
  { name: 'Users', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto w-full px-8 py-2 border-b-2 border-gray-200">
        <div className="relative flex h-16 items-center justify-between ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="/logo.png"
                className="h-10 w-auto mt-2"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name} 
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? ' text-blue-900 hover:text-blue-700' : 'text-blue-700 hover:text-blue-400',
                      'rounded-md px-3 py-2 mt-3 text-md   font-medium',
                    )}  
                  >
                    {item.name}
                  </a>
                ))}
                <a href="#" className="rounded-md px-4 py-2 mt-2 text-md font-medium bg-blue-700 text-white hover:bg-blue-900 ">
                  Sign In
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> 

            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="px-2 py-1 border-2 border-blue-700 text-blue-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md text-sm">
                  <div className="flex items-center space-x-2">
                    <img src="/GB.svg" alt="gb-flag" className="w-5 h-5" />
                    <span>EN</span>
                    <ChevronsUpDown className="w-3 h-3" />
                  </div>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <div className="flex items-center space-x-2 px-2 py-2">
                    <img src="/GB.svg" alt="gb-flag" className="w-5 h-5" />
                    <span>EN</span>
                  </div>
                </MenuItem>   
                <MenuItem>
                  <div className="flex items-center space-x-2 px-2 py-2 ">
                    <img src="/FI.svg" alt="gb-flag" className="w-5 h-5" />
                    <span>Suomi</span>
                  </div>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-blue-800 text-white' : 'text-blue-700  hover:bg-blue-800 hover:text-white',
                'block rounded-md px-3 py-2 text-center font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
