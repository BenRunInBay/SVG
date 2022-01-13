/**
 * Router
 * @date 2022-01-07
 */
import Vue from 'vue'
import { createRouter, createWebHistory, RouteLocationRaw, RouteLocationNormalizedLoaded } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "Introduction",
    component: () =>
      import(/* webpackChunkName: "Introduction" */ "./views/intro/Introduction.vue")
  },
  {
    path: "/about",
    component: () =>
      import(/* webpackChunkName: "IntroductionAbout" */ "./views/intro/About.vue")
  },
  {
    path: "/principals",
    component: () =>
      import(/* webpackChunkName: "IntroductionPrincipals" */ "./views/intro/Principals.vue")
  },
  {
    path: "/poll1",
    component: () =>
      import(/* webpackChunkName: "Poll1" */ "./views/Poll1.vue")
  },
  {
    path: "/typical",
    component: () =>
      import(/* webpackChunkName: "TypicalWebDesign" */ "./views/typical/TypicalWebDesign.vue")
  },
  {
    path: "/typical1",
    component: () =>
      import(/* webpackChunkName: "TypicalWebDesign_Scroll" */ "./views/typical/Scroll.vue")
  },
  {
    path: "/typical2",
    component: () =>
      import(/* webpackChunkName: "TypicalWebDesign_Grid" */ "./views/typical/Grid.vue")
  },
  {
    path: "/challenge",
    component: () =>
      import(/* webpackChunkName: "Challenge" */ "./views/challenge/Challenge.vue")
  },
  {
    path: "/problem",
    component: () =>
      import(/* webpackChunkName: "ChallengeExample" */ "./views/challenge/ChallengeExample.vue")
  },
  {
    path: "/definition",
    component: () =>
      import(/* webpackChunkName: "WhatIsResponsive" */ "./views/challenge/WhatIsResponsive.vue")
  },

  {
    path: "/technique1",
    name: "Technique 1: Adaptive",
    component: () =>
      import(/* webpackChunkName: "Technique1" */ "./views/tech1/Technique1.vue")
  },

  {
    path: "/poll2",
    name: "SVG Primer",
    component: () =>
      import(/* webpackChunkName: "Poll2" */ "./views/Poll2.vue")
  },
  {
    path: "/primer",
    component: () =>
      import(/* webpackChunkName: "Primer" */ "./views/primer/Primer.vue")
  },
  {
    path: "/dimensions",
    component: () =>
      import(/* webpackChunkName: "PrimerDimensions" */ "./views/primer/Dimensions.vue")
  },
  {
    path: "/fontsize",
    component: () =>
      import(/* webpackChunkName: "PrimerFontSize" */ "./views/primer/FontSize.vue")
  },
  {
    path: "/foreignobject",
    component: () =>
      import(/* webpackChunkName: "PrimerForeignObject" */ "./views/primer/ForeignObject.vue")
  },
  {
    path: "/using",
    component: () =>
      import(/* webpackChunkName: "PrimerUsing" */ "./views/primer/Using.vue")
  },
  {
    path: "/usinginline",
    component: () =>
      import(/* webpackChunkName: "PrimerUsingInline" */ "./views/primer/UsingInline.vue")
  },
  {
    path: "/reactive",
    component: () =>
      import(/* webpackChunkName: "PrimerReactive" */ "./views/primer/Reactive.vue")
  },
  {
    path: "/imagerefs",
    component: () =>
      import(/* webpackChunkName: "PrimerImageRefs" */ "./views/primer/ImageRefs.vue")
  },
  {
    path: "/symbols",
    component: () =>
      import(/* webpackChunkName: "PrimerSymbols" */ "./views/primer/Symbols.vue")
  },

  {
    path: "/technique2",
    name: "Technique 2: Media Queries",
    component: () =>
      import(/* webpackChunkName: "Technique2" */ "./views/tech2/Technique2.vue")
  },
  {
    path: "/technique2mq",
    component: () =>
      import(/* webpackChunkName: "Technique2MediaQuery" */ "./views/tech2/MediaQuery.vue")
  },
  {
    path: "/technique2object",
    component: () =>
      import(/* webpackChunkName: "Technique2ObjectMediaQuery" */ "./views/tech2/ObjectMediaQuery.vue")
  },
  {
    path: "/steps-rotated",
    component: () =>
      import(/* webpackChunkName: "Technique2StepsDiagram" */ "./views/tech2/StepsDiagram.vue")
  },

  {
    path: "/poll3",
    name: "Graphics Software",
    component: () =>
      import(/* webpackChunkName: "Poll3" */ "./views/Poll3.vue")
  },
  {
    path: "/illustrator",
    component: () =>
      import(/* webpackChunkName: "GraphicsSoftwareIllustratorSetup" */ "./views/software/IllustratorSetup.vue")
  },
  {
    path: "/figma",
    component: () =>
      import(/* webpackChunkName: "GraphicsSoftwareFigma" */ "./views/software/Figma.vue")
  },
  {
    path: "/figmaexample",
    component: () =>
      import(/* webpackChunkName: "GraphicsSoftwareFigmaExample" */ "./views/software/FigmaExample.vue")
  },
  {
    path: "/softsummary",
    component: () =>
      import(/* webpackChunkName: "SoftwareSummary" */ "./views/software/SoftwareSummary.vue")
  },

  {
    path: "/technique3",
    name: "Technique 3: Programmatic",
    component: () =>
      import(/* webpackChunkName: "Technique3" */ "./views/tech3/Technique3.vue")
  },
  {
    path: "/spiraldiagram",
    component: () =>
      import(/* webpackChunkName: "SpiralExample" */ "./views/tech3/SpiralExample.vue")
  },
  {
    path: "/technique3simplesvg",
    component: () =>
      import(/* webpackChunkName: "Technique3SimpleSVG" */ "./views/tech3/SimpleSVG.vue")
  },
  {
    path: "/technique3resizeviewbox",
    component: () =>
      import(/* webpackChunkName: "Technique3ResizeViewBox" */ "./views/tech3/ResizeViewBox.vue")
  }, 
  {
    path: "/svgcoordinates",
    component: () =>
      import(/* webpackChunkName: "Technique3Coordinates" */ "./views/tech3/Coordinates.vue")
  },
  {
    path: "/spiraldiagramresponsive",
    component: () =>
      import(/* webpackChunkName: "SpiralResponsive" */ "./views/tech3/SpiralResponsive.vue")
  },
  {
    path: "/technique3d3",
    component: () =>
      import(/* webpackChunkName: "D3CirclePack" */ "./views/tech3/D3CirclePack.vue")
  },
  
  {
    path: "/svglayout",
    name: "Using SVG for Page Layout",
    component: () =>
      import(/* webpackChunkName: "SVGLayout" */ "./views/layout/SVGLayout.vue")
  },
  {
    path: "/svglayoutdemo",
    component: () =>
      import(/* webpackChunkName: "SVGLayoutDemo" */ "./views/layout/SVGLayoutDemo.vue")
  },
  {
    path: "/poll4",
    component: () =>
      import(/* webpackChunkName: "Poll4" */ "./views/Poll4.vue")
  },

  {
    path: "/summary",
    name: "Summary and Q&A",
    component: () =>
      import(/* webpackChunkName: "Summary" */ "./views/summary/Summary.vue")
  },

  /* Time permitting: */
  {
    path: "/animation",
    name: "Addendum: Animation",
    component: () =>
      import(/* webpackChunkName: "Animation" */ "./views/summary/Animation.vue")
  },
  {
    path: "/accessiblity",
    name: "Addendum: Accessiblity",
    component: () =>
      import(/* webpackChunkName: "Accessiblity" */ "./views/summary/Accessiblity.vue")
  },
  

  { path: "/:pathMatch(.*)*", redirect: "/" }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
});
