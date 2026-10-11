---
draft: false
title: Efteling
date: current
featuredImage: /images/cases/efteling-featured.jpg
list:
  employer: efteling
  projectType: nextjs
  url: https://efteling.com/
excerpt: Moving the Efteling website from the classic platform to a brand new
  Next.js and SitecoreAI platform, with a complete redesign. From the Grand
  Hotel landing page to the full hotel booking flow.
devicePreview: /images/cases/efteling-device-preview.png
content: >-
  Through [iO](https://iodigital.nl/) I ended up at the Efteling. When I joined
  in early 2023, the mission was clear and we had to phase out the classic platform.
  Everything on the old environment would move over, step by step, to a brand
  new platform built with Next.js and SitecoreAI. I'm part of the Hotels &
  Resorts team and I built everything to do with staying the night at the
  Efteling.


  When I started working at the Efteling the Grand Hotel was hot topic and my first priority. Its landing page was also the very first page to launch on the new platform, complete with a fancy parallax header animated with [GSAP](https://gsap.com/). It was the first time I built one, so a very nice way to kick things off!


  After that I moved on to the booking flows, from orientation all the way to placing and managing your booking. You start by searching for an accommodation, picking your dates and setting up your travel group. From there a booking wizard guides you through all the extras, like park tickets, breakfast, the theater show and dinner, before you fill in your details and pay. Coming with a bigger group? You can even book multiple accommodations in one go. And once you've booked, you can log in to "Mijn Efteling" to view your booking, add extras or make changes to it.


  An application like this holds a lot of state, so I use [Zustand](https://github.com/pmndrs/zustand) to manage it and [TanStack Query](https://tanstack.com/query) to fetch and cache all data. Every component is built and documented in [Storybook](https://storybook.js.org/), and [Chromatic](https://www.chromatic.com/) runs visual tests on them so I spot unexpected changes before they hit production. I also run A/B tests to find out what works best for our visitors.


  On top of the migration, the website also got a complete redesign. Each part of the Efteling has its own identity, so I set up a theming system that lets every component switch its look based on where you are: the Efteling park, Efteling Hotel, Bosrijk, Loonsche Land or the Grand Hotel. Since the migration is still in progress, the old and new designs live side by side.


  All of this is live by now and a big part of the classic platform has moved over, but I'm far from done. There's still a lot of work ahead, and that's exactly what keeps it exciting. It's really awesome to work on an application with this much impact: the Efteling welcomes millions of visitors every year and almost every hotel guest books their stay through code I wrote. Check out the [site](https://www.efteling.com/) and see it in action.


  Quick links:


  * [SitecoreAI](https://www.sitecore.com/)

  * [Next.js](https://nextjs.org/)

  * [TypeScript](https://www.typescriptlang.org/)

  * [Storybook](https://storybook.js.org/)

  * [Chromatic](https://www.chromatic.com/)

  * [GSAP](https://gsap.com/)

  * [Zustand](https://github.com/pmndrs/zustand)

  * [TanStack Query](https://tanstack.com/query)
meta:
  title: Efteling
  description: Moving the Efteling website from the classic platform to a brand
    new Next.js and SitecoreAI platform, with a complete redesign.
---
