import { useCallback, useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/languageStore.js'
import { getAllProjects, sortProjectsByYearDesc } from '../models/projects.js'

export function useProjectCarouselViewModel() {
  const { t } = useLanguage()
  const projects = sortProjectsByYearDesc(getAllProjects())
  const trackRef = useRef(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const syncScrollState = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const maxScroll = track.scrollWidth - track.clientWidth
    setCanScrollPrev(track.scrollLeft > 1)
    setCanScrollNext(track.scrollLeft < maxScroll - 1)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    syncScrollState()
    track.addEventListener('scroll', syncScrollState, { passive: true })
    window.addEventListener('resize', syncScrollState)

    return () => {
      track.removeEventListener('scroll', syncScrollState)
      window.removeEventListener('resize', syncScrollState)
    }
  }, [syncScrollState, projects.length])

  /** @param {1 | -1} direction */
  const scrollByCard = useCallback((direction) => {
    const track = trackRef.current
    if (!track) return

    const cards = track.querySelectorAll('[data-carousel-card]')
    let distance = track.clientWidth * 0.8
    if (cards.length > 1) {
      distance = cards[1].offsetLeft - cards[0].offsetLeft
    } else if (cards.length === 1) {
      distance = cards[0].getBoundingClientRect().width
    }

    // Work out where the track will come to rest *before* moving it: an
    // instant scroll updates `scrollLeft` synchronously, which would otherwise
    // make the step count twice.
    const maxScroll = track.scrollWidth - track.clientWidth
    const target = Math.min(
      maxScroll,
      Math.max(0, track.scrollLeft + direction * distance),
    )

    // Smoothness comes from `scroll-behavior` in CSS, which also lets the
    // reduced-motion media query turn the animation off.
    track.scrollBy({ left: direction * distance })

    // Drive the arrows from that predicted position rather than waiting on a
    // `scroll` event, which browsers do not reliably emit for programmatic
    // scrolling. Manual swipes still come through the listener.
    setCanScrollPrev(target > 1)
    setCanScrollNext(target < maxScroll - 1)
  }, [])

  return {
    projects,
    trackRef,
    canScrollPrev,
    canScrollNext,
    scrollPrev: () => scrollByCard(-1),
    scrollNext: () => scrollByCard(1),
    text: t.home.projectsSection,
  }
}
