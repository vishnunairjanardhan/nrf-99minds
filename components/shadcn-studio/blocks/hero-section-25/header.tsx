'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

import {
  HeroNavigation01,
  HeroNavigation01SmallScreen,
  type Navigation
} from '@/components/shadcn-studio/blocks/hero-navigation-01'

import { cn } from '@/lib/utils'

import Logo from '@/components/shadcn-studio/logo'

type HeaderProps = {
  navigationData: Navigation[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 h-16 w-full border-b transition-all duration-300',
        {
          'bg-card/75 backdrop-blur': isScrolled
        },
        className
      )}
    >

    </header>
  )
}

export default Header
